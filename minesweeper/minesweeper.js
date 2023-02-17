export const annotate = matrix => {
  if (matrix.length === 0) {
    return []
  }

  const MINE = '*'
  const annotatedMatrix = matrix.map(row => row.split(''))

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      if (matrix[rowIdx][colIdx] !== MINE) {
        const mineCount = getAdjacentMinesCount(matrix, rowIdx, colIdx)
        if (mineCount > 0) {
          annotatedMatrix[rowIdx][colIdx] = String(mineCount)
        }
      }
    }
  }

  return annotatedMatrix.map(row => row.join(''))
}

const getAdjacentMinesCount = (matrix, rowIdx, colIdx) => {
  const MINE = '*'
  let mineCount = 0
  for (let row = rowIdx - 1; row <= rowIdx + 1; row++) {
    for (let col = colIdx - 1; col <= colIdx + 1; col++) {
      if (matrix[row]?.[col] === MINE) {
        mineCount++
      }
    }
  }
  return mineCount
}
