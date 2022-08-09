import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {

    const { id, task, completed } = todo; //variable con la estructura que se le pasará

    const onChangeTodo = () => {
        toggleTodo(id);
    }

    const onDeleteTodo = () => {
        deleteTodo(id);
    }

    return (
        <Row>
            <Col sm={2}><input type="checkbox" checked={completed} onChange={onChangeTodo}></input></Col>
            <Col sm={2}>{task}</Col>
            <Col sm={2}><button onClick={onDeleteTodo}>X</button></Col>
        </Row>
    )
}
