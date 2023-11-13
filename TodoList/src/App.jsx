import './App.css'
import TodoList from './TodoList';



function App() {
 
    let winCondition = (ticket) =>{
      return sum(ticket) === 15;
    }

  return (
    <TodoList/>
  )
}

export default App
