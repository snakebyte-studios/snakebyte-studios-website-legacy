import { PureComponent } from "react";

class HireForm extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<form onSubmit={e => e.preventDefault()}>
					<label htmlFor="form-fullname">
						<span>Full Name</span>
						<input
							type="text"
							id="form-fullname"
							name="fullname"
							maxlength="50"
						/>
					</label>

					<label htmlFor="form-email">
						<span>Email</span>
						<input type="text" id="form-email" name="email" maxlength="75" />
					</label>

					<label htmlFor="form-message">
						<span>Tell us about your vision</span>
						<textarea
							type="text"
							id="form-message"
							name="message"
							maxlength="600"
						/>
					</label>

					<button>Send</button>
				</form>

				<style jsx>{`
					form {
						display: flex;
						flex-direction: column;
						width: 500px;
						margin-left: 80px;
						padding-left: 80px;
						padding-top: 15px;
						padding-bottom: 15px;
						border-left: 1px solid rgba(0, 0, 0, 0.2);
					}

					form * {
						display: block;
						width: 100%;
					}

					form label {
						margin-bottom: 20px;
					}

					form span {
						text-transform: uppercase;
						font-weight: bold;
						margin-bottom: 5px;
					}

					form input[type="text"] {
						height: 45px;
					}

					form input[type="text"],
					form textarea {
						padding: 10px 13px;
						border: 1px solid rgba(0, 0, 0, 0.175);
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