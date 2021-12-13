import styled from "styled-components";
const StyledBoard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  padding: 0px 50px 50px 50px;
  min-height: 60vh;
  margin: 50px;
  background: linear-gradient(
    225deg,
    rgba(3, 1, 15, 1) 0%,
    rgba(4, 2, 36, 1) 50%,
    rgba(7, 2, 32, 1) 100%
  );
  box-shadow: 0 0 15px green;
  border-radius: 30px;

  .board__title {
    margin: 15px;
    color: #16cc86;
    font-size: 3.5vw;
    text-shadow: 2px 2px 5px green;
  }

  .btn__modal--close {
    position: absolute;
    right: 0;
    padding: 0;
    width: 2vw;
    height: 2vw;
    font-size: 1vw;
    border-radius: 50%;
  }

  @media only screen and (max-width: 992px) {
    width: 60vw;
    .board-title {
      font-size: 7vw;
    }
    .btn__modal--close {
      width: 5vw;
      height: 5vw;
      font-size: 2.5vw;
    }
  }
`;
export default StyledBoard;
