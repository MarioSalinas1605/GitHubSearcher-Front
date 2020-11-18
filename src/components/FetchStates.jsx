import React from 'react'
import Spinner from "../components/Spinner.jsx"

const FetchStates = ({loading = true, error = false}) => {
    if (error) {
        return (
            <div className="alert alert-warning" role="alert">
                Ops something went wrong
            </div>
        )
    }

    if (loading) {
        return <Spinner />    
    }

    return null
}

export default FetchStates