/*useState hace que con cualquier cosa que se guarde en el estado y cambie, renderice de nuevo
Fragment sirve para meter varios componentes dentro del return y permitir mejor diseño, creado de propio para este fin
nos permite ejecutar codigo y que se guarde en el local storage*/
import React, { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./Components/TodoList";
import { Calculo } from "./Components/Calculo"
/** se importa v4 uuid para generar id */
import { v4 as uuidv4 } from "uuid";

//estos 3 de abajo servirían para la creación de tablas
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css'; //para aplicar los estilos, este es el necesario

const KEY = "todoApp.todos"

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "tarea 1", completed: false }
  ]); //primer propiedad, el estado en sí, segunda propiedad la función que hace modificar ese estado, basicamente el primero es la variable y la segunda el metodo para cambiarlo
  const [calculo, setCalculo] = useState({ result: 0, rest: 10 });
  
  const handleTaskRef = useRef();
  const entradaTecladoA = useRef();
  const entradaTecladoB = useRef();

  const [resultado, setResultado] =useState({resultado: 100});

  //se usa para recuperar lo guardado en la storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))//con parse se transformaría de nuevo
  }, [todos]);//callback/dependencias, escuchamos la variable todos. Localstorage solo almacena cadenas de texto, hay que pasarlo a string

  /**IMPORTANTE, esta forma poniendo const es una manera de crear funciones sin tener que poner, usado para cuando tienes que devolver algo habitualmente
   * function handleTodoAdd(){}
   * 
   */
  const handleTodoAdd = () => {
    const task = handleTaskRef.current.value; //se rescata el valor de la referencia
    if (task === "") { return }

    //se usará el setTodos que es la funcion que modifica el estado. Hace una copia del anterior value para poder escuchar los cambios, no se modifica directamente
    setTodos((estadoPrevio) => {
      return [...estadoPrevio, { id: uuidv4(), task, completed: false }]; //... copia el array
    });
    handleTaskRef.current.value = null;
  }

  //cambia el valor completed
  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const tarea = newTodo.find((item) => item.id === id);
    tarea.completed = !tarea.completed;
    setTodos(newTodo);
  }

  //borra pasandole el id de la lista
  const deleteTodo = (id) => {
    const newTodo = [...todos];
    const newnewTodo = newTodo.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(newnewTodo);
  }

  /**
   * Zona calculo
   */

  const calcular = () => {
    const entradaA = parseInt(entradaTecladoA?.current?.value);
    const entradaB = parseInt(entradaTecladoB?.current?.value);

    if (entradaA == null && entradaB == null) { return }

    const sum = entradaA + entradaB;
    const rest = entradaA - entradaB;
    // setResultado({resultado: 200});
    setCalculo({ result: sum, rest: rest });
  }
  let estado = true;
  if(estado){
    return (
      <Fragment>
        <Container>
          <Row><h2>Prueba</h2></Row>
          <Row>
            <TodoList lista={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </Row>
          <Row>
            <Col sm={2}><input autoFocus ref={handleTaskRef} type="text" placeholder="Nueva tarea"></input></Col>
            <Col sm={2}><button onClick={handleTodoAdd}>Añadir</button></Col>
            <Col sm={2}><button>Borrar</button></Col>
          </Row>
          <Row>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas</div>
          </Row>
        </Container>
        <Container style={{ marginTop: 100 }}>
          <Row><h2>Calculadora</h2></Row>
          <Row>
            <Calculo dato={calculo}  resultado1={resultado}/>
          </Row>
          {/* <Row>
            <Col sm={2}>El resultado es {calculo.result}</Col>
            <Col sm={2}>El resultado es {calculo.rest}</Col>
          </Row> */}
          <Row>
            <Col sm={2}><input autoFocus ref={entradaTecladoA} type="number" placeholder="Digito 1"></input></Col>
            <Col sm={2}><input autoFocus ref={entradaTecladoB} type="number" placeholder="Digito 2"></input></Col>
            <Col sm={2}><button onClick={calcular}>Calcular</button></Col>
            <Col sm={2}><button>Borrar</button></Col>
          </Row>
        </Container>
      </Fragment>
  
    )
  }
}
