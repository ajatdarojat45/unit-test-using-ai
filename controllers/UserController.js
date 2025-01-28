const User = require("../models/User");

class UserController {
	static create(req, res) {
		const { name, email } = req.body;

		if (!name || name === "") {
			return res.status(400).json({ message: "Name is required" });
		}

		if (!email || email === "") {
			return res.status(400).json({ message: "Email is required" });
		}

		const user = User.create({ name, email });
		return res.status(201).json(user);
	}

	static findAll(req, res) {
		const users = User.findAll();
		return res.json(users);
	}

	static findId(req, res) {
		const user = User.findId(parseInt(req.params.id));

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.json(user);
	}

	static update(req, res) {
		const { name, email } = req.body;

		if (!name || name === "") {
			return res.status(400).json({ message: "Name is required" });
		}

		if (!email || email === "") {
			return res.status(400).json({ message: "Email is required" });
		}

		const user = User.findId(parseInt(req.params.id));
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const updatedUser = User.update(parseInt(req.params.id), { name, email });
		return res.json(updatedUser);
	}

	static delete(req, res) {
		const user = User.findId(parseInt(req.params.id));
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const message = User.delete(parseInt(req.params.id));
		return res.json(message);
	}
}

module.exports = UserController;
