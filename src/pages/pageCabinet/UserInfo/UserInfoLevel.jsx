import * as React from 'react'
import DonutChart from '@/shared/ui/Charts/DonutChart'
import { useTranslation } from "react-i18next";

import { TooltipButton } from '../../../shared/ui/TooltipButton/TooltipButton';

export const UserInfoLevel = ({ field }) => {
	const { t } = useTranslation('cabinet')
	const [value, setValue] = React.useState(field)

	const calculate = (obj) => {
		const l = Object.keys(obj).length
		const v = Object.values(obj).filter((item) => {
			if (item === '' || item === null) {
				return
			}
			return item
		}).length * 100

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
					<p>{t('authorizationLevel')}</p>
					<TooltipButton info="level-content__status not-verified level-content__status not-verified level-content__status not-verified" />
				</div>
				<span className="level-content__status not-verified">{t('notVerified')}</span>
			</div>
		</div>
	)
}
