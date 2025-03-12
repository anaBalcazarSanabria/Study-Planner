import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTask() {
    const [form, setForm] = useState({
        name: "",
        deadline: "",
        subject: "",
        
    });

    const navigate = useNavigate();
    const backendUrl = "https://fluffy-space-fiesta-4j74w9q7j7qx25r5x-5050.app.github.dev/tasks/"

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
 async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newTask = { ...form };
  
    await fetch(`${backendUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", deadline: "", subject: "" });
    navigate("/tasklist");
  }


    return (
   <div>
     <h3>Create New Task</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="deadline">Deadline: </label>
         <input
           type="text"
           className="form-control"
           id="deadline"
           value={form.deadline}
           onChange={(e) => updateForm({ deadline: e.target.value })}
         />
        </div>
        <div className="form-group">
            <label htmlFor="subject">Subject: </label>
            <input
                type="text"
                className="form-control"
                id="subject"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
            />
        </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Create Task"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
};