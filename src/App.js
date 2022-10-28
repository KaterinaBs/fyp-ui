import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Home from './components/pages/Home.js';
import SignIn from './components/pages/SignIn.js';
import ContactUs from './components/pages/ContactUs.js';
import PageNotFound from './components/pages/404.js';


import './App.css';


function App() {
  return (
  <BrowserRouter>
    <Layout>
      <Routes>  {/*  wrap all pages into route component*/}
        <Route exact path= '/' element = {<Home /> }/> {/*  wrap individual page into route component --- if the path is / go to home comonents*/}
        <Route path= '/signin' element = {<SignIn />}/> {/*  if the path is / go to home comonents*/}
        <Route path= '/contact' element = {<ContactUs />} /> {/* if the path is /contact (user decides name of the url) go to home comonents*/}
        <Route path= '*' element = {<PageNotFound />}/> {/*  if the path is * which means all other entries but not the above go to page not found*/}
      </Routes> 
    </Layout>
  </BrowserRouter>

   
  );
}

export default App;
