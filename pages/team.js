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

	switchActiveProfile = name => {
		this.setState({ activeProfile: name });
	};

	render() {
		const { activeProfile } = this.state;
		const { switchActiveProfile } = this;

		return (
			<React.Fragment>
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
				<main
					id="team-page"
					className={activeProfile ? "detail-view" : ""}
					tabIndex="1"
					onKeyDown={e =>
						e.keyCode === KEYS.ESC ? switchActiveProfile(null) : null
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
							onProfileSelect={switchActiveProfile}
						/>
					))}
				</main>

				<style jsx>{`
					main {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 100vh;
						width: 1050px;
						height: 450px;
						position: relative;
						max-width: 90vw;
						margin: auto;
						top: 48vh;
						transform: translateY(-40%);
						overflow-x: hidden;
						outline: 0;
					}

					.detail-view :global(.profile:not(.is-active)) {
						opacity: 0;
						min-width: 0;
						pointer-events: none;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

export default Team;
