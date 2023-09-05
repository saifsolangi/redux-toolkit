import React from 'react'
import { useDispatch, useSelector } from "react-redux";
const Home = () => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.custom.c)

    const addBtn = () => {
        dispatch({ type: 'increment' })
    }
    const subBtn = () => {
        dispatch({ type: 'decrement' })
    }

    const addBtn25 = () => {
        dispatch({
            type: 'incrementByValue',
            payload: 25
        })
    }

    return (
        <div >
            <h1>
                {value}
            </h1>
            <button onClick={addBtn}>Increment</button>
            <button onClick={addBtn25}>Value By 25</button>
            <button onClick={subBtn}>Decrement</button>
        </div>
    )
}

export default Home