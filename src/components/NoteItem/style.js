import styled from "styled-components";

export const Container = styled.div`
  margin-right: 10px;
  padding: 5px;
  > input {
    width: 120px;
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : "rgba(255,255,255, 0.1)"};

    border: ${({ theme, isNew }) =>
      isNew ? `1px dashed ${theme.COLORS.FT_GRAY}` : "none"};

    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    padding: 10px 16px;
    border-radius: ${({ theme, isNew }) => (isNew ? "5px" : "0px")};
  }
  > button {
    background-color: transparent;
    height: 95%;
    border: none;
    border-radius: 0px 5px 5px 0px;
    > svg {
      color: ${({ theme, isNew }) => (isNew ? "gray" : theme.COLORS.FT_WHITE)};
    }
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : "rgba(255,255,255, 0.1)"};
  }
`;
