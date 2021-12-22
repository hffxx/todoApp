import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { ApplicationContext } from "../App";
import Countdown, { zeroPad } from "react-countdown";
const StyledBoardListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  margin: 15px;
  padding: 10px 20px;
  color: "#16cc86";
  border: none;
  box-shadow: 0 0 15px green;
  text-shadow: 0 0 15px green;
  border-radius: 15px;
  font-size: 1vw;
  @media only screen and (max-width: 1200px) {
    font-size: 2vw;
    width: 50vw;
  }
  ${({ status }) =>
    (status === "Expired" && {
      color: "#ff073a",
      textShadow: "2px 2px 5px red",
      boxShadow: "0 0 15px red",
    }) ||
    (status === "Done" && {
      color: "#16cc86",
      textShadow: "2px 2px 5px green",
      boxShadow: "0 0 15px green",
    }) ||
    (status === "In progress" && {
      color: "#FFF01F",
      textShadow: "2px 2px 5px yellow",
      boxShadow: "0 0 15px yellow",
    })}
`;

const BoardListElement = ({ todo }) => {
  const { todoStatus, todoTitle, todoTimeLeft, todoId } = todo;
  const { data, setData } = useContext(ApplicationContext);

  const deleteFromList = (id) => {
    setData(data.filter((el) => el.todoId !== id));
  };

  const editSelectedItem = (id, status) => {
    let objIndex = data.findIndex((obj) => obj.todoId === id);
    let changedData = [...data, (data[objIndex].todoStatus = status)];
    setData(changedData);
  };
  const renderer = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) {
      return (
        <span>{`${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(
          seconds
        )}`}</span>
      );
    } else {
      return (
        <span>
          {`${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`}
        </span>
      );
    }
  };
  const check = <i class="fa-solid fa-check"></i>;
  const del = <i class="fa-solid fa-xmark"></i>;

  return (
    <StyledBoardListElement status={todoStatus}>
      <h3>{todoTitle}</h3>
      {todoStatus === "In progress" && (
        <Countdown
          daysInHours={true}
          date={todoTimeLeft}
          renderer={renderer}
          onComplete={() => editSelectedItem(todoId, "Expired")}
        />
      )}
      {todoStatus === "Expired" && "00:00:00"}
      <div>
        {todoStatus === "In progress" && (
          <Button
            text={check}
            color="green"
            placement="list-element"
            func={() => editSelectedItem(todoId, "Done")}
          ></Button>
        )}
        <Button
          text={del}
          placement="list-element"
          func={() => deleteFromList(todoId)}
        ></Button>
      </div>
    </StyledBoardListElement>
  );
};

export default BoardListElement;
