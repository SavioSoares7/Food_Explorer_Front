import styled from "styled-components";

export const Input = styled.input`
  height: 48px;
  padding: 16px 40px 16px;
  font-size: 16px;
  min-width: 344px;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
  }
`;

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
  > svg {
    margin-right: -28px;
    position: relative;
  }
`;
