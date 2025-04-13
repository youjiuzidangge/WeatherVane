// src/features/weather/components/CitySearch/styles.ts
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// 输入框聚焦时的发光动画
const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
  100% { box-shadow: 0 0 0 rgba(255, 255, 255, 0.3); }
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto 2rem;
  width: 90%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  padding-right: 4rem;  // 为按钮留出空间
  border: none;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    animation: ${glow} 1.5s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    padding-right: 3rem;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    color: #23a6d5;
  }

  &:active {
    transform: translateY(-50%) scale(0.9);
  }

  &::before {
    content: "🔍";
    font-size: 1.2rem;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 768px) {
    right: 0.5rem;
    &::before {
      font-size: 1rem;
    }
  }
`;