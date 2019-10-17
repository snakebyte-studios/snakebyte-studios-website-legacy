const nodemailer = require("nodemailer");
const secret = require("../../secret.json");
const MAX_FIELD_LENGTH = 1000;

export default function handle(req, res) {
	// Ensure request is a POST request
	if (req.method !== "POST") {
		return res.status(405).json({
			status: 405,
			message: `Cannot ${req.method} this route`
		});
	}

	// Ensure all required fields are present
	const requiredFields = ["name", "email", "message"];
	const invalid = requiredFields.some(field => req.body[field] === undefined);

	if (invalid) {
		return res.status(400).json({
			status: 400,
			message: "Invalid body"
		});
	}

	// TODO: Ensure all requests come from the same domain as this route

	// Truncate all body params for safety
	requiredFields.forEach(field => {
		req.body[field] = req.body[field].substr(0, MAX_FIELD_LENGTH);
	});

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "snakebyte.studios.dev@gmail.com",
			pass: secret.emailPassword
		}
	});

	const mailOptions = {
		from: `${req.body.name} <${req.body.email}>`,
		to: "info@snakebyte.ca",
		subject: `Contact form submission from ${req.body.name}`,
		html: `
			<p>[Name]: ${req.body.name}</p>
			<p>[Email]: ${req.body.email}</p>
			<p>[Message]: ${req.body.message}</p>
		`
	};

	transporter.sendMail(mailOptions, function(err) {
		// eslint-disable-next-line no-console
		if (err) console.error(err);
	});

	res.end("Success!");
}
