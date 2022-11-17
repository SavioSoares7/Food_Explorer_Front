import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
`;

export const BoxInfo = styled.div`
  height: 260px;

  margin-top: 164px;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

  display: flex;
  align-items: center;

  > img {
    margin-bottom: 150px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    > span {
      font-family: "Poppins";
      font-size: 40px;
      font-weight: 500;
    }
    > p {
      font-size: 16px;
    }
  }
`;

export const MainCourse = styled.section`
  margin-top: 48px;
  > span {
    font-family: "Poppins";
    font-size: 32px;
    margin-bottom: 40px;
    display: inline-block;
  }
  .empty {
    display: flex;
    align-items: center;

    > svg {
      font-size: 50px;
    }
  }
`;
