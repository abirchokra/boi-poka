import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks]  = useState([]);
    useEffect(() => {
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
  
    return (
        <div className="mt-4">
            <h2 className="font-bold text-4xl text-center">Books</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 md:px-0">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;