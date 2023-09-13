export type dataset = {
    label?: string,
    data?: number[],
    borderWidth?: number,
    backgroundColor?: string[],
    circumference?: number,
    datalabels?: {display: boolean}
}

export interface IChartData {
    labels: string[],
    datasets: dataset[]
}