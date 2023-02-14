import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`/api/books/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   
   const editedPerson = {
    id: params.id,
    bookName: form.bookName,
    price: form.price,
    author: form.author,
    category: form.category,
   };
   console.log(editedPerson)
   // This will send a post request to update the data in the database.
   await fetch(`/api/books/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
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
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}