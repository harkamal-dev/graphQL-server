export const data = {
	books: [
		{ id: "1", title: "Book 1", publishedYear: 2023, authorId: "1" },
		{ id: "2", title: "Book 2", publishedYear: 2024, authorId: "2" },
		{ id: "3", title: "Book 3", publishedYear: 2024, authorId: "2" },
	],
	authors: [
		{
			id: "1",
			name: "Harkamal",
			books: ["1"],
		},
		{
			id: "2",
			name: "Harkamal Singh",
			books: ["2", "3"],
		},
	],
};