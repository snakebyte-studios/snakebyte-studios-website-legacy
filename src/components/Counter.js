import { useState } from "react";

let blogContent = [
	{
		id: 0,
		title: "something",
		author: "Daryl Pintooo",
		content: "this is the body paragprah.."
	},
	{
		id: 1,
		title: "something to do",
		author: "He-man",
		content: "he-man is a sea-man"
	},
	{
		id: 2,
		title: "something to see ",
		author: "Baby Yoda",
		content: "study state you must"
	},
	{
		id: 3,
		title: "something somewhere",
		author: "NerdBoi",
		content:
			"Can tell you the difference between AMD and INTEL's new CPU off the cuff"
	},
	{
		id: 4,
		title: "something all along",
		author: "Chad Chaderson",
		content: "Has slept with step-sister"
	}
];

function Counter() {
	const [selectedPostId, setSelectedPostId] = useState(0);

	let activePost = blogContent.find(r => r.id == selectedPostId);

	return (
		<div className="counter">
			<ul>
				{blogContent.map(blogPost => (
					<li>
						<h2 onClick={() => setSelectedPostId(blogPost.id)}>
							{blogPost.title}
						</h2>
					</li>
				))}
			</ul>
			<hr style={{ border: "1px solid black" }} />
			<hr style={{ border: "1px solid black" }} />
			<hr style={{ border: "1px solid black" }} />

			<section>
				<h1>{activePost.title}</h1>
				<p>{activePost.content}</p>
				<span>{activePost.author}</span>
			</section>
			<style jsx>{`
				.counter {
					position: fixed;
					top: 30px;
					right: 30px;
					background-color: orange;
					z-index: 100;
					padding: 100px;
				}

				.counter p {
					color: black;
				}
			`}</style>
		</div>
	);
}

export default Counter;
