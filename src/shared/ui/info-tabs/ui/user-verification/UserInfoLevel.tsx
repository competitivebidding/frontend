import * as React from 'react'
import DonutChart from '@/shared/ui/charts/DonutChart'
import { useTranslation } from 'react-i18next'

import { TooltipButton } from '../../../tooltip-button/TooltipButton'
import { GetProfileQuery, GetProfileQueryVariables } from '@shared/lib/types/__generated-types__/graphql'
import { useEffect, useState } from 'react'
import { ChartData } from 'chart.js'

interface IUserInfoProps {
  field: Profile | undefined
}

type Profile = GetProfileQuery['getProfile']


export const UserInfoLevel = ({ field }: IUserInfoProps) => {
  const { t } = useTranslation('cabinet')
  const [value, setValue] = useState<number | null>(null)

  const calculate = ( obj: any) => {
    const l = Object.keys(obj).length
    const v =
      Object.values(Object.values(field!)).filter((item: any) => {
        if (item === '' || item === null) {
          return
        }
        return item
      }).length * 100

    return v / l
  }

  useEffect(() => {
    if (field) {
      setValue(calculate(field))
    }
  }, [field])

  const chartData: ChartData<'doughnut', number[], string> = {
    labels: [''],
    datasets: [
      {
        label: '',
        data: [value!, 100 - (value as number)],
        borderWidth: 0,
        backgroundColor: ['#2F53FF', 'rgba(255, 255, 255, 0.12)'],
        datalabels: {
          display: false,
        },
      },
    ],
  }

  return (
    <div className="cabinet-block user-info__level">
      <DonutChart data={chartData} count={value} width={90} height={90} />
      <div className="level-content">
        <div className="level-content__title">
          <p>{t('authorizationLevel')}</p>
          <TooltipButton info="level-content__status not-verified level-content__status not-verified level-content__status not-verified" />
        </div>
        <span className="level-content__status not-verified">{t('notVerified')}</span>
      </div>
    </div>
  )
}
