import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [readList, setReaddList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReaddList(readBookList);
    }, [])
    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === 'Number of pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReaddList(sortedReadList);

        }

    }

    return (
        <div>
            <h3 className='text-3xl my-8'>Listed books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort By: ${sort}` : 'Sort By'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('Number of pages')}><a>Number of Pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    <div className='grid md:grid-cols-3 gap-3'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;