import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Record = (props) => (
 <tr>
   <td>{props.record.bookName}</td>
   <td>{props.record.category}</td>
   <td>{props.record.price}</td>
   <td>
     <Link className="btn btn-link" to={`/bookstore/edit/${props.record.id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record.id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const element = document.getElementById("myTable");
     const tBottom = element.getElementsByTagName("thead")[0].getBoundingClientRect().bottom
     const recordsToGet = Math.round((window.innerHeight - tBottom - 100)/56)
     const response = await fetch(`/api/Books?page=0&pageSize=${recordsToGet}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     
     const records = await response.json();
     
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`/api/books/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el.id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record.id)}
         key={record.id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div id="myDIV" class="record-list">
     <h3 class="record-type">Book collection</h3>
     <NavLink className="nav-link add-new" to="bookstore/create">
             <i class="bi bi-plus-square text-info"></i> Add book
      </NavLink>
     <table id="myTable" className="table table-striped secondary records" style={{ marginTop: 10 }}>
       <thead>
         <tr>
           <th>Book Name</th>
           <th>Category</th>
           <th>Price</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody  className="secondary">
        {recordList()}
        </tbody>
     </table>
     <nav  aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item disabled"><a class="page-link bg-dark" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link bg-dark" href="#">1</a></li>
        <li class="page-item"><a class="page-link bg-dark" href="#">2</a></li>
        <li class="page-item"><a class="page-link bg-dark" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link bg-dark" href="#">Next</a>
          </li>
      </ul>
    </nav>
   </div>
 );
}

