import React from 'react'

const Pagination = ({paginationContent, page, previousPage, nextPage}) => {
    return (
        <div className="row justify-content-between">
            <div className="col-2">
                {
                    page != 1 &&
                    <button type="button" className="btn btn-secondary" onClick={previousPage}>Previous Page</button>
                }
            </div>
            <div className="col-2">
                {
                    paginationContent.length &&
                    <button type="button" className="btn btn-secondary" onClick={nextPage}>Next Page</button>
                }
            </div>
        </div>
    )
}

export default Pagination