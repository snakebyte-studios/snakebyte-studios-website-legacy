import { memo } from "react";

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
				<img src="/static/images/social/instagram.svg" />
			</a>
		</div>

		<style jsx>{`
			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100vw;
				padding: 15px;
				background-color: var(--site-bg-color);
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
