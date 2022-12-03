import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 88px;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
  width: 100%;

  > div {
    display: flex;
    flex-wrap: wrap;
    height: 77px;

    align-items: center;
    justify-content: space-between;

    max-width: 1180px;
    margin: 0 auto;

    > a {
      display: flex;
      align-items: center;
      gap: 11px;
    }
  }
`;
