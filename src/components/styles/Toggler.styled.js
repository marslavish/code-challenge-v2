import styled from 'styled-components';

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + label div {
    transform: translateX(24px);
  }
`;

export const Label = styled.label`
  width: 50px;
  height: 26px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
`;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;
