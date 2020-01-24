// https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59#gistcomment-2393414

import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = withRouter(({ router, children, ...props }) => (
	<Link {...props}>
		{React.cloneElement(Children.only(children), {
			className: router.pathname === props.href ? "active" : null
		})}
	</Link>
));

export default withRouter(ActiveLink);
