import React, { useEffect, useState } from "react";

const backendUrl = "https://fluffy-space-fiesta-4j74w9q7j7qx25r5x-5050.app.github.dev/tasks/"

const Task = (props) => (
    <tr>
      <td>{props.task.name}</td>
      <td>{props.task.deadline}</td>
      <td>{props.task.subject}</td>
      <td>
        <button className="btn btn-link"
          onClick={() => {
            props.deleteTask(props.task._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // This method fetches the tasks from the database.
    useEffect(() => {
        async function getTasks() {
            const response = await fetch(`${backendUrl}`);
        
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        
            const tasks = await response.json();
            setTasks(tasks);
        }
        
        getTasks();
        return;
    }, [tasks.length]);

    async function deleteTask(id) {
        await fetch(`${backendUrl}/${id}`, {
          method: "DELETE"
        });
      
        const newTasks = tasks.filter((el) => el._id !== id);
        setTasks(newTasks);
      }

    // This method will map out the tasks on the table
 function taskList() {
    return tasks.map((task) => {
      return (
        <Task
          task={task}
          deleteTask={() => deleteTask(task._id)}
          key={task._id}
        />
      );
    });
  }

    return (
        <div>
            <h3>Task List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Deadline</th>
                <th>Subject</th>
                </tr>
            </thead>
            <tbody>{taskList()}</tbody>
            </table>
        </div>
    )
};

export default TaskList;