import React from 'react';
import { Form } from 'react-bootstrap';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function Todo({ todo, index, completeTodo, editTodo, removeTodo }) {
    return (
        <div className="todo-item">
            <div class="todo-item-text">{todo.text}</div>
            <div class="todo-item-btns">
                <button class="btn-icon-rounded" onClick={() => completeTodo(index)}><CheckOutlinedIcon /></button>
                <button class="btn-icon-rounded" onClick={() => editTodo(index)}><ModeEditOutlineOutlinedIcon /></button>
                <button class="btn-icon-rounded" onClick={() => removeTodo(index)}><ClearOutlinedIcon /></button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Add New Task" value={value} onChange={e => setValue(e.target.value)} required />
            <button type="submit" className="todo-add-btn btn-icon-rounded"><AddOutlinedIcon /></button>
        </form>
    );
}

function TodoList() {
    const [todos, setTodos] = React.useState([
        {
            text: "Learn about Tech",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="todo-add mb-3">
                <TodoForm addTodo={addTodo} />
            </div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
