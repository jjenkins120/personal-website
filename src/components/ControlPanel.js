import React from 'react'

const ControlPanel = ({ displayPages, file }) => {
    return (
        <>
        {displayPages(file)}
        </>
    )
}

export default ControlPanel