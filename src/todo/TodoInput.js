import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TODO_LIST } from "./todo";

function MakeTodo() {

    const Items = useRecoilValue(TODO_LIST);

    const setTodo = useSetRecoilState(TODO_LIST);

    const [Input, setInput] = useState('');

    const AddTodo = () => {
        setTodo([...Items, Input]);
        setInput('');
    }
    const onChangeInput = e => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input value={Input} onChange={onChangeInput} placeholder="ADD to Do!"></input>
            <button onClick={AddTodo}>ADD</button>
        </div>
    )
}

export default MakeTodo;