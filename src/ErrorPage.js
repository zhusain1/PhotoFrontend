import React from 'react';
import {
   Link
} from "react-router-dom";

const ErrorPage = () => {

  return (
    <div className="Error">
        <h1>
            Page not found<br/>
            Go <Link to="/"> <b>back </b></Link>
        </h1>
    </div>
  );
}

export default ErrorPage;