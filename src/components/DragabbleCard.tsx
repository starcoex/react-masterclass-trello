import { Draggable } from '@hello-pangea/dnd'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
border-radius:5px;
margin: 10px 0;
padding: 5px 10px;
background-color:${props => props.theme.cardColor};
`
interface IDragabbleCardProps {
  todo: string
  index: number
}

export default React.memo(function DragabbleCard({ todo, index }: IDragabbleCardProps) {
  console.log("render", todo)
  return (
    <Draggable draggableId={todo} index={index}>
      {(provided) => (
        <Card ref={provided.innerRef}{...provided.draggableProps}  {...provided.dragHandleProps}>
          {todo}</Card>)}
    </Draggable>)
})
