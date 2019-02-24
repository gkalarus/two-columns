import React from 'react';
import Title from "./Title";

const FirstColumn = ({listOfElements, handleClickedItem}) => {

  if(listOfElements !== null) {
    const listOfItems = listOfElements.map(item => (
      <Title 
        key={item.id}
        index={item.id}
        title={item.title}
        handleClickedItem={handleClickedItem}
      />
    ));
    
    return (  
      <div className="firstColumn">
        <div className="textContainer">
          <h1>Welcome back!</h1>
        </div>
        <ul className="list">
          {listOfItems}
        </ul>
      </div>
    );
  } else {
    return null
  }


}
 
export default FirstColumn;