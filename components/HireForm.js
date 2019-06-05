import { PureComponent } from "react";

class HireForm extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			fullname: "",
			email: "",
			message: "",
			loading: false,
			submitted: false
		};
	}

	handleFieldChange = e => {
		this.setState({
			[e.target.name]: e.target.value.trim()
		});
	};

	handleFormSubmit = async () => {
		this.setState({ loading: true });
		// TO DO: Send data to a backend
		// eslint-disable-next-line no-console
		console.log("Form Payload:", this.state);
		this.setState({ loading: false, submitted: true });
	};

	render() {
		const { loading, submitted } = this.state;
		const { handleFieldChange, handleFormSubmit } = this;

		return (
			<React.Fragment>
				<div className={submitted ? "submitted" : ""}>
					<form
						onSubmit={e => {
							e.preventDefault();
							handleFormSubmit();
						}}
					>
						<label>
							<span>Full Name</span>
							<input
								type="text"
								name="fullname"
								maxLength="50"
								required={true}
								onChange={handleFieldChange}
							/>
						</label>

						<label>
							<span>Email</span>
							<input
								type="email"
								name="email"
								maxLength="75"
								required={true}
								onChange={handleFieldChange}
							/>
						</label>

						<label>
							<span>Tell us about your vision</span>
							<textarea
								type="text"
								name="message"
								maxLength="600"
								required={true}
								onChange={handleFieldChange}
							/>
						</label>

						<button>{loading ? "Loading..." : "Send"}</button>
					</form>

					<p className="thankyou-message">✓ We'll be in touch</p>
				</div>

				<style jsx>{`
					form {
						max-height: 600px;
						overflow: hidden;
						transition: var(--transition-time);
					}

					form * {
						display: block;
						width: 100%;
						outline: 0;
					}

					form *:focus {
						border: 1px solid skyblue !important;
					}

					form label {
						margin-bottom: 25px;
					}

					form span {
						text-transform: uppercase;
						font-weight: bold;
						margin-bottom: 7px;
					}

					form input,
					form textarea {
						padding: 10px 13px;
						border: 1px solid rgba(0, 0, 0, 0.175);
						height: 45px;
					}

					form textarea {
						height: 150px;
						line-height: 1.4em;
						resize: none;
					}

					button {
						padding: 13px;
						color: var(--site-bg-color);
						background-color: var(--site-text-color);
						border: 1px solid var(--site-text-color);
						transition: var(--transition-time);
						text-transform: uppercase;
						font-weight: bold;
						cursor: pointer;
					}

					button:hover {
						background-color: transparent;
						color: var(--site-text-color);
					}

					.thankyou-message {
						max-height: 0;
						overflow: hidden;
						background-color: rgba(0, 128, 0, 0.5);
						border: 1px solid rgba(0, 128, 0, 0.8);
						color: var(--site-bg-color);
						text-align: center;
						border-radius: 3px;
						padding: 0;
						transition: var(--transition-time);
						opacity: 0;
					}

					.submitted form {
						max-height: 0;
					}

					.submitted .thankyou-message {
						max-height: 50vh;
						padding: 20px;
						opacity: 1;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

export default HireForm;
