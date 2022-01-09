import React from 'react'

function Loader() {
    return (
        <div className="spinnerContainer">
            <div className="spinner-grow text-primary" role="status">
                <span className="hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;
