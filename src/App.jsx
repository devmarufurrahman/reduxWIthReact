import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "./store/counter/action";
import { useState } from "react";

function App(props) {
	const [value, setValue] = useState(0);

	const handleChange = (e) => {
		setValue(Number(e.target.value));
	};

	return (
		<>
			<div>
				<h1>Counter: {props.count}</h1>
				<br />

				<input type="number" onChange={handleChange} />
				<br />
				<br />
				<button onClick={() => props.increment(value)}>Increment</button>
				<button onClick={() => props.decrement(value)}>Decrement</button>

				<br />
				<br />
				{/* <button onClick={() => props.increment()}>Increment</button>
				<button onClick={() => props.decrement()}>Decrement</button> */}
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		count: state.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (value) => dispatch(increment(value)),
		decrement: (value) => dispatch(decrement(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
