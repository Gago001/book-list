import React, { useState, useMemo } from 'react';
import './book-list.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleBook, handleDelete } from './actions';

export default function Booklist() {
    const [newBook, setNewBook] = useState({ title: '', author: '', genre: '' });
    const [search, setSearch] = useState('');

    const books = useSelector((state) => state);
    const dispatch = useDispatch();

    const addBook = () => {
        const action = handleBook({ ...newBook, id: Date.now() });
        if (action) {
            dispatch(action);
            setNewBook({ title: '', author: '', genre: '' });
        }
    };

    const deleteBook = (id) => {
        const action = handleDelete(id);
        dispatch(action);
    };

    const filteredBooks = useMemo(() => {
        if (!search) return books;
        return books.filter(
            (book) =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, books]);

    const totalBooks = books.length;

    return (
        <div>
            <h1>Book List</h1>
            <div className="inputs">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search book by title or author"
                />
                <h2 style={{ width: '100%' }}>Add New Book</h2>
                <input
                    className="title-input"
                    type="text"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    placeholder="Title"
                />
                <input
                    className="author-input"
                    type="text"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    placeholder="Author"
                />
                <input
                    type="text"
                    value={newBook.genre}
                    onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                    placeholder="Genre"
                />
            </div>
            <button onClick={addBook}>Add Book</button>
            <div>
                <h2>Total Books: {totalBooks} </h2>
                <div className="box">
                    {filteredBooks.map((book, index) => (
                        <ul className="box-list" key={index}>
                            <li className="box-list-items">{`Title: ${book.title}`}</li>
                            <li className="box-list-items">{`Author: ${book.author}`}</li>
                            <li className="box-list-items">{`Genre: ${book.genre}`}</li>
                            <li>
                                <button onClick={() => deleteBook(book.id)} className="delete-button">
                                    Delete
                                </button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
