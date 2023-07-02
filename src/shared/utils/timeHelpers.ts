interface ITime {
  date: string
}

export const toTime = ({date}: ITime) => {
  const time = new Date(date);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};
