import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';

const root=ReactDOM.createRoot(document.getElementById('root'));
const Body=()=>{
return(
    <>
   <Register/>
    </>
)
}
root.render(<Body/>)