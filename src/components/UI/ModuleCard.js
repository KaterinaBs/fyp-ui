import React from 'react';
import { Card } from './Card.js';
import './ModuleCard.css';
//import { TiDocumentAdd } from "react-icons/ti";
import { NavLink } from 'react-router-dom';



export default function ModuleCard({module}) {

  return (
    <Card>
      <div className="cardContainer">
      <div className="cardLayout">
        <div className="cardImg">
          <img src='https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Module" />
        </div>
        <div className="cardDetails">
          <h1>{module.ModuleName} ({module.ModuleCode})</h1>
          <div className='CardButtons'>
          <NavLink to='/homework'> Homework </NavLink>
          <NavLink to='/assignments'> Assignments </NavLink>
          {/* <i className='homeworkIcon'><TiDocumentAdd color='blue' size={30}/></i>
          <i className='assignmentsIcon'><TiDocumentAdd color='black' size={30}/></i> */}
          </div>
        </div>

      </div>
      </div>
    </Card>
  );
}