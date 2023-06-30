import React, {useState} from 'react';
import styles from "@/feauters/filter-button/FilterButton.module.scss";

function FilterButton({isClicked, filterAction}) {
    const [isActive, setIsActive] = useState(isClicked);

    const handleClick = () => {
        setIsActive(!isActive)
        // filterAction()
    }

    return (
        <span className={isActive ? styles.icon + ' ' +  styles.icon_clicked: styles.icon} onClick={handleClick}></span>
    );
}

export default FilterButton;
