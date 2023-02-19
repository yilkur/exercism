export const saddlePoints = matrix => {
  const saddlePoints = []

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const current = matrix[row][column]

      const isRowSaddlePoint = matrix[row].every(el => current >= el)

      if (isRowSaddlePoint) {
        const tempColumn = matrix.map(tempRow => tempRow[column])
        const isColumnSaddlePoint = tempColumn.every(el => current <= el)

        if (isRowSaddlePoint && isColumnSaddlePoint) {
          saddlePoints.push({
            row: row + 1,
            column: column + 1,
          })
        }
      }
    }
  }

  return saddlePoints
}
