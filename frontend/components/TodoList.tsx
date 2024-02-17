import { useState } from "react"

export function TodoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <input type="text" placeholder="title" onChange={function (e) {
        setTitle(e.target.value)
      }} /><br></br>
      <input type="text" placeholder="description" onChange={function (e) {
        setDescription(e.target.value)
      }} /><br></br>
      <button onClick={function(){
            fetch("http://localhost:3000/todos" ,{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers:{
                    'Content-Type' : 'application/json'
                    }
            })
            .then(async function(res){
                await res.json();
                alert("todo added");
            })
        }}>Add a todo</button>
    </>
  )
}