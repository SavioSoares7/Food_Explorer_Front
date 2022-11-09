import styled from "styled-components";

export const InputContainer = styled.input`
  outline: none;
  border: 1px solid #fff;

  border-radius: 5px;

  margin-top: 12px;
  margin-bottom: 30px;

  background: transparent;
  color: ${({ theme }) => theme.COLORS.FT_WHITE};

  width: 100%;
  font-size: 14px;

  padding: 15px;
`;
