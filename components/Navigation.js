import Link from "components/ActiveLink.js";

const Navigation = ({ showHomeLink }) => (
	<nav>
		{showHomeLink && (
			<Link href="/">
				<a>Home</a>
			</Link>
		)}
		<Link href="/team">
			<a>Team</a>
		</Link>
		<Link href="/portfolio">
			<a>Portfolio</a>
		</Link>
		<Link href="/blog">
			<a>Blog</a>
		</Link>
		<Link href="/hire">
			<a>Hire Us</a>
		</Link>
	</nav>
);

export default Navigation;
