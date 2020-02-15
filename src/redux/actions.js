const addCar = (newCar) => {
  return {
    type: 'ADD_CAR',
    value: newCar
  }
}

const removeCar = (index) => {
  return {
    type: 'REMOVE_CAR',
    value: index
  }
}

export {addCar, removeCar};