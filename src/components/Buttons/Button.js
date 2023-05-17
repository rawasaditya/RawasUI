import React from 'react'
import { generateBtnClass } from './buttonsUtils'
import styles from '../../public/stylesheets/button.module.css'
const Buttons = ({ child, color, className }) => {
    color = generateBtnClass(color);
    return (
        <button
            className={[styles.btn, color, className].join(" ")}
        >{child}</button>
    )
}

export default Buttons