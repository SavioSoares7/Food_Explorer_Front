import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  margin-top: 48px;

  position: relative;

  .arrow-move {
    position: absolute;
    z-index: 999;

    cursor: pointer;

    background-color: rgba(0, 0, 0, 0.6);
    height: 498px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }

  #arrow-left {
    left: 0;
  }
  #arrow-right {
    right: 0;
  }

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

  > div.container-box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
    transition: 500ms all;

    overflow-x: hidden;

    position: relative;

    &:hover .arrow-move {
      opacity: 1;
      transition: 500ms all;
    }

    > button {
      position: absolute;
      left: 0;
    }
  }
  @media (max-width: 980px) {
    text-align: center;
  }
`;
