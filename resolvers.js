import { uuid } from "uuidv4";
import { data } from "./constants.js";

export const resolvers = {
	Book: {
		author: (parent) => {
			return data.authors.find((author) => author.id === parent.authorId);
		},
	},
	Author: {
		books: (parent) => {
			return data.books.filter((book) => parent.books.includes(book.id));
		},
	},
	Query: {
		authors: () => {
			return data.authors;
		},
		books: () => {
			return data.books;
		},
	},
	Mutation: {
		addBook: (parent, args, context, info) => {
			let newBook = { ...args, id: uuid() };
			data.books.push(newBook);
			return newBook;
		},
	},
};
