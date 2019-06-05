import { Component } from "react";

class HireForm extends Component {
	render() {
		return (
			<React.Fragment>
				<form>
					<label htmlFor="fullname">
						<span>Full Name</span>
						<input type="text" name="fullname" placeholder="ex. John Doe" />
					</label>

					<label htmlFor="email">
						<span>Email</span>
						<input
							type="text"
							name="email"
							placeholder="ex. stuff@example.com"
						/>
					</label>

					<label htmlFor="message">
						<span>Tell us about your vision</span>
						<textarea type="text" name="message" placeholder="" />
					</label>
				</form>

				<style jsx>{`
					form {
						display: flex;
						flex-direction: column;

						width: calc((var(--container-width) / 2) + 30px);
					}

					form * {
						width: 100%;
					}

					form span {
						display: block;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

export default HireForm;
