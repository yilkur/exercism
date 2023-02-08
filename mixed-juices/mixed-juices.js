/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const defaultTime = 2.5
  const timeMap = {
    'Pure Strawberry Joy': 0.5,
    Energizer: 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  }

  if (name in timeMap) {
    return timeMap[name]
  }

  return defaultTime
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const wedgesMap = {
    small: 6,
    medium: 8,
    large: 10,
  }

  let currentWedges = 0
  let limesCut = 0
  let i = 0

  while (currentWedges < wedgesNeeded && i < limes.length) {
    currentWedges += wedgesMap[limes[i]]
    limesCut++
    i++
  }

  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    const order = orders.shift()
    timeLeft -= timeToMixJuice(order)
  }

  return orders
}
