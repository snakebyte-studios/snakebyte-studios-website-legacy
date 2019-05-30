import { Component } from "react";
import Head from "next/head";
import { MEMBERS, KEYS } from "global/constants.js";
import Profile from "components/profile.js";

class Team extends Component {
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
				</Head>

				{/* Page content */}
				<main
					className={activeProfile ? "detail-view" : ""}
					tabIndex="0"
					onKeyDown={e =>
						e.keyCode === KEYS.ESC ? switchActiveProfile(null) : null
					}
				>
					<Profile
						name={MEMBERS.LEV}
						photo="https://placehold.it/750"
						specialty="Backend Developer"
						bio="Lorem ipsum dolor sit amet"
						isActive={activeProfile === MEMBERS.LEV}
						onProfileSelect={switchActiveProfile}
					/>
					<Profile
						name={MEMBERS.DARYL}
						photo="https://placehold.it/750"
						specialty="Frontend Developer"
						bio="Lorem ipsum dolor sit amet"
						isActive={activeProfile === MEMBERS.DARYL}
						onProfileSelect={switchActiveProfile}
					/>
					<Profile
						name={MEMBERS.KUMAIL}
						photo="https://placehold.it/750"
						specialty="Graphic Designer"
						bio="Lorem ipsum dolor sit amet"
						isActive={activeProfile === MEMBERS.KUMAIL}
						onProfileSelect={switchActiveProfile}
					/>
				</main>

				{/* CSS */}
				<style jsx>{`
					main {
						display: flex;
						height: 100vh;
						width: 1050px;
						max-width: 90vw;
						margin: 0 auto;
						justify-content: space-between;
						align-items: center;
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
