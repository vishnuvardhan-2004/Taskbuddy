export default function TaskList({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div>
              <span>
                {task.text}
              </span>
              <small> ({task.priority}, {task.category})</small>
            </div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}