import Draggable from 'react-draggable';
import { useRef } from 'react';

const Card = (props) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="card" ref={nodeRef}>
        <div className="header">{props.title}</div>
        <div className="content">Content</div>
      </div>
    </Draggable>
  
  )
}

export default Card;
