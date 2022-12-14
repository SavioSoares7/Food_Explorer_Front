import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  border: none;

  padding: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.FT_WHITE};
`;
