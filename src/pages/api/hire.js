const nodemailer = require("nodemailer");
const axios = require("axios");
const MAX_FIELD_LENGTH = 1000;

export default async function handle(req, res) {
	// Ensure request is a POST request
	if (req.method !== "POST") {
		return res.status(405).json({
			status: 405,
			message: `Cannot ${req.method} this route`
		});
	}

	// Ensure all required fields are present
	const requiredFields = ["name", "email", "message", "g-recaptcha-response"];
	const invalid = requiredFields.some(field => req.body[field] === undefined);

	if (invalid) {
		return res.status(400).json({
			status: 400,
			message: "Required fields are missing"
		});
	}

	// Verify Google re-captcha
	const captchaCheck = await axios.post(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body["g-recaptcha-response"]}`
	);

	if (!captchaCheck.data.success) {
		return res.status(403).json({
			status: 403,
			message: "Spam detected"
		});
	}

	// Truncate body params for safety
	requiredFields.forEach(field => {
		req.body[field] = req.body[field].substr(0, MAX_FIELD_LENGTH);
	});

	// Send email
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "snakebyte.studios.dev@gmail.com",
			pass: process.env.EMAIL_PASS
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
		if (err) {
			// eslint-disable-next-line no-console
			console.error(err);
			return res.status(500).json({
				status: 500,
				message: "Internal Server Error"
			});
		} else {
			return res.end("Success!");
		}
	});
}
