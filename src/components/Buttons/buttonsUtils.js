import styles from '../../public/stylesheets/button.module.css'

const generateBtnClass = (color, variant="text") => {
    const cssClass = `btn-${variant}-${color}`;
    const cssClasses = Object.keys(styles);
    if(cssClasses.includes(cssClass)){
        return styles[cssClass]
    }else{
        return ""
    }
}
const generateRoundedClass = (isRounded) => {
    if(isRounded){
        
        const cssClass = `rounded-pill`;
        const cssClasses = Object.keys(styles);
        if(cssClasses.includes(cssClass)){
            return styles[cssClass]
        }else{
            return ""
        }
    }
}


export {
    generateBtnClass,
    generateRoundedClass
}