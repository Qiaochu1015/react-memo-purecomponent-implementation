import React from "react";
import { withMyReactMemo } from "../../../implementations/withMyReactMemo";

class CarWithMemo extends React.PureComponent {
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

export default withMyReactMemo(CarWithMemo)
