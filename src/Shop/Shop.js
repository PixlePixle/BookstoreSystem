import './Shop.css';
import Book from '../Book';
import Navigation from '../Navigation';
import { useState } from 'react';

export default function Shop() 
{
    const dummy_data = [
        {
            title : "The Great Gatsby",
            desc : "This is a book description temporary placeholder.",
            genre : "Young Adult",
            author : "F-Scott Fitzgerald",
            cover : "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg",
            rating : 4.3,
            price : 7.99,
            isbn: "000-000"
        },
        {
            title : "Invisible Man",
            desc : "This is a book description temporary placeholder.",
            author : "Ralph Ellison",
            genre : "Young Adult",
            cover : "https://s26162.pcdn.co/wp-content/uploads/2018/10/invisibleman-1509049531-640x996.jpg",
            rating : 4.5,
            price : 10.99,
            isbn: "000-001"
        },
        {
            title : "Fahrenheit 451",
            desc : "This is a book description temporary placeholder.",
            author : "Ray Bradbury",
            genre : "Young Adult",
            cover : "https://s26162.pcdn.co/wp-content/uploads/2021/10/lf-1-1.jpg",
            rating : 3.7,
            price : 11.99,
            isbn: "000-002"
        },
        {
            title : "To Kill a Mockingbird",
            desc : "This is a book description temporary placeholder.",
            author : "Harper Lee",
            genre : "Young Adult",
            cover : "https://s26162.pcdn.co/wp-content/uploads/2021/10/To_Kill_a_Mockingbird_first_edition_cover.jpg",
            rating : 4.2,
            price : 12.99,
            isbn: "000-003"
        },
        {
            title : "Kindred",
            desc : "This is a book description temporary placeholder.",
            author : "Ocatvia E. Butler",
            genre : "Young Adult",
            cover : "https://m.media-amazon.com/images/I/91pIF5zxBVL._AC_UF1000,1000_QL80_.jpg",
            rating : 4.6,
            price : 17.99,
            isbn: "000-004"
        },
        {
            title : "Five Survive",
            desc : "This is a book description temporary placeholder.",
            author : "Holly Jackson",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9780593374160.jpg",
            rating : 4.1,
            price : 12.99,
            isbn: "000-005"
        },
        {
            title : "Solitaire",
            desc : "This is a book description temporary placeholder.",
            author : "Alice Oseman",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9781339016238.jpg",
            rating : 4.3,
            price : 11.99,
            isbn: "000-006"
        },
        {
            title : "Divine Rivals",
            desc : "This is a book description temporary placeholder.",
            author : "Rebecca Ross",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9781250857439.jpg",
            rating : 4.7,
            price : 17.99,
            isbn: "000-007"
        },
        {
            title : "The first to Die at the End",
            desc : "This is a book description temporary placeholder.",
            author : "Adam Silvera",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9780063240803.jpg",
            rating : 4.4,
            price : 10.99,
            isbn: "000-008"
        },
        {
            title : "Lightlark",
            desc : "This is a book description temporary placeholder.",
            author : "Alex Aster",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9781419760860.jpg",
            rating : 3.9,
            price : 15.99,
            isbn: "000-009"
        },
        {
            title : "Warrior Girl Unearthed",
            desc : "This is a book description temporary placeholder.",
            author : "Angeline Boulley",
            genre : "Young Adult",
            cover : "https://storage.googleapis.com/du-prd/books/images/9781250766588.jpg",
            rating : 4.6,
            price : 14.99,
            isbn: "000-010"
        }
    ]

    const [books, setBooks] = useState(dummy_data.sort((a,b) => a.title.localeCompare(b.title)));
    const [sortState, setSortState] = useState("title_s");
    const [checkState, setCheckState] = useState("title");

    const sortResult = (e) => {
        setSortState(e);
        if (e === "title_s"){
            setBooks(books.sort((a,b) => a.title.localeCompare(b.title)));
        }
        
        if (e === "priceh") {
            setBooks(books.sort((a, b) => b.price-a.price));
        }
        
        if (e === "pricel") {
            setBooks(books.sort((a, b) => a.price-b.price));
        }
    }

    const handleSearch = (e) => {
        var temp = null;
        if (checkState === "title"){
            temp = dummy_data.filter((el) => el.title.toLowerCase().includes(e.target.value.toLowerCase()));
        }

        if (checkState === "author"){
            temp = dummy_data.filter((el) => el.author.toLowerCase().includes(e.target.value.toLowerCase()));
        }

        if (checkState === "genre"){
            temp = dummy_data.filter((el) => el.genre.toLowerCase().includes(e.target.value.toLowerCase()));
        }

        // Sort by
        if (sortState === "title_s"){
            temp = temp.sort((a,b) => a.title.localeCompare(b.title));
        }
        
        if (sortState === "priceh") {
            temp = temp.sort((a, b) => b.price-a.price);
        }
        
        if (sortState === "pricel") {
            temp = temp.sort((a, b) => a.price-b.price);
        }

        setBooks(temp);
    }

    return (<>
    <Navigation />
    <div className='search-container'>
        <input className='searchbar' type='text' placeholder='Search' onChange={handleSearch}></input>

        <div className='search-criteria'>
            <h3>Search by:</h3>
            <input type="radio" id="title" name="title" checked={checkState === "title"} onClick={(e) => setCheckState(e.target.id)}/>
            <label htmlFor="title">Title</label>
            <input type="radio" id="author" name="author" checked={checkState === "author"} onClick={(e) => setCheckState(e.target.id)}/>
            <label htmlFor="author">Author</label>
            <input type="radio" id="genre" name="genre" checked={checkState === "genre"} onClick={(e) => setCheckState(e.target.id)}/>
            <label htmlFor="genre">Genre</label>


            <h3>Sort by:</h3>
            <input type="radio" id="title_s" name="sort" checked={sortState === "title_s"} onClick={(e) => sortResult(e.target.id)}/>
            <label htmlFor="title_s">Title (a-z)</label>
            <input type="radio" id="priceh" name="sort" checked={sortState === "priceh"} onClick={(e) => sortResult(e.target.id)}/>
            <label htmlFor="priceh">Price (high-low)</label>
            <input type="radio" id="pricel" name="sort" checked={sortState === "pricel"} onClick={(e) => sortResult(e.target.id)}/>
            <label htmlFor="pricel">Price (low-high)</label>
        </div>
    </div>

    <div className='shop-display'>
        {books.map((book, k)=>
        <Book key={k}
            title={book.title}
            author={book.author}
            cover={book.cover}
            rating={book.rating}
            price={book.price}
            isbn={book.isbn}
            desc={book.desc}
            genre={book.genre}
        />
    )}</div>
    </>);
}

