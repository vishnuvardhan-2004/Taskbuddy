import { useState } from "react"
export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority("Medium");
        setCategory("General");
    }
    return (
        <form onSubmit={handleSubmit} id="task-form">
            <div id="inp">
                <input type='text' placeholder="Enter the task" value={task}
                    onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add task</button>
            </div>

            <div id="btns">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value = "High">High</option>
                    <option value = "Medium">Medium</option>
                    <option value = "Low">Low</option>
                </select>

                <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
            {/* <h1>{task} {priority} {category}</h1> */}
        </form>
    )
}