import React from 'react';
import { useState, useEffect } from 'react';
import API from '../api/API.js';
import HomeworkForm from '../UI/HomeworkForms.js';
import './homework.css';




export default function Homework() {
    //Initialisation------------------------------
    const loggedInUserId = 1;
    const moduleId = 2;
    //const homeworkEndpoint = `/homework/${loggedInUserId}`;
    const postHomeworkEndpoint = '/homework';

    //State-----------------------------------
    const [homeworks, setHomeworks] = useState(null);  //use state to store the modules [ name of the variable, function to set the varibles]
    const [loadingMessage, setLoadingMessage] = useState('Loading Records...')//letting user know the recrods are loading


    const [showHomeworkForm, setShowHomeworkForm] = useState(false);

    const getHomework = async () => {
        const response = await API.get(`/homework/${loggedInUserId}`);
        response.isSucces
            ? setHomeworks(response.result)
            : setLoadingMessage(response.message)
    };

    useEffect(() => { getHomework() }, []);

    const handleAdd = () => setShowHomeworkForm(true);
    const handleCancel = () => setShowHomeworkForm(false);

    const SubmitHandler = async (homework) => {
        homework.TeacherId = loggedInUserId;
        homework.ModuleId = moduleId;
        const response = await API.post(postHomeworkEndpoint, homework);
        return response.isSucces
            ? getHomework() || true
            : false;
    }



    //View------------------------------------
    return (
        <section>
            <h1 className='homework'>Homework</h1>
            {
                !homeworks // if modules have not been found
                    ? <p>{loadingMessage}</p> //display the loading message
                    : homeworks.length === 0 //when modules will load we check its length
                        ? <p>No homework found</p> // if its 0 modules not found
                        : homeworks.map((homework) =>
                            <ul className='homework'>
                                <div key={homework.HomeworkId}>
                                    Homework Id: {homework.HomeworkId}
                                    &nbsp;Details: {homework.Details}
                                    &nbsp;Deadline: {homework.DueDay}
                                </div>
                            </ul>
                        )


            }
            <button className='submit' onClick={handleAdd} >Add Homework</button>

            {
                showHomeworkForm && <HomeworkForm onDismiss={handleCancel} onSubmit={SubmitHandler} />

            }



        </section>

    );
}
