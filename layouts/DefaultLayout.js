import { Component } from 'react';
import 'globals/styles/style.sass';

class DefaultLayout extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<main>
				<header>	
					<img src="https://placehold.it/100x50" />
					<div className="menu-button">
						<span></span>
					</div>
				</header>
					{this.props.children}
				<footer>
					<div className="copyright">
						© {(new Date()).getFullYear()} All rights reserved
					</div>
					<div className="social">
						<a
							href="https://www.instagram.com/snakebyte.studios/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</footer>

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
					}	

					.menu-button {
						padding: 10px 0;
						cursor: pointer;
					}

					.menu-button span,
					.menu-button span:before,
					.menu-button span:after {
						display: block;
						height: 5px;
						width: 30px;
						position: relative;
						background-color: black;
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

					footer {
						display: flex;
						justify-content: space-between;
						align-items: center;
						position: fixed;
						bottom: 0;
						left: 0;
						width: 100vw;	
						padding: 15px;
					}

					footer .social a {	
						padding: 5px;
						color: black;
					}

					footer .social i {
						font-size: 24px;
					}
				`}</style>
			</main>
		);
	}

}

export default DefaultLayout;
