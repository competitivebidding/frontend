
import React, {FC} from 'react';
import cls from './Skeleton.module.scss'

interface SkeletonProps {
 width?: string | number, height?: string | number, borderRadius?: string | number
};

export const Skeleton: FC<SkeletonProps> = ({width = 50, height = 50, borderRadius = 8}) => {
    return (
        <div className={cls['skeleton-box']} style={{width, height, borderRadius}} />
    );
};