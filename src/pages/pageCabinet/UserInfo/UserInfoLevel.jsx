import * as React from 'react';
import DonutChart from "@/components/Charts/DonutChart";
import info from '@/assets/cabinet/info.svg'


export const UserInfoLevel = ({field}) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)

    const changeState = () => {
        setIsEditable(!isEditable)
    }


    // const b = Object.values(field).filter(item => item !== 'id')
    // console.log(b)
    // const a = Object.values(field).reduce((acc, item) => {
    //      return item === null ? acc + 0 : acc + 10
    // }, 0)
    //
    // console.log(a)
    // console.log(Object.values(field))

    const chartData = {
        labels: [],
        datasets: [{
            label: '',
            data: [50, 50],
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
                        Authorization level
                    </p>
                    <i>
                        <img src={info} alt=""/>
                    </i>
                </div>
                <span className="level-content__status not-verified">Not verified!</span>
            </div>
        </div>
    );
}