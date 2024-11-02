import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, totalPages, image, bookName, author, category, tags, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="my-4 card bg-base-100 w-96 shadow-xl border border-gray-300 p-4 space-y-2 mt-4 ">
                <figure className='bg-blue-200 py-8 border border-gray-100 rounded-2xl'>
                    <img className='h-[166px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <h2>{totalPages}</h2>
                <div className="card-body">
                    <div className='flex gap-2 items-center'>
                        {
                            tags.map((tag, index) => <button key={index} className='btn btn-xs text-green-500'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-bold">
                        {bookName}

                    </h2>
                    <p>By: {author}</p>
                    <div className='divider '></div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold">{category}</div>
                        <div className='flex gap-2 items-center'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>{rating}</div>
                        </div>
                    </div>
                </div>
            </div>

        </Link>


    );
};

export default Book;