import React from 'react'
import { generateBtnClass, generateRoundedClass } from './buttonsUtils'
import styles from '../../public/stylesheets/button.module.css' 
const Buttons = ({ children, color,variant, rounded, className,...props }) => {
    const colorClass = generateBtnClass(color, variant);
    const roundedClass = generateRoundedClass(rounded);
    return (
        <button
            className={[styles.btn, colorClass,roundedClass, className].join(" ")}
            {...props}
        >{children}</button>
    )
}

export default Buttons