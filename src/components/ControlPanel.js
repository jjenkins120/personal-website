import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

const ControlPanel = ({ displayPages }) => {
    return (
        <>
        {displayPages()}
        </>
    )
}

export default ControlPanel