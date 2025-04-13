import {ForecastItem} from "@/types/weather";
export const groupByDay = (list: ForecastItem[]): ForecastItem[] => {
    const days = new Map<string, ForecastItem>();

    list.forEach(item => {
        const date = new Date(item.dt * 1000).toISOString().split('T')[0];
        if (!days.has(date) || item.dt_txt.includes('12:00')) {
            days.set(date, item);
        }
    });

    return Array.from(days.values()).slice(0, 7);
};