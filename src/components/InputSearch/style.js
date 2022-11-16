import styled from "styled-components";

export const Input = styled.input`
  height: 48px;
  padding: 16px 14px;
  font-size: 16px;
  min-width: 344px;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};
`;
