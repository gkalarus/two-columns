import React from 'react';


const SecondColumn = ({thumbnailUrl}) => {
  
  if(thumbnailUrl !== null) {
    return (  
      <div className="secondColumn">
        <div className="box">z
          <div className="overlay">
            <img src={thumbnailUrl} alt="thumbnail"/>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="secondColumn"></div>
  }
}
 
export default SecondColumn;