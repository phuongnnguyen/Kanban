import React, {useState} from 'react'

const Card = ( props, { isDragging, dragSource, text } ) => {
    
    const [active, setActive] = useState(false);
    const [paint, setPaint] = useState(false);
    let [color, setColor] = useState();
    function toggle() {
        active ? setActive(false) : setActive(true)
    }
    function togglePaint() {
        paint ? setPaint(false) : setPaint(true)
    }
    function getPaint(e) {
        color = e.target.id;
        setColor(color);
    }
    return (
    <div>
        {paint ? (<div id="paint" className="w3-padding-32 w3-card-2">
            <div className="w3-row-padding section">
                <div className="w3-quarter w3-pink w3-btn circle" id="#e91e63" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-blue w3-btn circle" id="#2196F3" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-green w3-btn circle" id="#4CAF50" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-black w3-btn circle" id="#000" onClick={e => getPaint(e)}></div>
            </div>
            <div className="w3-row-padding section">
                <div className="w3-quarter w3-yellow w3-btn circle" id="#cddc39" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-brown w3-btn circle" id="#795548" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-purple w3-btn circle" id="#673ab7" onClick={e => getPaint(e)}></div>
                <div className="w3-quarter w3-teal w3-btn circle"id="#009688" onClick={e => getPaint(e)}></div>
            </div>
        </div>) : null}
        
        <div className="w3-padding w3-card-2 w3-margin-bottom fakeButton" style={{backgroundColor: color}}>
            <p onClick={toggle}>{props.title}</p>
            <div id="kbTool" className={active ? "w3-animate-zoom w3-border-top" : "w3-hide"}>
                <span className="w3-btn w3-round-large"><i className="fa fa-bars"></i></span>
                <span className="w3-btn w3-round-large" onClick={togglePaint}><i className="fa fa-paint-brush"></i></span>
                <span className="w3-btn w3-round-large" onClick={() => props.taskDone(props.id)}><i className="fa fa-trash"></i></span>
                <span className="w3-btn w3-round-large" onClick={() => props.edit(props.id)}><i className="fa fa-pencil"></i></span>
                {(props.status === "doing" || props.status === "done") ? <span className="w3-btn w3-round-large" onClick={() => props.moveLeft(props.id)}><i className="fa fa-arrow-left"></i></span> : null}
                {(props.status === "todo" || props.status === "doing") ? <span className="w3-btn w3-round-large" onClick={() => props.moveRight(props.id)}><i className="fa fa-arrow-right"></i></span> : null}
                {(props.status === "done") ? <span className="w3-btn w3-round-large" onClick={() => props.taskDone(props.id)}><i className="fa fa-list-alt"></i></span> : null}
            </div>
        </div>
    </div>
)}

export default Card