import * as React from 'react'
import DonutChart from '@/components/Charts/DonutChart'
import info from '@/assets/cabinet/info.svg'

export const UserInfoLevel = ({ field }) => {
  const [isEditable, setIsEditable] = React.useState(false)
  const [value, setValue] = React.useState(field)

  const changeState = () => {
    setIsEditable(!isEditable)
  }

  const calculate = (obj) => {
    const l = Object.keys(obj).length
    const v = Object.values(obj).filter((item) => item !== null).length * 100
    return v / l
  }

  React.useEffect(() => {
    if (field) {
      setValue(calculate(field))
    }
  }, [field])

  const chartData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [value, 100 - value],
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
      <DonutChart data={chartData} count={`${value}%`} width={90} height={90} />
      <div className="level-content">
        <div className="level-content__title">
          <p>Authorization level</p>
          <i>
            <img src={info} alt="" />
          </i>
        </div>
        <span className="level-content__status not-verified">Not verified!</span>
      </div>
    </div>
  )
}
