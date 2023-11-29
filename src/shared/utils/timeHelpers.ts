export const toTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const toDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString([], {day: 'numeric', month: 'numeric', year: 'numeric'})
}