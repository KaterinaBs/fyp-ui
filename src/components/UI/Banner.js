import React from "react";
import Banner1 from '../Banner1.png'
import './Banner.css';

function Banner ()
{
    return(
        <React.Fragment>
            <h1>Banner </h1>
                    <div class="banner">
                        <img width={1000} src={Banner1} alt="First slide" />
                    </div>
        </React.Fragment>

    );

}
export default Banner;