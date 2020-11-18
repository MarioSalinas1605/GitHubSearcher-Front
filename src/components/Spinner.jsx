import React from 'react';
import "./styles/Spinner.scss";

function Spinner(params) {
    return(
        <div className="spinner-wrapper">
          <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
    )
}

export default Spinner