import { render, screen } from '@testing-library/react';
import { WeatherCard } from '@/features/weather/components/WeatherCard';

describe('WeatherCard', () => {
    const mockData = {
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
    };

    it('renders weather information correctly', () => {
        render(<WeatherCard data={mockData} />);
        
        expect(screen.getByText('Tuesday')).toBeInTheDocument();
        expect(screen.getByText('25°C')).toBeInTheDocument();
        expect(screen.getByAltText('clear sky')).toBeInTheDocument();
    });
});