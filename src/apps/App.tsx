import { MainLayout } from '@/layouts/MainLayout';
import {WeatherFeature} from "@/features/weather";

const App = () => {
    return (
        <MainLayout>
            <WeatherFeature />
        </MainLayout>
    );
}

export default App;