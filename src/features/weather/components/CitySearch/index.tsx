import { useCallback } from 'react';
import { SearchContainer, SearchInput, SearchButton } from './styles';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const CitySearch = ({ value, onChange }: Props) => {
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const city = formData.get('city')?.toString() || '';
        onChange(city);
    }, [onChange]);

    return (
        <form onSubmit={handleSubmit} name="city-search">
            <SearchContainer>
                <SearchInput
                    name="city"
                    placeholder="Enter city name..."
                    defaultValue={value}
                />
                <SearchButton type="submit">
                    <i className="fas fa-search" />
                </SearchButton>
            </SearchContainer>
        </form>
    );
};