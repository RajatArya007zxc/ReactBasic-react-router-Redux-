import React from 'react';

const Todos = ({todos,deletes}) => {
    let TodoList=todos.length?(
        todos.map(el=>{
            return (
                <div className="collection-item" key={el.id}>
                    <span onClick={()=>{deletes(el.id)}}>{el.content}</span>

                </div>
            )
        })
    ):(<p className="center">Your todoList is empty</p>)
    return (
        <div className="todos-collection">
            {TodoList}
        </div>
    );
}

export default Todos;
