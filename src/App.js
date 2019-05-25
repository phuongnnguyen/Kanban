import React, {useState} from 'react'
import KanbanBoard from './components/KanbanBoard'
import './w3.css'
import './font/css/font-awesome.min.css'

const App = props => {
  const [cardsList, setCardsList] = useState([])
  function addTodo(todo) {
    setCardsList([...cardsList, todo])
  }
  function findItem(id) {
    return cardsList.find(card => card.id === id);
  }
  function moveRight(id) {
    const tempList = [...cardsList];
    let item = findItem(id);
    if(item.status === "todo")
      item.status = "doing";
    else if(item.status === "doing")
      item.status = "done";
    setCardsList(tempList);
  }
  function moveLeft(id) {
    const tempList = [...cardsList];
    let item = findItem(id);
    if(item.status === "done")
      item.status = "doing";
    else if(item.status === "doing")
      item.status = "todo";
    setCardsList(tempList);
  }
  function taskDone(id) {
    let tempList = [...cardsList];
    tempList = tempList.filter(card => card.id !== id)
    setCardsList(tempList);
  }
  function edit(id) {
    const tempList = [...cardsList];
    let item = findItem(id);
    const newTask = prompt();
    item.title = newTask;
    setCardsList(tempList);
  }
  return(
    <KanbanBoard cards={cardsList}  
                 addTodo={addTodo}
                 moveRight={moveRight}
                 moveLeft={moveLeft}
                 taskDone={taskDone}
                 edit={edit}
    />
  )
}
export default App