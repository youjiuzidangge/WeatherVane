import { render, screen, fireEvent } from '@testing-library/react';
import { CitySearch } from '@/features/weather/components/CitySearch';

describe('CitySearch', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders with default value', () => {
        render(<CitySearch value="Shanghai" onChange={mockOnChange} />);
        const input = screen.getByPlaceholderText('Enter city name...');
        expect(input).toHaveValue('Shanghai');
    });

    it('calls onChange when input changes', () => {
        render(<CitySearch value="" onChange={mockOnChange} />);
        const input = screen.getByPlaceholderText('Enter city name...');
        const searchButton = screen.getByRole('button');

        fireEvent.change(input, { target: { value: 'Beijing' } });
        fireEvent.click(searchButton);

        expect(mockOnChange).toHaveBeenCalledWith('Beijing');
    });

    it('renders search button', () => {
        render(<CitySearch value="" onChange={mockOnChange} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('handles empty input', () => {
        render(<CitySearch value="" onChange={mockOnChange} />);
        const searchButton = screen.getByRole('button');

        fireEvent.click(searchButton);
        expect(mockOnChange).toHaveBeenCalledWith('');
    });
});