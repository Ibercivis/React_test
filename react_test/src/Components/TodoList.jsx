import React from 'react'
import TodoItem from './TodoItem'
import Container from 'react-bootstrap/Container';

export function TodoList({lista, toggleTodo, deleteTodo}) {
  return (
    <Container>
        {lista.map(
            (items)=> (
                <TodoItem key={items.id} todo={items} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
            )
        )}
    </Container>
  )
}
