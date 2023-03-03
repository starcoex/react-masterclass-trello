import React from 'react'
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import Board from './Board';


const Wrapper = styled.div`
display:flex;
max-width: 680px;
width:100%;
margin: 0 auto;
justify-content:center;
align-items:center;
height:100vh;
`
const Boards = styled.div`
display:grid;
width:100%;
grid-template-columns: repeat(3, 1fr);
gap:10px;
`
export default function ToDodnd() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  // const objToDos = Object.keys(toDos).map((value) =>
  //   toDos[value])
  // console.log(objToDos)
  const onDragEnd = (info: DropResult) => {
    console.log(info)
    const { destination, draggableId
      , source } = info
    if (!destination) return
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const bordCopy = [...allBoards[source.droppableId]]
        console.log(bordCopy)
        bordCopy.splice(source.index, 1)
        bordCopy.splice(destination.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: bordCopy,
        }
      })
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]
        const destinationBoard = [...allBoards[destination.droppableId]]
        sourceBoard.splice(source.index, 1)
        destinationBoard.splice(destination.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard
        }
      })
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
