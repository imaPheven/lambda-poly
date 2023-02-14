import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/recordList/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
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
    //  const response = await fetch(`http://localhost:5001/record/`);
 
    //  if (!response.ok) {
    //    const message = `An error occurred: ${response.statusText}`;
    //    window.alert(message);
    //    return;
    //  }
 
    //  const records = await response.json();
     const records = [
      {_id: 1, name:"Bob", position: 'Executive', level: "noob"},
      {_id: 2, name:"Joe", position: 'Plummer', level: "Master"},
      {_id: 3, name:"Sam Weiss", position: 'Bowler', level: "Jedi Knight"}
    ]
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5001/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped secondary" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
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

