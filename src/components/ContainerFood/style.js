import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 300px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
export const ContainerProduct = styled.div`
  > a {
    color: #ab4d55;
  }
  > div {
    margin-bottom: 5px;
    display: flex;
    gap: 10px;
    width: 300px;
    > span {
      color: ${({ theme }) => theme.COLORS.FT_GRAY};
    }
  }
`;
