/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0

  for (const bird of birdsPerDay) {
    totalBirds += bird
  }

  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirdsInWeek = 0
  let start = week * 7 - 7
  let end = start + 7

  for (let i = start; i < end; i++) {
    totalBirdsInWeek += birdsPerDay[i]
  }

  return totalBirdsInWeek
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++
    }
  }

  return birdsPerDay
}

fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0])
