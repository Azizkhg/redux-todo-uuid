import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { DisplayTodo } from "./components/displaytodos";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
  <Provider store={store}>
    <Container>
      <AddTodo />
      <DisplayTodo />
    </Container>
  </Provider>
  );
}

export default App;
