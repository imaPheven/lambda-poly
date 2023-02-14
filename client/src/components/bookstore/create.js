import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
  bookName: "",
  price: 0,
  author: "",
  category: ""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   const response = await fetch("/api/books", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   const respJson = await response.json()
   if (!response.ok) {

    console.log(respJson)
    const message = `An error occurred: ${respJson.title}`;
    window.alert(message);
    return;
  }
  
  
 
   setForm({
    bookName: "",
    price: "",
    author: "",
    category: ""
   });
   navigate("/");
 }
 function onCancel(e) {
  e.preventDefault();
  navigate(e)
 }
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="bookName">Book Name: </label>
         <input
           type="text"
           className="form-control"
           id="bookName"
           value={form.bookName}
           onChange={(e) => updateForm({ bookName: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="price">Price: </label>
         <input
           type="text"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="author">Author: </label>
         <input
           type="text"
           className="form-control"
           id="author"
           value={form.author}
           onChange={(e) => updateForm({ author: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="categoryOptions"
             id="categoryComputers"
             value="Computers"
             checked={form.category === "Computers"}
             onChange={(e) => updateForm({ category: e.target.value })}
           />
           <label htmlFor="categoryComputers" className="form-check-label">Computers</label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="categoryOptions"
             id="categoryPhilosophy"
             value="Philosophy"
             checked={form.category === "Philosophy"}
             onChange={(e) => updateForm({ category: e.target.value })}
           />
           <label htmlFor="categoryPhilosophy" className="form-check-label">Philosophy</label>
         </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Create Record"
           className="btn btn-primary"
         />
         <button className="btn" onClick={onCancel}>Cancel</button>
       </div>
     </form>
   </div>
 );
}