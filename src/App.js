import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  document.title = 'TO-DO APP';
  return (
    <TodoProvider>
    <div className='container'>
     <AddTodo/>
     <TodoList/>
    </div>
    </TodoProvider>
  );
}

export default App;
