import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  max-width: 1180px;
  margin: 0 auto;

  > div:nth-child(1),
  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 30px;

    > label:nth-child(1) {
      flex: 1;
    }
    > label:nth-child(2) {
      flex: 2;
    }
  }
  > div:nth-child(2) {
    > label:nth-child(1) {
      flex: 1;
    }
    > div {
      flex: 6;
      display: flex;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.COLORS.BG_WHITE};
    }
  }
  > label {
    > textarea {
      margin-top: 10px;
      resize: none;
      width: 100%;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      padding: 10px;
      color: ${({ theme }) => theme.COLORS.FT_WHITE};
    }
  }

  > input {
    position: absolute;
    right: 0;
    bottom: -70px;

    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    > div:nth-child(1),
    > div:nth-child(2) {
      flex-direction: column;

      > label {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;
