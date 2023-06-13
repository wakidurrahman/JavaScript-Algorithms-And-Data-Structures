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
 * 012: HackerLand University has the following grading policy:
 *
 * Every student receives a grade  in the inclusive range from 0 to 100.
 * Any grade less than 40 is a failing grade.
 *
 * Sam is a professor at the university and likes to round each student's grade according to these rules:
 * If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 */

function gradingStudents(grades) {
  let count = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 == 3 && grades[i] >= 38) {
      count.push(grades[i] + 2);
    } else if (grades[i] % 5 == 4 && grades[i] >= 38) {
      count.push(grades[i] + 1);
    } else {
      count.push(grades[i]);
    }
  }
  return count;
}
