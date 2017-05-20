/*
* Given a list of schedules, provide a list of times that are available for a meeting
* Example input: [
*   [
*     [4,5],[6,10],[12,14]],
*     [[4,5],[5,9],[13,16]],
*     [[11,14]]
*    ]
* Example Output: [[0,4],[16,23]]
*/


const getAvailableTimes = (allSchedules = []) => {

  // Step 1: Build master schedule as hash table
  const masterSchedule = allSchedules.reduce((schedules, schedule) => {
    return schedule.reduce((meetings, meeting) => {
      const [start, end] = meeting;

      const range = [...new Array(end - start + 1)].map((value, key) => key + start);
      return range.reduce((times, time) => {
        return Object.assign({}, times, { [time]: true });
      }, meetings)
    }, schedules);
  }, {});

  // Step 2: Find free times in hash table
  const hours = [...new Array(24).keys()];
  const availableTimes = [];
  let availableTime = [];

  hours.forEach((hour) => {
    if (!masterSchedule[hour]) {
      if (availableTime.length === 0) {
        availableTime.push((hour || 1) - 1);
      }
    } else {
      if (availableTime.length === 1) {
        availableTime.push(hour);
        availableTimes.push(availableTime);
        availableTime = [];
      }
    }
  });

  if (availableTime.length === 1) {
    availableTime.push(0);
    availableTimes.push(availableTime);
  }

  return availableTimes;
}

const getFreeTimes = (allSchedules = []) => {
  const masterSchedule = new Array(24).fill(false);

  // Step 1: Build master schedule
  allSchedules.forEach((schedule) => {
    schedule.forEach((meeting) => {
      const [start, end] = meeting;
      masterSchedule.fill(true, start, end + 1);
    });
  });

  // Step 2: Find free times
  const freeTimes = [];
  let freeTime = [];

  masterSchedule.forEach((isBusy, hour) => {
    if (isBusy) {
      if(freeTime.length === 1) {
        freeTime.push(hour);
        freeTimes.push(freeTime);
        freeTime = [];
      }
    } else {
      if(freeTime.length === 0) {
        freeTime.push((hour || 1) - 1);
      }
    }
  })

  // Close the last tuple if need be
  if (freeTime.length === 1) {
    freeTime.push(0);
    freeTimes.push(freeTime);
  }

  return freeTimes;
}

console.log(getAvailableTimes([[[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]]]));
console.log(getFreeTimes([[[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]]]));
