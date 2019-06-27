import { memo } from "react";
import Link from "next/link";

const Header = ({ onMenuBtnClick }) => (
	<header>
		<Link href="/">
			<a>
				<img
					src="/static/images/snakebyte/logo.svg"
					className="brandmark"
					alt="Snakebyte Studios"
				/>
			</a>
		</Link>

		<div className="menu-button" onClick={onMenuBtnClick}>
			<span />
		</div>

		<style jsx>{`
			header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20px;
				position: fixed;
				top: 0;
				left: 0;
				height: 90px;
				width: 100vw;
				background-color: var(--site-bg-color);
				z-index: 2;
			}

			header .brandmark {
				height: 40px;
				width: 50px;
			}

			.menu-button {
				padding: 25px 15px;
				cursor: pointer;
				transition: var(--transition-time);
			}

			.menu-button:hover {
				opacity: 0.7;
			}

			.menu-button span,
			.menu-button span:before,
			.menu-button span:after {
				display: block;
				height: 5px;
				width: 30px;
				position: relative;
				background-color: var(--brand-orange);
			}

			.menu-button span:before {
				content: "";
				position: absolute;
				top: -10px;
			}

			.menu-button span:after {
				content: "";
				position: absolute;
				top: 10px;
			}
		`}</style>
	</header>
);

export default memo(Header);
