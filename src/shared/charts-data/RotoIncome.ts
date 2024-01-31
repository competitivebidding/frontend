import { ChartData } from 'chart.js';

export const rotoIncome: ChartData<'bar', number[], string[]> = {
    labels: [['Mon'], ['Tue'], ['Wed'], ['Thu'], ['Fri'], ['Sat'], ['Sun']],
    datasets: [
        {
            label: 'Your Label',
            data: [12000, 31000, 15000, 27000, 25000, 20000, 37000],
            borderRadius: 50,
            barThickness: 25,
            borderSkipped: false,
            datalabels: {
                anchor: 'end',
                align: 'top',
                offset: 16,
            },
        },
    ],
};
