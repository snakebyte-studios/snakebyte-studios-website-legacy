import { memo } from "react";

const Profile = ({
	name,
	photo,
	specialty,
	bio,
	isActive,
	onProfileSelect
}) => (
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

		<style jsx>{`
			.profile {
				display: flex;
				align-items: flex-start;
				width: inherit;
				flex-direction: column;
				padding: 25px;
				cursor: pointer;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				left: 0;
				transition: 0.2s;
				transform: translate3d(0, -25px, 0);
				will-change: transform;
			}

			.profile:nth-child(2) {
				transform: translate3d(33.33%, -25px, 0);
			}

			.profile:nth-child(3) {
				transform: translate3d(66.66%, -25px, 0);
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
				align-items: center;
				background-color: rgba(255, 255, 255, 0.5);
				min-width: 100%;
				transform: none;
			}

			.profile.is-active .close {
				opacity: 1;
				pointer-events: auto;
			}

			.profile.is-active .close:hover {
				opacity: 0.7;
			}

			.profile .info {
				margin-left: 6%;
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

export default memo(Profile);
