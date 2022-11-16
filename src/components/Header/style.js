import styled from "styled-components";

export const Container = styled.header`
  .toggle {
    margin-top: 180px;
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.COLORS.FT_WHITE};
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

    width: 100%;
    height: 100vh;

    position: absolute;
    top: -100px;

    transition: 500ms;
  }

  position: relative;

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

  > svg {
    display: none;
  }

  @media (max-width: 1000px) {
    > div {
      width: 0%;
      overflow: hidden;
    }
    > svg {
      display: flex;
    }
  }
`;
export const ContainerMenu = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
