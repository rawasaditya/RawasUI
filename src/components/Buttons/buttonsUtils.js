import styles from '../../public/stylesheets/button.module.css'

const generateBtnClass = (color) => {
    const cssClass = `btn-${color}`;
    const cssClasses = Object.keys(styles);
    cssClasses.includes(cssClass)
    return styles[cssClass]
}


export {
    generateBtnClass
}