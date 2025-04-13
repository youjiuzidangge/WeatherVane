// src/features/weather/styles.ts
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 加载动画
const skeletonLoading = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

// 网格布局容器
export const WeatherGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`;

// 加载状态
export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);

  &::after {
    content: "";
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
`;

// 骨架屏加载
export const SkeletonGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  > div {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%
    );
    background-size: 200% 100%;
    animation: ${skeletonLoading} 1.5s infinite;
    border-radius: 12px;
    height: 180px;
  }
`;

// 错误状态
export const Error = styled.div`
  background: rgba(255, 100, 100, 0.2);
  border: 1px solid rgba(255, 100, 100, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(5px);

  button {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

// 空状态
export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`;