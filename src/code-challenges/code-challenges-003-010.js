/**
 * Q003: Simple clock angle
 * Problem
 * You will be given a number N that represents where the minute hand currently is on a clock.
 * Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
 */

function simpleClockAngle(number) {
  // we got 6 because 360(degree)/60(minute) = 6;
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * number;
}
