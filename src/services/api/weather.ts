import { ForecastResponse } from '@/types/weather';
import { API_URL, API_ID, API_UNIT } from "@/constants";

export const fetchWeatherData = async (city: string, signal?: AbortSignal) => {
    const url = `${API_URL}?q=${city}&units=${API_UNIT}&appid=${API_ID}`;
    const response = await fetch(url, { signal });
    
    if (!response.ok) {
        throw new Error('City not found');
    }
    
    return response.json() as Promise<ForecastResponse>;
};