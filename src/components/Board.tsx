import { Droppable } from '@hello-pangea/dnd'
import React, { useRef } from 'react'
import styled from 'styled-components'
import DragabbleCard from './DragabbleCard'

interface IAreaProps {
  isDraggingOver: boolean
  draggingFromThisWith: boolean
}

const Wrapper = styled.div`
padding: 20px 20px;
/* padding-top: 30px; */
  background-color:${props => props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
`
const Title = styled.h2`
font-size:20px;
text-align:center;
margin-bottom:10px;
font-weight:600;
`
const Area = styled.div<IAreaProps>`
background-color:${props => props.isDraggingOver ? "yellow" : props.draggingFromThisWith ? "red" : "blue"};
flex-grow:1;
`
interface IBordProps {
  boardId: string
  toDos: string[]
}
export default function Board({ toDos, boardId }: IBordProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef)
  const onClick = () => {
    inputRef.current?.focus()
  }
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <input type="text" placeholder='grab me' ref={inputRef} />
      <button onClick={onClick} type="submit">Click me</button>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef} {...provided.droppableProps} >
            {toDos.map((todo, index) => <DragabbleCard key={todo} todo={todo} index={index} />)}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  )
}
