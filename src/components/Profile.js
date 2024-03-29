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
		className={isActive ? "profile is-active" : "profile not-active"}
		onClick={e => {
			e.stopPropagation();
			onProfileSelect(name);
		}}
	>
		<img src={photo} alt={name} />
		<div className="info">
			<h2>{name}</h2>
			<h3>{specialty}</h3>
			<p dangerouslySetInnerHTML={{ __html: bio }} />
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
				left: 0;
				transition: var(--transition-time);
				will-change: transform;
			}

			.profile:nth-of-type(1) {
				transform: translate3d(0, 0, 0);
			}

			.profile:nth-of-type(2) {
				transform: translate3d(33.33%, 0, 0);
			}

			.profile:nth-of-type(3) {
				transform: translate3d(66.66%, 0, 0);
			}

			.profile.not-active:hover {
				opacity: 1 !important;
			}

			.profile p {
				line-height: 1.4em;
				max-height: 0;
				overflow: hidden;
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
				background-color: rgba(0, 0, 0, 0.3);
				min-width: 100%;
				transform: translate3d(0, -5px, 0);
			}

			.profile.is-active p {
				max-height: none;
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
				max-width: 200px;
			}

			.profile.is-active .info {
				margin-left: 40px;
				max-width: 50%;
			}

			.profile img {
				border-radius: 1000px;
				height: 300px;
				width: 300px;
				background-color: black;
				margin-bottom: 20px;
			}

			.profile.is-active img {
				margin-bottom: 0;
			}

			.profile .info h2 {
				font-size: 30px;
				margin-left: -1px;
				margin-bottom: 5px;
			}

			.profile .info h3 {
				font-size: 18px;
				margin-bottom: 10px;
				color: #f26d00;
				opacity: 0.6;
			}

			@media screen and (max-width: 1035px) {
				.profile:nth-child(1n) {
					align-items: center;
					position: static;
					transform: none;
					width: 100%;
					pointer-events: none;
					margin-bottom: 15px;
				}

				.profile:nth-child(1n) img {
					max-width: 70%;
					height: auto;
				}

				.profile:nth-child(1n) .info {
					text-align: center;
					margin-left: 0;
					width: 500px;
					max-width: 100%;
				}

				.profile:nth-child(1n) .info p {
					max-height: none;
					font-size: 14px;
					text-align: justify;
					margin-top: 20px;
				}
			}
		`}</style>
	</div>
);

export default memo(Profile);
