import React, { Component } from 'react'
import Car from './Car'
import CarWithMemo from './memo/CarWithMemo';
import CarWithPureComponent from './pureComponent/CarWithPureComponent';
import SellButton from './SellButton'

export default class CarApp extends Component {

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
      <h3>Original App</h3>
        <div>
          {this.state.cars.map((car) => (
            <Car key={car.id} carData={car} />
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
