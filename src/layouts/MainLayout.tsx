// src/layouts/MainLayout/index.ts
import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import { LayoutContainer, MainContent, Header, Footer } from './styles';
import {globalStyles} from "@/styles";

interface MainLayoutProps {
    children: ReactNode;
}

/**
 * 应用主布局组件
 *
 * 职责：
 * 1. 定义全局页面结构
 * 2. 管理公共样式
 * 3. 处理响应式布局
 */
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Global styles={globalStyles} />
            <LayoutContainer>
                <Header>
                    <h1>Weather Forecast</h1>
                    <p>6-day weather forecast for cities around the world</p>
                </Header>

                <MainContent>
                    {children}
                </MainContent>

                <Footer>
                    <div>Data source: OpenWeatherMap</div>
                    <div>© {new Date().getFullYear()} Weather App</div>
                </Footer>
            </LayoutContainer>
        </>
    );
};