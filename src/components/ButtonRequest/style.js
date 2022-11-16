import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BG_RED};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};
  padding: 16px;
  border: none;
  border-radius: 5px;
`;
