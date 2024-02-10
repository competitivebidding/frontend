import React, { useState } from 'react'
import styles from '@features/filter-button/FilterButton.module.scss'

interface IFilterButtonProps {
  isClicked: boolean
  filterAction?: () => void
}

export const FilterButton = ({ isClicked, filterAction }: IFilterButtonProps) => {
  const [isActive, setIsActive] = useState(isClicked)

  const handleClick = () => {
    setIsActive(!isActive)
    if (filterAction) {
      filterAction()
    }
  }

  return (
    <span className={isActive ? styles.icon + ' ' + styles.icon_clicked : styles.icon} onClick={handleClick}></span>
  )
}
