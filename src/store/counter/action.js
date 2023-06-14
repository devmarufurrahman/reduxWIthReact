import { INCREMENT, DECREMENT } from "./actionType";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT,
	};
};
