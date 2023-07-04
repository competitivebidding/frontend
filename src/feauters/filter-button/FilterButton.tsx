import React, {FC, useState} from 'react';
import styles from "@/feauters/filter-button/FilterButton.module.scss";

interface IFilterButtonProps {
    isClicked: boolean
    filterAction?: () => void
}

export const FilterButton:FC<IFilterButtonProps> = ({isClicked, filterAction}) => {
    const [isActive, setIsActive] = useState(isClicked);

    const handleClick = () => {
        setIsActive(!isActive)
        // filterAction()
    }

    return (
        <span className={isActive ? styles.icon + ' ' +  styles.icon_clicked: styles.icon} onClick={handleClick}></span>
    );
}

