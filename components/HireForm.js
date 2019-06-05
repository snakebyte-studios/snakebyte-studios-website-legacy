import { PureComponent } from "react";

class HireForm extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			fullname: "",
			email: "",
			message: ""
		};
	}

	handleFormChange = e => {
		this.setState({
			[e.target.name]: e.target.value.trim()
		});
	};

	handleFormSubmit = () => {
		// TO DO: Send data to a backend
		// eslint-disable-next-line no-console
		console.log("Form Payload:", this.state);
	};

	render() {
		const { handleFormChange, handleFormSubmit } = this;

		return (
			<React.Fragment>
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
							onChange={handleFormChange}
						/>
					</label>

					<label>
						<span>Email</span>
						<input
							type="text"
							name="email"
							maxLength="75"
							onChange={handleFormChange}
						/>
					</label>

					<label>
						<span>Tell us about your vision</span>
						<textarea
							type="text"
							name="message"
							maxLength="600"
							onChange={handleFormChange}
						/>
					</label>

					<button>Send</button>
				</form>

				<style jsx>{`
					form * {
						display: block;
						width: 100%;
					}

					form label {
						margin-bottom: 25px;
					}

					form span {
						text-transform: uppercase;
						font-weight: bold;
						margin-bottom: 7px;
					}

					form input[type="text"],
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
				`}</style>
			</React.Fragment>
		);
	}
}

export default HireForm;
