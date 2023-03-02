import { Droppable } from '@hello-pangea/dnd'
import React from 'react'
import styled from 'styled-components'
import DragabbleCard from './DragabbleCard'

const Wrapper = styled.div`
padding: 20px 20px;
/* padding-top: 30px; */
  background-color:${props => props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
`
interface IBordProps {
  boardId: string
  toDos: string[]
}
export default function Board({ toDos, boardId }: IBordProps) {
  return (
    <Droppable droppableId='one'>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps} >
          {toDos.map((todo, index) => <DragabbleCard key={todo} todo={todo} index={index} />)}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  )
}
