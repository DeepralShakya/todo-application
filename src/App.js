import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
     <Todo/>
     <AddTodo/>
     <TodoList/>
    </div>
  );
}

export default App;
