import React from 'react'

const Card = ({children, color="white"}) => {
    return (
        <div style={{ backgroundColor: color }}>{children}</div>
    )

}
export default Card