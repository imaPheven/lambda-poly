import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.scss"
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCat, faDog, faBugs } from '@fortawesome/free-solid-svg-icons'


// We import all the components we need in our app
import MyNavbar from "./components/navbar";
import RecordListList from "./components/recordList/list";
import RecordListEdit from "./components/recordList/edit";
import RecordListCreate from "./components/recordList/create";

import BookstoreList from "./components/bookstore/list";
import BookstoreCreate from "./components/bookstore/create";
import BookstoreEdit from "./components/bookstore/edit";

import SampleForm from "./components/sample/form";
import SampleColors from "./components/sample/colors";

import Spelling from './components/spelling'

const App = () => {
 return (
   <div className="container">
     <MyNavbar />
     <Routes>
       <Route exact path="/" element={<BookstoreList />} />
       <Route path="/bookstore/create" element={<BookstoreCreate />} />
       <Route path="/bookstore/edit/:id" element={<BookstoreEdit />} />
       <Route path="/recordList/create" element={<RecordListCreate />} />
       <Route path="/recordList/edit/:id" element={<RecordListEdit />} />
       <Route path="/sample/form" element={<SampleForm />} />
       <Route path="/sample/colors" element={<SampleColors />} />
       <Route path="/spelling" element={<Spelling />} />
     </Routes>
   </div>
 );
};
// library.add(faCat, faDog, faBugs)
export default App;