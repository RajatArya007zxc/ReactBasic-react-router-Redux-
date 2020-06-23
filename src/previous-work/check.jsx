import React from 'react';

const check = ({lo,del}) => {
    //const {name,age}=props
 let spaces=lo.map((e)=>{
     return (
         <div key={e.id}>
             <h1>{e.name}</h1>
               <p>{e.age}</p>
               <button onClick={()=>{
                   del(e.id)           }}>DELETE</button>
         </div>
     )
 })
    return (
     <div>
          {spaces}
     </div>
    );
    }





/*const check = ({lo}) => {
    //const {name,age}=props
 let spaces=lo.map((e)=>{
     return (
         <div key={e.id}>
             <h1>{e.name}</h1>
         </div>
     )
 })
    return (
     <div>
          {spaces}
     </div>
    );
} */
export default check;
