import { PureComponent } from "react";
import Link from "next/link";

class Navigation extends PureComponent {
	render() {
		return (
			<nav>
				<Link href="/team">
					<a>Team</a>
				</Link>
				<Link href="/portfolio">
					<a>Portfolio</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</nav>
		);
	}
}

export default Navigation;
