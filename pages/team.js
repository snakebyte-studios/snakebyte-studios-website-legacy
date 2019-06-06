import { PureComponent } from "react";
import Head from "next/head";
import TEAM_MEMBERS from "data/team_members.json";
import { KEYS } from "global/constants.js";
import Profile from "components/Profile.js";

class Team extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			activeProfile: null
		};
	}

	setActiveProfile = name => {
		this.setState({ activeProfile: name });
	};

	render() {
		const { activeProfile } = this.state;
		const { setActiveProfile } = this;

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
						className={
							activeProfile
								? "profile-container detail-view"
								: "profile-container"
						}
						tabIndex="0"
						onKeyDown={e =>
							e.keyCode === KEYS.ESC ? setActiveProfile(null) : null
						}
					>
						{/* <h1>Team</h1> */}

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
						height: 100vh;
					}

					.profile-container {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 100vh;
						width: 1050px;
						height: 450px;
						position: relative;
						max-width: 90vw;
						margin: auto;
						top: 50vh;
						transform: translateY(-40%);
						overflow: hidden;
						outline: 0;
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
					}

					.profile-container:not(.detail-view):hover
						:global(.profile.not-active) {
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

						.profile-container {
							flex-direction: column;
							height: auto;
							top: 0px;
							transform: none;
							padding-top: 30px;
							padding-bottom: 40px;
						}

						.profile-container:not(.detail-view):hover
							:global(.profile.not-active) {
							opacity: 1;
						}
					}
				`}</style>
			</>
		);
	}
}

export default Team;
