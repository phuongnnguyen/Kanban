import React from 'react'
import List from './List'
const KanbanBoard = props => {

    return(
    <div>
        <div className="w3-row-padding">
            <List id="todo" 
                  title="Todo" 
                  addTodo={props.addTodo} 
                  cards={props.cards.filter(card => card.status === "todo")}
                  moveRight={props.moveRight}
                  taskDone={props.taskDone}
                  edit={props.edit}
            />
            <List id="doing" 
                  title="Doing" 
                  cards={props.cards.filter(card => card.status === "doing")}
                  moveRight={props.moveRight}
                  moveLeft={props.moveLeft}
                  taskDone={props.taskDone}
                  edit={props.edit}
            />
            <List id="done" 
                  title="Done" 
                  cards={props.cards.filter(card => card.status === "done")}
                  findItem={props.findItem}
                  moveLeft={props.moveLeft}
                  taskDone={props.taskDone}
                  edit={props.edit}
            />
        </div>
    </div>
    )
};

export default KanbanBoard