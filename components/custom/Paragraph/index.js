import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({  
    caption, 
    children, 
    intro,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
 }) => {    
    const paragraphClasses = cx({
        paragraph: true,
        intro: intro,
        caption: caption,
        [`margin-bottom--${marginTop}`]: marginTop,
        [`margin-bottom--${marginRight}`]: marginRight,
        [`margin-bottom--${marginBottom}`]: marginBottom,
        [`margin-bottom--${marginLeft}`]: marginLeft,
    });

    return (
        <p className={paragraphClasses}>{children}</p>
    )
};
export default Paragraph;