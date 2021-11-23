function getFormattedDate(dateObject) {
  let options = {
    weekday: 'long'
  }
  let data = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
    hour: dateObject.getHours(),
    min: dateObject.getMinutes(),
    weekday: dateObject.toLocaleString("en", options),
  }
  function hour(a) {
    return String(a).length === 1 ? '0' + a : a
  }
  let d = data
  return  `${hour(data.date)}.${hour(data.month)}.${data.year} ${hour(data.hour)}:${hour(data.min)} ${data.weekday} `
}