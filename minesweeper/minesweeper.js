export const annotate = matrix => {
  let annotatedMatrix = [...matrix.map(el => el.split(''))]
  const MINE = '*'

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[0].length; columnIdx++) {

      if (matrix[rowIdx][columnIdx] === MINE) {
        continue
      }

      let mineCount = 0

      const top = matrix[rowIdx - 1] && matrix[rowIdx - 1][columnIdx]
      const topRight = matrix[rowIdx - 1] && matrix[rowIdx - 1][columnIdx + 1]
      const right = matrix[rowIdx][columnIdx + 1]
      const bottomRight =
        matrix[rowIdx + 1] && matrix[rowIdx + 1][columnIdx + 1]
      const bottom = matrix[rowIdx + 1] && matrix[rowIdx + 1][columnIdx]
      const bottomLeft = matrix[rowIdx + 1] && matrix[rowIdx + 1][columnIdx - 1]
      const left = matrix[rowIdx][columnIdx - 1]
      const topLeft = matrix[rowIdx - 1] && matrix[rowIdx - 1][columnIdx - 1]

      const adjacentCells = [
        top,
        topRight,
        right,
        bottomRight,
        bottom,
        bottomLeft,
        left,
        topLeft,
      ]

      adjacentCells.forEach(cell => {
        if (cell === MINE) {
          mineCount++
        }
      })

      if (mineCount > 0) {
        annotatedMatrix[rowIdx][columnIdx] = mineCount
      }
    }
  }

  annotatedMatrix = annotatedMatrix.map(row => row.join(''))
  return annotatedMatrix
}
