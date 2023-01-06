import React from 'react';
import'./Form.css';

export default function FormItem({children,label,htmlFor,error}){
    return(
        <div className="FormItem">
            <label className="FormLabel" htmlFor={htmlFor}>{label}</label>
            {
                children
            }
            {
                error && <p className="FormError">{error}</p>
            }
        </div>

    );

}