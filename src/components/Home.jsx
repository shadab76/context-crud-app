import { collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import Todos from './Todos'
import { db } from '../firebase'
import { Loader } from './Loader'

const style = {
  bg: `p-4 rounded-xl bg-gray-200 dark:bg-gray-900 mt-4`,
  heading: `text-2xl text-slate-700 mb-3 dark:text-gray-200 font-medium`,
  form: `mb-4`,
  ul:`text-center mb-5`,
  wrapper: `d-flex gap-2.5 mb-1`,
  error: `text-rose-900 text-xs`,
  count: `text-center font-semibold text-gray-700 dark:text-gray-300`,
  button: `px-3 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-700 dark:to-gray-500 text-gray-600 dark:text-gray-100 shadow-sm border-slate-900 rounded font-light text-4xl`,
  input: `px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`
}



const Home = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)

  // create todos
  const createTodo = async (event) => {
    event.preventDefault();
    if (input === '') {
      alert("Please Enter Valid Todo")
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')

  }
  // Read todos from firebase 
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubcribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
      setLoading(false)
    })
    return () => unsubcribe
  }, [])
  // update todos 
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  // delete todos
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <>
      <div className={style.bg}>
        <div className={style.bgContainer}>
          <h1 className={style.heading}>Todo App</h1>
          <form className={style.form} onSubmit={createTodo}>
            <div className={style.wrapper}>
              <input
                type="text"
                id="input"
                name="input"
                placeholder="Enter Your Valid Todo Name"
                className={style.input}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button type="submit" className={style.button} >
                <IoAddSharp size="30" />
              </button>
            </div>
            {input === "" && (input.length < 0) ? <span className={style.error}>Please Enter Valid Todo</span> : null}

          </form>
          <ul className={style.ul}>
            {
              loading ? (
                <Loader />
              ) :
                (
                  todos.map((todo, index) => (
                    <Todos key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                  ))
                )
            }
          </ul>
          {
            todos.length < 1 ? null : (
              <p className={style.count}>{`You have ${todos.length} Todos`}</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home