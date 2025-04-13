import { useState, useEffect } from 'react';
import { ForecastItem, ForecastResponse } from '@/types/weather';
import {API_URL, API_ID, API_UNIT} from "@/constants";
import {groupByDay} from "@/utils";

export const useWeather = (city: string) => {
    const [data, setData] = useState<ForecastItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);

                const url = `${API_URL}?q=${city}&units=${API_UNIT}&appid=${API_ID}`
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) throw new Error('City not found');

                const result: ForecastResponse = await response.json();
                setData(groupByDay(result.list));
                setError(null);
            } catch (err) {
                if (!controller.signal.aborted) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData()
        return () => controller.abort();
    }, [city]);

    return { data, loading, error };
};