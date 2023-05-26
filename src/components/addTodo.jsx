import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import {addTodo} from "../redux/actions/todo";
import {connect, useDispatch} from 'react-redux';
import { v4 as uuidv4} from 'uuid';

 export function AddTodo() {
    const [todo,setTodo]=useState({
        title:'',
        description:''
    })

    const dispatch=useDispatch()
    function handleSubmit(e)
    {
      e.preventDefault()
      dispatch(addTodo(todo));
        console.log(todo);
        setTodo({
            title:'',
            description:'',
            id: uuidv4()
        })
        console.log(todo);
    }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo here</h3>
              {/* form here */}
              <Form onSubmit={handleSubmit}>
                {/* Title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title Here" value={todo.title} onChange={(event)=>setTodo({...todo,title:event.target.value})}
                  ></Form.Control>
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter Discription Here"
                    value={todo.description} onChange={(event)=>setTodo({...todo,description:event.target.value})}
                  ></Form.Control>
                </Form.Group>
                <Container className="text-center">
                  <Button type="submit">Add todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
// const mapStateToProps=(state)=>({})

// const mapDispatchToProps=(dispatch)=>({
//   addTodo:(todo)=>(dispatch(addTodo(todo)))
// })

// export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
