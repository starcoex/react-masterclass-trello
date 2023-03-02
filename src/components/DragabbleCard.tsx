import { Draggable } from '@hello-pangea/dnd'
import React from 'react'

const Card = styled.div`
border-radius:5px;
margin: 10px 0;
padding: 5px 10px;
background-color:${props => props.theme.cardColor};
`
export default function DragabbleCard() {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided) => (
        <Card ref={provided.innerRef}{...provided.draggableProps}  {...provided.dragHandleProps}>
          {todo}</Card>)}
    </Draggable>)
  )
}
