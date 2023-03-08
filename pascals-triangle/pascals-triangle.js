export const rows = height => {
  const pascalsTriangle = new Array(height)

  for (let i = 0; i < height; i++) {
    let row = new Array(i + 1)

    row[0] = 1
    row[row.length - 1] = 1

    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = pascalsTriangle[i - 1]
      row[j] = rowAbove[j - 1] + rowAbove[j]
    }

    pascalsTriangle[i] = row
  }

  return pascalsTriangle
}
