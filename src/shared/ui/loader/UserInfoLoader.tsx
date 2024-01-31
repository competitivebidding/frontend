import cls from './UserInfoLoader.module.scss'

export const UserInfoLoader = () => {
  return (
    <article className={cls['user-info']}>
      <div className="cabinet-block user-info__settings skeleton-box" />
      <div className="cabinet-block user-info__level skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
      <div className="cabinet-block user-info__item skeleton-box" />
    </article>
  )
}
