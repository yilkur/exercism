/// <reference path="./global.d.ts" />
// @ts-check

export const cookingStatus = remainingMins => {
  if (remainingMins === 0) {
    return 'Lasagna is done.'
  } else if (!remainingMins) {
    return 'You forgot to set the timer.'
  }

  return 'Not done, please wait.'
}

export const preparationTime = (layers, minsPerLayer = 2) =>
  layers.length * minsPerLayer

export const quantities = layers => {
  const totalQuantities = {
    noodles: 0,
    sauce: 0,
  }

  layers.forEach(layer => {
    if (layer === 'noodles') {
      totalQuantities['noodles'] += 50
    } else if (layer === 'sauce') {
      totalQuantities['sauce'] += 0.2
    }
  })

  return totalQuantities
}

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(...friendsList.slice(-1))
}

export const scaleRecipe = (recipe, scaleFactor) => {
  const scaledRecipe = {...recipe}

  for (const ingredient in scaledRecipe) {
    scaledRecipe[ingredient] = scaledRecipe[ingredient] / 2 * scaleFactor
  }

  return scaledRecipe
}