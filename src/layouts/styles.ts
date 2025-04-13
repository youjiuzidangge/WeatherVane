// src/layouts/MainLayout/styles.ts
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 背景动画
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  color: white;
`;

export const Header = styled.header`
  padding: 2rem 1rem;
  text-align: center;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }
`;

export const Footer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  gap: 0.5rem;

  div {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;