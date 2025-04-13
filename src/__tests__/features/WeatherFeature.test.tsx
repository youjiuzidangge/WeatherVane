import { render, screen } from '@testing-library/react';
import { WeatherFeature } from '@/features/weather';
import { useWeather } from '@/hooks/useWeather';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('@/hooks/useWeather');

describe('WeatherFeature', () => {
    const mockWeatherData = [{
        dt: 1632225600,
        main: {
            temp: 25,
            temp_min: 20,
            temp_max: 30,
            humidity: 65
        },
        weather: [{
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
        }],
        dt_txt: '2021-09-21 12:00:00'
    }];

    beforeEach(() => {
        (useWeather as jest.Mock).mockClear();
    });

    it('renders loading state', () => {
        (useWeather as jest.Mock).mockReturnValue({
            data: [],
            loading: true,
            error: null
        });

        render(<WeatherFeature />);
        // 检查是否没有渲染天气数据
        expect(screen.queryByText(/°C/)).not.toBeInTheDocument();
        // 检查是否没有渲染错误信息
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });

    it('renders weather data', async () => {
        (useWeather as jest.Mock).mockReturnValue({
            data: mockWeatherData,
            loading: false,
            error: null
        });

        render(<WeatherFeature />);
        expect(screen.getByText('25°C')).toBeInTheDocument();
    });

    it('renders error state', () => {
        (useWeather as jest.Mock).mockReturnValue({
            data: [],
            loading: false,
            error: 'Failed to fetch weather data'
        });

        render(<WeatherFeature />);
        expect(screen.getByText(/Failed to fetch weather data/i)).toBeInTheDocument();
    });
});