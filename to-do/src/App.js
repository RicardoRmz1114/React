import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Todo from './components/Todo';
import Card from './components/Card';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const defaultTodoState = [
    {text:'Read'},
    {text:'Eat'},
    {text:'Sleep'}
  ]

  return (
    <div className="todo-app">
      <TodoList />
    </div>

  );
}

export default App;
