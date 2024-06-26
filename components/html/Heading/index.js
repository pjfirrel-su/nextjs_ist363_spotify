import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({ 
    children,
    level,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
 }) => {
    const Tag = `h${level}`;

    const headingClasses = cx({
        heading: true,
        [`heading--${level}`] : level,
        [`margin-bottom--${marginTop}`]: marginTop,
        [`margin-bottom--${marginRight}`]: marginRight,
        [`margin-bottom--${marginBottom}`]: marginBottom,
        [`margin-bottom--${marginLeft}`]: marginLeft,
    });

    return (
        <Tag className={headingClasses}>{children}</Tag>
    )
};
export default Heading;