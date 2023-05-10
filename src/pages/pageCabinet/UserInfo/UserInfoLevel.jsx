import * as React from 'react';
import DonutChart from "../../../components/Charts/DonutChart";
import info from '@/assets/cabinet/info.svg'


export const UserInfoLevel = ({field, handleUpdate}) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)

    const changeState = () => {
        setIsEditable(!isEditable)
    }

    const chartData = {
        labels: [],
        datasets: [{
            label: '',
            data: [10, 100],
            borderWidth: 0,
            backgroundColor: ['#2F53FF', 'rgba(255, 255, 255, 0.12)'],
            datalabels: {
                display: false
            }
        }]
    }

    return (
        <div className="cabinet-block user-info__level">
            <DonutChart data={chartData} count={'10%'} width={90} height={90}/>
            <div className="level-content">
                <div className="level-content__title">
                    <p>
                        Уровень авторизации
                    </p>
                    <i>
                        <img src={info} alt=""/>
                    </i>
                </div>
                <span className="level-content__status not-verified">Не верифицирован!</span>
            </div>
        </div>
    );
}