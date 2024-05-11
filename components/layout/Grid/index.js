import { motion } from "framer-motion";

import Heading from "../../html/Heading";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../../html/Paragraph";

import styles from "./Grid.module.scss";

const Grid = ({ items }) => {

    const listVariants ={
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.5,
            }
        }
    }
    const listItemVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <motion.ul 
            className={styles.grid}
            variants={listVariants}
            initial="initial"
            animate="animate"
        >
            {items.map((item, index) => {
                return (
                    <li 
                        className={styles.grid__item}
                        key={`album-${index}`}
                        variants={listItemVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <Link href={`https://open.spotify.com/album/${item.id}`}>
                            <Image 
                                src={item.images[0].url}
                                alt={item.name}
                                width={item.images[0].width}
                                height={item.images[0].height}
                                className="responsive-img"
                            />
                        </Link>
                        <Paragraph>
                            {item.name}
                        </Paragraph>
                    </li>
                )
            })}
        </motion.ul>
    )
};
export default Grid;