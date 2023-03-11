export const sum = (factors, limit) => {
  const uniqueMultiples = []
  const isMultipleOfFactors = num => factors.some(factor => num % factor === 0)
  
  for (let i = 1; i < limit; i++) {
    if (isMultipleOfFactors(i)) {
      uniqueMultiples.push(i)
    }
  }

  return uniqueMultiples.reduce((acc, val) => acc + val, 0)
}
