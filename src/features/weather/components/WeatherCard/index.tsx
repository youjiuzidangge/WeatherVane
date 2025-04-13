import { format, fromUnixTime } from 'date-fns';
import { Card, Day, Temp, Icon, TempRange } from './styles';
import { ForecastItem } from '@/types';

interface Props {
    data: ForecastItem;
}

export const WeatherCard = ({ data }: Props) => {
    return (
        <Card>
            <Day>{format(fromUnixTime(data.dt), 'EEEE')}</Day>
            <Icon
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
            />
            <Temp>{Math.round(data.main.temp)}°C</Temp>
            <TempRange>
                <span>↑ {Math.round(data.main.temp_max)}°C</span>
                <span>↓ {Math.round(data.main.temp_min)}°C</span>
            </TempRange>
        </Card>
    );
};