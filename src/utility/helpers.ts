const formatDate = (dateString: string): string => {
  if (Number.isNaN(Date.parse(dateString))) {
    return '';
  }
  const date = new Date(dateString);
  const time = date
    .toLocaleTimeString('en', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(' ');
  const hours = time[0].substring(0, 2);
  const hoursFormatted = hours.startsWith('0') ? hours.substring(1) : hours;

  const minutes = time[0].substring(3);
  const tz = date.toString().split(' ')[5];
  const tzFormatted = `(${tz.substring(0, 6)}:${tz.substring(6)})`;

  return `${hoursFormatted}:${minutes}${time[1].toLowerCase()} ${tzFormatted}`;
};

export { formatDate };
