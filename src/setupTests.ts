import '@testing-library/jest-dom';
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

vi.mock('import.meta.env', () => ({
    VITE_API_URL: 'https://api.openweathermap.org/data/2.5/forecast',
    VITE_API_UNITS: 'metric',
    VITE_API_KEY: 'test-api-key'
}));
