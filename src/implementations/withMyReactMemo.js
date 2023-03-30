import React from "react";

export const withMyReactMemo = (WrappedComponent) => {
	return class NewComponent extends React.Component {
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
			return this.checkIsDifferent(this.props, nextProps);
		}
		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};
