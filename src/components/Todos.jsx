import React from 'react'
import { IoTrashSharp } from 'react-icons/io5'

const style = {
    iscompleted:`d-flex p-3 rounded items-center justify-between mb-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-500 dark:to-gray-400`,
    todos:`d-flex p-3 rounded items-center justify-between mb-3 bg-gradient-to-r from-gray-400 to-gray-400 dark:from-gray-700 dark:to-gray-500`,
    row:`d-flex gap-2.5 items-center`,
    text:`text-white cursor-pointer`,
    textcompleted:`cursor-pointer text-white line-through`,
    button:`text-white`
}

const Todos = ({todo,toggleComplete,deleteTodo}) => {
  return (
    <li className={todo.completed ? style.iscompleted : style.todos}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ""}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textcompleted : style.text}>{todo.text}</p>
        </div>
        <button className={style.button} onClick={() => deleteTodo(todo.id)}><IoTrashSharp size={20}/></button>
    </li>
  )
}

export default Todos