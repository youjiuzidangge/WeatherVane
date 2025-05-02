import { render, screen } from '@testing-library/react';
import { WeatherFeature } from '@/features/weather';
import { useWeather } from '@/hooks/useWeather';
import { vi, Mock } from 'vitest';

const mockWeatherData = [
    {
        dt: 1632225600,
        main: {
            temp: 25,
            temp_min: 20,
            temp_max: 30,
            humidity: 65
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d'
            }
        ],
        dt_txt: '2021-09-21 12:00:00'
    }
];

// Mock useWeather hook
vi.mock('@/hooks/useWeather', () => ({
    useWeather: vi.fn()
}));

describe('WeatherFeature', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders loading state', () => {
        (useWeather as any).mockReturnValue({
            data: [],
            loading: true,
            error: null
        });

        const { container } = render(<WeatherFeature />);
        const skeletonContainer = container.querySelector('#skeleton');
        expect(skeletonContainer).toBeInTheDocument();
    });

    it('renders weather data', async () => {
        (useWeather as Mock).mockReturnValue({
            data: mockWeatherData,
            loading: false,
            error: null
        });

        render(<WeatherFeature />);
        // 使用更灵活的文本匹配
        expect(screen.getByText((content) => {
            return content.includes('25') && content.includes('°');
        })).toBeInTheDocument();
    });

    it('renders error state', () => {
        (useWeather as Mock).mockReturnValue({
            data: [],
            loading: false,
            error: 'Failed to fetch weather data'
        });

        render(<WeatherFeature />);
        expect(screen.getByText((content) => content.includes('Failed to fetch weather data'))).toBeInTheDocument();
    });
});