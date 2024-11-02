import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToDb";

const BookDetail = () => {
    const { bookId } = useParams();
    // parseInt kore bookId string theke number convert kora hoise.
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book
    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }
    const handleWishList = (id) => {
        addToStoredWishList(id);
    }
    return (
        <div className="md:flex gap-4 my-6 ml-[40px] md:ml-0">
            <div className="w-[50%] items-center flex flex-col bg-blue-200  rounded-lg">
                <img className="rounded-lg w-[600px] p-4" src={image} alt="" />
            </div>
            <div className="space-y-3 w-[50%]">
                <h2 className="font-bold text-4xl">{bookName}</h2>
                <p className="text-gray-500">By: {author}</p>
                <div className='divider '></div>
                <p className="text-gray-500">{category}</p>
                <div className='divider '></div>
                <p><span className="font-bold">Review: </span>
                    {review}

                </p>
                <p className="flex gap-3 space-x-6">
                    <span className="font-bold">Tag</span>
                    <span className="text-green-500">{tags}</span>

                </p>

                <div className='divider'></div>
                <p><span className="font-bold">Number of pages:</span> {totalPages}</p>
                <p><span className="font-bold">Publisher:</span> {publisher}</p>
                <p><span className="font-bold">Year of Publishing:</span> {yearOfPublishing}</p>
                <p><span className="font-bold">Rating:</span> {rating}</p>
                <div className="md:flex gap-4">
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline  btn-accent">Read</button>
                    <button onClick={() => handleWishList(bookId)} className="btn btn-active btn-accent">Wishlist</button>

                </div>

            </div>
        </div>
    );
};

export default BookDetail;