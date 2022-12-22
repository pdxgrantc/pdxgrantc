import React, { useState, useRef, useEffect } from 'react'
//Mq36te5bLQ&6xsCf
import Header from '../../../../../Static/partials/Header'
import Footer from '../../../../../Static/partials/Footer'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function NewItem() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const day = useRef()
  const month = useRef()
  const year = useRef()
  const description = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  /*
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  */

  function handleAddTodo(e) {
    const title = todoNameRef.current.value
    const dueDay = day.current.value
    const dueMonth = month.current.value
    const dueYear = year.current.value
    const todoDescription = description.current.value
    if (title === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuidv4(),
        title: title,
        dueDay: dueDay,
        dueMonth: dueMonth,
        dueYear: dueYear,
        todoDescription: todoDescription,
        complete: false
      }]
    })
    todoNameRef.current.value = null
    day.current.value = null
    month.current.value = null
    year.current.value = null
    description.current.value = null
  }

  /*
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  */

  return (
    <div class="m-auto bg-main_bg_color text-text_white">
      <Header />
      <div class="h-[6vh]"></div>
      <div class="w-[75%] m-auto flex flex-col justify-center gap-[2.75vh]">
        <div class="w-full flex flex-col gap-[2.3vh] text-[1.75rem] min-laptop_height:text-[1.5rem] leading-none">
          <input class="h-[4.75vh] px-[.75vw] py-[.5vh] w-full text-accent_text_color focus:shadow-none focus:outline-none" ref={todoNameRef} type="text" placeholder='Title' />
          {/*
            <div class="h-[4.75vh] grid grid-cols-3 gap-[1vw] w-full">
              <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={day} type="text" placeholder='Due Day' />
              <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={month} type="text" placeholder='Due Month' />
              <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={year} type="text" placeholder='Due Year' />
            </div>
            <textarea class="px-[.75vw] py-[1.5vh] text-accent_text_color focus:shadow-none focus:outline-none min-h-[42vh]" ref={description} placeholder="Description" cols="30" rows="12"></textarea>
            */}
        </div>
        <button class="text-4xl font-semibold py-[.95vh] w-fit m-auto border-b-[2.5px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[1.5vw]" onClick={handleAddTodo}>Submit</button>
      </div>
      <div class="mb-[4vh]"></div>
      <Footer />
    </div >
  )
}
