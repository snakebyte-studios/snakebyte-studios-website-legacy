import Link from "components/ActiveLink.js";

const Navigation = ({ showHomeLink, tabbable }) => {
	const links = [
		{
			name: "Home",
			href: "/",
			visible: showHomeLink
		},
		{
			name: "Team",
			href: "/team",
			visible: true
		},
		{
			name: "Designs",
			href: "/designs",
			visible: true
		},
		{
			name: "Blog",
			href: "/blog",
			visible: false
		},
		{
			name: "Hire Us",
			href: "/hire",
			visible: true
		}
	];

	return (
		<nav>
			{links.map(
				link =>
					link.visible && (
						<Link href={link.href} key={link.href}>
							<a tabIndex={tabbable ? "0" : "-1"}>{link.name}</a>
						</Link>
					)
			)}
		</nav>
	);
};

export default Navigation;
