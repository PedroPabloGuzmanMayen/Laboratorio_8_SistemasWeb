import React from 'react'
import Proptypes from 'prop-types'
import './Button.css'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className = 'Button'>{text}</button>
    )
}

Button.propTypes = {
    onClick: Proptypes.func,
    text: Proptypes.string
}

export default Button