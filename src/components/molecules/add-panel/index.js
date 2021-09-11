import {React, useState} from 'react';
import {Button, Input} from 'antd'
import todos from "../../store/todos";
import './add-panel.sass'


const AddPanel = () => {
    const [text, setText] = useState('');
    const createNewTodo = (e) => {
        e.preventDefault();
        todos.addTodo(text);
    }
    return (
        <form className='search-panel' onSubmit={createNewTodo}>
            <Input placeholder="Введите новое задание" value={text} onChange={(e) => setText(e.target.value)}/>
            <Button type="primary" onClick={createNewTodo}>
                Добавить
            </Button>
        </form>
    )
}


export default AddPanel;