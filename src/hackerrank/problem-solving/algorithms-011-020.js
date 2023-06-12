/**
 * 011: Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 */

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // get time slice
  // const [hours, minutes, modifier] = s.split(':');
  // console.log(hours,minutes,modifier)
  const time = s.match(/(\d+):(\d+):(\d+)(\w+)/);
  let hours = time[1];
  const minutes = time[2];
  const seconds = time[3];
  const modifier = time[4];

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * 012: grading
 */
