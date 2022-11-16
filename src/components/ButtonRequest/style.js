import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;

  background-color: ${({ theme }) => theme.COLORS.BG_RED};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
`;
