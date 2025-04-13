// src/features/weather/index.ts
import { useState } from 'react';
import { useDebounce } from 'react-use';
import {
    WeatherGrid,
    Error,
    SkeletonGrid,
    EmptyState
} from './styles';
import { useWeather } from '@/hooks/useWeather';
import { WeatherCard } from './components/WeatherCard';
import { CitySearch } from './components/CitySearch';

export const WeatherFeature = () => {
    const [city, setCity] = useState('Shanghai');
    const [searchTerm, setSearchTerm] = useState(city);
    const { data, loading, error } = useWeather(city);

    useDebounce(
        () => setCity(searchTerm),
        500,
        [searchTerm]
    );

    return (
        <div>
            <CitySearch
                value={searchTerm}
                onChange={setSearchTerm}
            />

            {loading && (
                <SkeletonGrid>
                    {Array(5).fill(null).map((_, i) => (
                        <div key={i} />
                    ))}
                </SkeletonGrid>
            )}

            {error && (
                <Error>
                    ⚠️ Failed to load weather data: {error}
                    <button onClick={() => setCity('Shanghai')}>
                        Reset to Default City
                    </button>
                </Error>
            )}

            {!loading && !error && (
                <WeatherGrid>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <WeatherCard key={item.dt} data={item} />
                        ))
                    ) : (
                        <EmptyState>
                            No weather data available for this city
                        </EmptyState>
                    )}
                </WeatherGrid>
            )}
        </div>
    );
};