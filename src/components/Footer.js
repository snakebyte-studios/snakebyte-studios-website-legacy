import { memo } from "react";

const FOOTER_HEIGHT = 55;

// Footer component is memoized even though it's not *technically*
// a pure function. Should be fine, as it only updates annually :)
const Footer = () => (
	<footer>
		<div className="copyright">
			© {new Date().getFullYear()} All rights reserved
		</div>
		<div className="social">
			<a
				href="https://www.instagram.com/snakebyte.studios/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/images/social/instagram.svg"
					alt="Snakebyte Studios Instagram"
				/>
			</a>
			<a
				href="https://ca.linkedin.com/company/snakebyte-studios-inc?trk=public_profile_topcard_current_company"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/images/social/linked-in.svg"
					alt="Snakebyte Studios LinkedIn"
				/>
			</a>
		</div>

		<style jsx>{`
			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: ${FOOTER_HEIGHT}px;
				margin-top: -${FOOTER_HEIGHT}px;
				padding: 15px;
				z-index: 2;
			}

			footer .copyright {
				opacity: 0.3;
				font-size: 12px;
			}

			footer .social a {
				padding: 10px;
				color: black;
			}

			footer .social img {
				height: 24px;
				width: 24px;
			}
		`}</style>
	</footer>
);

export default memo(Footer);
