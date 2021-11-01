import React,{useState} from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled components
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";
//hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {


  console.log('re-render')
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
