import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return (
                <div class='flex width-full'>
                    <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
                </div>
            )
        })
    )
}