// functional component

import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const generatePDF = (props) => {
  return(
    <>
      <div className="App" ref={ref}>
      <p>Hello, my fellow {props.i1} in 2020, it's me, George Washington, the first {props.i2}. 
        I am writing from (the) {props.i3}, where I have been secretly living for the past {props.i4} years. 
        </p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={ toPdf }>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

