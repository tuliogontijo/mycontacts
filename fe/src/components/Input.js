import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 52px;
  border: 2px solid #fff;
  outline: none;
  padding: 0px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error
    && css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`;
