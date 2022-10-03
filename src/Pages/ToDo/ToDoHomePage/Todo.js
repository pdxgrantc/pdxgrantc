import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <>
            <div className=''>
                <label>
                    <div class='flex gap-3'>
                        <div>
                            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} className="text-color-green" />
                        </div>
                        <div>
                            <p> {todo.title} </p>
                            <div className='flex'>
                                <p>Due: &nbsp;</p>
                                <p> {todo.dueDay}-</p>
                                <p> {todo.dueMonth}- </p>
                                <p> {todo.dueYear} </p>
                            </div>
                            <p> {todo.todoDescription} </p>
                        </div>
                    </div>
                </label>
            </div>
        </>
    )
}