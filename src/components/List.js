import React, {useState, useRef} from 'react'
import Card from './Card'
const List = props => {
    let cards = props.cards.map(
        card => <Card key={card.id} 
                      id={card.id} 
                      title={card.title} 
                      status={card.status}
                      moveRight={props.moveRight}
                      moveLeft={props.moveLeft}
                      taskDone={props.taskDone}
                      edit={props.edit}
                />
            )
    let inputRef = useRef();
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState("");
    const [todoId, setTodoId] = useState(0);
    function toggle() {
        active ? setActive(false) : setActive(true)
    }
    function AddTodo() {
        if(title.trim() === "")
            return;
        setTodoId(() => todoId + 1)
        props.addTodo({id: todoId,title, status: "todo"});
        setTitle("");
        setActive(false);
    }
    return(
        <div className="w3-third">
            <div className="w3-center w3-padding-32 w3-black w3-card-4">
                {props.title} {"  "}
                {
                    props.title === "Todo" 
                        ? <span className="w3-text-green fakeButton" onClick={toggle}>
                            <i className="fa fa-plus"></i>
                          </span> 
                        : null
                }
                {active ? <div><input ref={inputRef} onChange={() => setTitle(inputRef.current.value)} type="text"/><button onClick={AddTodo}>Add Todo</button></div> : null}
            </div>
            {cards}
        </div>
    )
}

export default List