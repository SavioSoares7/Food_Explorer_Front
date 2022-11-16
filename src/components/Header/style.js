import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > a#logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  > label {
    > input {
      margin: 0;
      min-width: 344px;
      border: 0px;
    }
  }
`;
