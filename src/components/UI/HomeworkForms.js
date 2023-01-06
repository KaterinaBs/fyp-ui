import React from "react";
import FormItem from "./Form";
import { useState } from "react";


const empyHomework = {
    Details: "Write an essay",
    DueDay: "2023-03-23"
};

export default function HomeworkForm({ onDismiss, onSubmit, initialHomework = empyHomework}) {
    //Initialisation--------------------------------
    const isValid = {
        Details: (name) => name.length > 10,
        DueDay:(name)=> name.length > 10
    }
    const errorMessage = {
        Details: "Field to short",
        DueDay: "Invalid Day",
    }

    //State-----------------------------------------
    const [homework, setHomoework] = useState(initialHomework);

    /////////////--REUSABLE ERRORS----//////////////////
    const [errors, setErrors] = useState(
        Object.keys(initialHomework).reduce(            //array of objects which has the homework attributes
            (accum, key) => ({ ...accum, [key]: null }),     //loops through attributes and assign null to them
            {})
    );
    //-----------------------------------------------------------------HANDLERS----------------------------------------------------------------------------------------

    //-------------CHANGE------------------------
    const changeHandler = (event) => {    //is called whenever form is updated
        const { name, value } = event.target;
        setHomoework({ ...homework, [name]: value });    //set homework with new values
        setErrors({ ...errors, [name]: isValid[name](value) ? null : errorMessage[name] });
    };

    //-------------SUBMIT------------------------

    const isValidHomework = (homework) => {  
        console.log(`homework =[${JSON.stringify(homework)}]`) //go through the object built in the form
        let isHomeworkValid = true;
        Object.keys(isValid).forEach((key) => { 
            console.log(`key = [${key}]`)   //chek if all individual values are corrent
            if (isValid[key](homework[key])) {     //if all correct isHomeworkValid remials true
            } else {                                //if any of them is wrong set the isHomeworkValid false
                errors[key] = null;
                errors[key] = errorMessage[key];
                isHomeworkValid = false;
            }
        });
        return isHomeworkValid;


    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(homework) && onDismiss();
        isValidHomework(homework);//if form is valid then submit 
        setErrors({ ...errors });   // if not then populate some errors
    };

    //-------------CANCEL------------------------
    const handleCancel = (event) => {
        event.preventDefault();
        console.log("cancel");
        onDismiss();
    }

    //View------------------------------------------
    return (
        <form className="BorderedForm">
            <label className="addHomeworkLabel"><h1>Add Homework</h1></label>
            <FormItem
                label="Details"
                htmlFor="Details"
                error={errors.Details}>
                <input
                    type="text"
                    name="Details"
                    value={homework.Details}
                    onChange={changeHandler}
                />
            </FormItem>
            <FormItem
                label="Due day"
                htmlFor="DueDay"
                error={errors.DueDay}>
                <input
                    type="text"
                    name="DueDay"
                    value={homework.DueDay}
                    onChange={changeHandler}
                />
            </FormItem>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}