import React from 'react';

const Title = ({title, index, handleClickedItem}) => {
  return (  
    <li>
      <a 
        href="#"
        onClick={(e) => handleClickedItem(e, index)}
      >
        {index}. {title}
      </a>
    </li>
  );
}
 
export default Title;