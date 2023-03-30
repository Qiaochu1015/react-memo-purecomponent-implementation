import React, { Component } from "react";

export class MyPureComponent extends Component {
	checkIsDifferent = (prev, next) => {
		prev = prev || {};
		next = next || {};
		if (Object.keys(prev).length !== Object.keys(next).length) {
			return true;
		}
		for (const key of Object.keys(prev)) {
			if (!Object.is(prev[key], next[key])) {
				return true;
			} 
			return false;
		}
		return false
	};

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.checkIsDifferent(this.props, nextProps) ||
			this.checkIsDifferent(this.state, nextState)
		);
	}
}

export default MyPureComponent;
