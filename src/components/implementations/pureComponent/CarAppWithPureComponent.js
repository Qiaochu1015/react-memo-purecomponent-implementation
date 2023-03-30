import React from 'react'
import CarWithPureComponent from './CarWithPureComponent'
import SellButton from '../SellButton'
import MyPureComponent from '../../../implementations/MyPureComponent';

export default class CarAppWithPureComponent extends MyPureComponent {

  state = {
    cars: [
      {
        make: "Toyota",
        quantity: 10,
        id: 1,
      },
      {
        make: "Honda",
        quantity: 5,
        id: 2,
      },
      {
        make: "Nissan",
        quantity: 7,
        id: 3,
      },
    ],
  };

  handleSell = (i) => {
    this.setState((prev) => {
      const newCars = prev.cars.map((car, carIndex) => {
        if(carIndex === i) {
          return {...car, quantity: car.quantity - 1}
        }
        return car
      })

      const nextState = {...prev, cars: newCars}
      return nextState
    })
  }

  render() {
    return (
      <>
      <h3>My React.PureComponent</h3>
        <div>
          {this.state.cars.map((car) => (
            <CarWithPureComponent key={car.id} carData={car} />
          ))}
        </div>
        <div>
          {this.state.cars.map((car, index) => (
            <SellButton
              key={car.id}
              handleSell={() => this.handleSell(index)}
              carData={car}
            />
          ))}
        </div>
      </>
    )
  }
}
