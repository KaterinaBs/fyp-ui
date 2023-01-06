import React from 'react';
import { useState, useEffect} from 'react';
import API  from '../api/API.js';
import { CardContainer } from '../UI/Card.js';
import ModuleCard from '../UI/ModuleCard.js';
import Banner1 from '../Banner1.png'
import './home.css'


// import { ActionAdd, ActionTray } from '../UI/Actions.js';



export default function Home() {
    //Initialisation------------------------------
    const loggedInUserId = 1;
    const endpoint = `/modules/teachers/${loggedInUserId}`;
    //State-----------------------------------
    const [modules, setModules] = useState(null);  //use state to store the modules [ name of the variable, function to set the varibles]
    const [loadingMessage, setLoadingMessage] = useState('Loading Records...')//letting user know the recrods are loading
    //Context---------------------------------
    //Methods---------------------------------
    
    const apiCall = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSucces 
        ? setModules(response.result)
        : setLoadingMessage(response.message)
    };

     useEffect(() => {apiCall(endpoint)}, []);

    //View------------------------------------
    return (
        <section>
            {/* <div className='banner'><img src={Banner1} alt="bannerImage" /></div> */}
            <h1>My Modules</h1>
            {
                !modules // if modules have not been found
                    ? <p>{loadingMessage}</p> //display the loading message
                    : modules.length === 0 //when modules will load we check its length
                        ? <p>No modules found</p> // if its 0 modules not found
                        : <CardContainer>
                            {
                                modules.map((module) => //else print out modules code 
                                    <ModuleCard key={module.ModuleCode} module={module} />
                                )
                                
                            }
                        </CardContainer>
            }
            

        </section>

    );
}
