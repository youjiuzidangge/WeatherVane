import { useState, useEffect, useCallback } from 'react';
import { ForecastItem } from '@/types/weather';
import { fetchWeatherData } from '@/services/api/weather';
import { transformWeatherData } from '@/services/transformers/weather';

export const useWeather = (city: string) => {
    const [state, setState] = useState<{
        data: ForecastItem[];
        loading: boolean;
        error: string | null;
    }>({
        data: [],
        loading: true,
        error: null
    });

    const fetchData = useCallback(async (signal: AbortSignal) => {
        try {
            setState(prev => ({ ...prev, loading: true }));
            const result = await fetchWeatherData(city, signal);
            
            setState({
                data: transformWeatherData(result.list),
                loading: false,
                error: null
            });
        } catch (err) {
            if (!signal.aborted) {
                setState({
                    data: [],
                    loading: false,
                    error: err instanceof Error ? err.message : 'Failed to fetch data'
                });
            }
        }
    }, [city]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    return state;
};