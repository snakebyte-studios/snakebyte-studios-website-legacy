import { PureComponent } from "react";

class Profile extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			name,
			photo,
			specialty,
			bio,
			isActive,
			onProfileSelect
		} = this.props;

		return (
			<div
				className={isActive ? "profile is-active" : "profile"}
				onClick={() => onProfileSelect(name)}
			>
				<img src={photo} alt={name} />
				<div className="info">
					<h1>{name}</h1>
					<h2>{specialty}</h2>
					<p>{bio}</p>
				</div>

				<span
					className="close"
					onClick={e => {
						e.stopPropagation();
						onProfileSelect(null);
					}}
				>
					✕
				</span>

				{/* CSS */}
				<style jsx>{`
					.profile {
						display: flex;
						align-items: center;
						min-width: 29%;
						flex-direction: column;
						cursor: pointer;
						box-sizing: border-box;
						position: relative;
						transition: 0.2s;
						z-index: 1;
					}

					.profile .close {
						opacity: 0;
						pointer-events: none;
						font-size: 24px;
						position: absolute;
						top: 0;
						right: 0;
						padding: 20px;
						cursor: default;
					}

					.profile.is-active {
						cursor: auto;
						flex-direction: row;
						background-color: rgba(255, 255, 255, 0.5);
						padding: 50px;
						min-width: 100%;
					}

					.profile.is-active .close {
						opacity: 1;
						pointer-events: auto;
					}

					.profile.is-active .close:hover {
						opacity: 0.7;
					}

					.profile.is-active .info {
						margin-left: 40px;
					}

					.profile img {
						border-radius: 1000px;
						height: 300px;
						width: 300px;
						background-color: #ccc;
						margin-bottom: 20px;
					}

					.profile.is-active img {
						margin-bottom: 0;
					}

					.profile .info h1 {
						font-size: 30px;
						margin-left: -1px;
						margin-bottom: 5px;
					}

					.profile .info h2 {
						font-size: 18px;
						margin-bottom: 10px;
					}
				`}</style>
			</div>
		);
	}
}

export default Profile;
