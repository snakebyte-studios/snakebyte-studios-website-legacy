import { memo, useState } from "react";
import Head from "next/head";
import TEAM_MEMBERS from "src/data/team_members.json";
import { KEYS } from "src/global/constants.js";
import Profile from "src/components/Profile.js";

const Team = () => {
	const [activeProfile, setActiveProfile] = useState(null);

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Our Team - Snakebyte Studios</title>
				<meta
					name="description"
					content="Years of experience and keen eyes for detail –
					Meet the brilliant minds at Snakebyte Studios."
				/>
			</Head>

			{/* Page content */}
			<main id="team-page" onClick={() => setActiveProfile(null)}>
				<h1>Our Team</h1>

				<div
					className={activeProfile ? "container detail-view" : "container"}
					tabIndex="0"
					onKeyDown={e =>
						e.keyCode === KEYS.ESC ? setActiveProfile(null) : null
					}
				>
					{TEAM_MEMBERS.map(member => (
						<Profile
							key={member.name}
							name={member.name}
							photo={member.photo}
							specialty={member.specialty}
							bio={member.bio}
							isActive={activeProfile === member.name}
							onProfileSelect={setActiveProfile}
						/>
					))}
				</div>
			</main>

			<style jsx>{`
				#team-page {
					min-height: 100vh;
				}

				.container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100vh;
					width: var(--container-width);
					height: 450px;
					position: relative;
					max-width: 90vw;
					margin: auto;
					top: 50vh;
					transform: translateY(-40%);
					overflow: hidden;
					outline: 0;
					animation: fade-up-team 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
				}

				h1 {
					display: inline-block;
					position: fixed;
					text-transform: uppercase;
					top: 90px;
					right: 0;
					left: 0;
					margin: 0 auto;
					text-align: center;
					font-size: 50px;
					animation: fade-down 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
				}
				@keyframes fade-up-team {
					0% {
						opacity: 0;
						transform: translateY(-100px);
					}
					100% {
						opacity: 100;
					}
				}
				@keyframes fade-up {
					0% {
						opacity: 0;
						transform: translateY(50px);
					}
					100% {
						opacity: 100;
					}
				}
				@keyframes fade-down {
					0% {
						opacity: 0;
						transform: translateY(-50px);
					}
					100% {
						opacity: 100;
					}
				}

				.container:not(.detail-view):hover :global(.profile.not-active) {
					opacity: 0.7;
				}

				.detail-view :global(.profile.not-active) {
					opacity: 0;
					pointer-events: none;
				}

				@media screen and (max-width: 1035px) {
					h1 {
						font-size: 42px;
						margin-top: 100px;
						display: block;
						position: static;
					}

					.container {
						flex-direction: column;
						height: auto;
						top: 0px;
						transform: none;
						padding-top: 30px;
						padding-bottom: 40px;
						animation: fade-up 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
					}

					.container:not(.detail-view):hover :global(.profile.not-active) {
						opacity: 1;
					}
				}
			`}</style>
		</>
	);
};

export default memo(Team);
