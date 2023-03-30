import React, { Component } from 'react'

export class SellButton extends Component {
  render() {
    const {make} = this.props.carData
    return (
        <button onClick={this.props.handleSell} style={{ margin: "30px" }}>
        sell {make}
      </button>
    )
  }
}

export default SellButton