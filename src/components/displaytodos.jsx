import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions/todo";

export function DisplayTodo() {
  const [title, setTitle] = useState('');
  const [description,setDiscription] = useState('');
  const [todo,setTodo]=useState({
    title:'',
    description:''
})

// const [isDisabled,setIsDisabled]=useState(true);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store)
//   function handleUpdate(e) {
//     e.preventDefault();
//     const todo = {
//       id: this.id,
//       todo: this.todo,
//     };
//     this.props.updateTodo(todo);
//   }

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All todo here</h3>
              <ListGroup>
                {store.todoReducer.map((tododata, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <input type="text" disabled={true} placeholder={tododata.title} onChange={(event)=>setTodo({...todo,title:event.target.value})} id="titleTxtField"></input>
                      <input type="text" disabled={true} placeholder={tododata.description} onChange={(event)=>setTodo({...todo,description:event.target.value})} id="descriptionTxtField"></input>
                      <Button
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deleteTodo(tododata.id));
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        className="btn btn-info"
                        onClick={(e) => {
                          e.preventDefault();
                          //setIsDisabled(false);
                          document.getElementById("titleTxtField").disabled=false;
                          document.getElementById("descriptionTxtField").disabled=false;
                          }}
                      >
                        update todo
                      </Button>
                      <Button className="btn btn-success" onClick={(e)=>{
                        e.preventDefault();
                        //setIsDisabled(true);
                        document.getElementById("titleTxtField").disabled=true;
                        document.getElementById("descriptionTxtField").disabled=true;
                        console.log(tododata,tododata.id);
                        dispatch(updateTodo(tododata,tododata.id));
                      }}
                      >save todo
                      </Button>

                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
