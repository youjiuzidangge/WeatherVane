import styled from '@emotion/styled';

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Day = styled.h3`
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Temp = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin: 1rem 0;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

export const TempRange = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;