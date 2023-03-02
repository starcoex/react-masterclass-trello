import React from 'react'
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Draggable, DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilLocalState, toDoState } from '../recoil/atoms';
import { constants } from 'buffer';
import { Socket } from 'dgram';

const Wrapper = styled.div`
display:flex;
max-width: 480px;
width:100%;
margin: 0 auto;
justify-content:center;
align-items:center;
height:100vh;
`
const Boards = styled.div`
display:grid;
width:100%;
grid-template-columns: repeat(1, 1fr);
`
const Board = styled.div`
padding: 20px 20px;
/* padding-top: 30px; */
  background-color:${props => props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
`
const Card = styled.div`
border-radius:5px;
margin: 10px 0;
padding: 5px 10px;
background-color:${props => props.theme.cardColor};
`

// const toDos = ["a", "b", "c", "d", "e", "f"];

export default function ToDodnd() {
  // const [toDos, setToDos] = useRecoilState(recoilLocalState)
  const [toDos, setToDos] = useRecoilState(toDoState)

  // const onDrag = ({ draggableId, destination, source }: DropResult) => {
  //   console.log(destination, source, draggableId)
  //   if (!destination) return
  //   setToDos((oldToDos) => {
  //     const copyToDos = [...oldToDos]
  //     const deleteSouce = copyToDos.splice(source.index, 1)
  //     console.log(copyToDos)
  //     console.log(deleteSouce)
  //     const newSouce = copyToDos.splice(destination?.index, 0, draggableId)
  //     console.log(newSouce)
  //     console.log(copyToDos)
  //     return []
  //   })
  // }
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos]
      toDosCopy.splice(source.index, 1)
      toDosCopy.splice(destination?.index, 0, draggableId)
      return toDosCopy
    })
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(provided) =>
              <Board ref={provided.innerRef} {...provided.droppableProps} >
                {toDos.map((todo, index) => <Draggable key={todo} draggableId={todo} index={index}>
                  {(provided) => (
                    <Card ref={provided.innerRef}{...provided.draggableProps}  {...provided.dragHandleProps}>
                      {todo}</Card>)}
                </Draggable>)}
                {/* <Draggable draggableId='2' index={1}>
                {(provided) => <li ref={provided.innerRef}{...provided.draggableProps}{...provided.draggableProps}>Two</li>}
              </Draggable> */}
                {provided.placeholder}
              </Board>
            }
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
