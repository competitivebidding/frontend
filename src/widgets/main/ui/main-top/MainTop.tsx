import React, {lazy, Suspense} from 'react'

import cls from './MainTop.module.scss'

import { ProgressList } from '@widgets/progress'
import { StatsList } from '@entities/stats/ui/stats-list/StatsList'
import { Mission } from '@widgets/mission/Mission'
const RoyalAuction = lazy(() => import('@/widgets/royal-auction'))

export const MainTop = () => {
  return (
      <Suspense fallback={''}>
          <div className={cls['main-top']}>
              <div className={cls["top__column1"]}>
                  <RoyalAuction />
                  <Mission value={'100'} />
                  <StatsList />
              </div>
              <div className={cls["top__column2"]}>
                  <ProgressList />
              </div>
          </div>
      </Suspense>

  )
}
