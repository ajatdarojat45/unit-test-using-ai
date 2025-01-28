const users = [
	{
		id: 1,
		name: "John Doe",
		email: "john@mail.com",
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "jane@mail.com",
	},
	{
		id: 3,
		name: "Udin",
		email: "udin@mail.com",
	},
];

class User {
	static create(data) {
		users.push({
			id: users.length + 1,
			...data,
		});
		return data;
	}

	static findId(id) {
		return users.find((user) => user.id === id);
	}

	static findAll() {
		return users;
	}

	static update(id, data) {
		const index = users.findIndex((user) => user.id === id);
		users[index] = {
			...users[index],
			...data,
		};
		return users[index];
	}

	static delete(id) {
		const index = users.findIndex((user) => user.id === id);
		users.splice(index, 1);

		return { message: "User deleted" };
	}
}

module.exports = User;
