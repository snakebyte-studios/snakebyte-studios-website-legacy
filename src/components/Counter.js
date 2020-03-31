import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<p>This is the current count: {count}</p>

			<style jsx>{`
				.counter {
					position: fixed;
					top: 30px;
					right: 30px;
					background-color: orange;
					z-index: 100;
					padding: 100px;
				}

				.counter p {
					color: black;
				}
			`}</style>
		</div>
	);
}

export default Counter;
