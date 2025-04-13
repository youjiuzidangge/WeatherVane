export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Temperature {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}

export interface ForecastItem {
    dt: number;
    main: Temperature;
    weather: Weather[];
    dt_txt: string;
}

export interface ForecastResponse {
    list: ForecastItem[];
    city: {
        name: string;
        country: string;
    };
}