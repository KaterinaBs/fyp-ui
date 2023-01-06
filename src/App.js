import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Home from './components/pages/Home.js';
import MyAccount from './components/pages/myAccount.js';
import PageNotFound from './components/pages/404.js';
import HomeworkPage from './components/pages/Homework.js';
import AssignmentsPage from './components/pages/assignments.js';


function App() {
  return (
  <BrowserRouter>
    <Layout>
      <Routes>                                         {/* wrap all pages into route component*/}
        <Route exact path= '/' element = {<Home /> }/> {/*  wrap individual page into route component --- if the path is / go to home comonents*/}
        <Route path= '/myaccount' element = {<MyAccount />}/> {/*  if the path is /myAccount go to myAccount comonents*/}
        <Route path= '/homework' element = {<HomeworkPage />}/>
    {/* <Route path= '/assignments' element = {<AssignmentsPage />}/> */}
        <Route path= '*' element = {<PageNotFound />}/> {/*  if the path is * which means all other entries but not the above go to page not found*/}
      </Routes> 
    </Layout>
  </BrowserRouter>

   
  );
}

export default App;
