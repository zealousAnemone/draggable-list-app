import Draggable from 'react-draggable';
import { useState, useRef } from 'react';

const Card = (props) => {
  const nodeRef = useRef(null);
  const [text, setText] = useState('Write something here.');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Draggable nodeRef={nodeRef} handle=".header">
      <div className="card" ref={nodeRef}>
        <div className="header">{props.title}</div>
        <div className="content">{isEditing ? <><textarea className="text-input" value={text} onChange={(e) => setText(e.target.value)} onDoubleClick={() => setText('')} /><button onClick={() => setIsEditing(false)}>Save</button></> : <p onClick={() => setIsEditing(true)}>{text}</p>}
</div>
      </div>
    </Draggable>
  
  )
}

export default Card;
