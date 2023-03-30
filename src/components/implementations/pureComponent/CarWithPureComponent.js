import React from "react";
import MyPureComponent from "../../../implementations/MyPureComponent";

export default class CarWithPureComponent extends MyPureComponent {
	componentDidUpdate() {
		alert(`${this.props.carData.make} updated`);
	}
	render() {
		const { make, quantity } = this.props.carData;
		return (
			<div
				style={{
					border: "1px solid black",
					display: "inline-block",
					width: "100px",
					height: "100px",
					margin: "10px",
				}}
			>
				<p>{make}</p>
				<p>{quantity}</p>
			</div>
		);
	}
}