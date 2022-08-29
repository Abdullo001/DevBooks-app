import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { BsArrowDown } from "react-icons/bs";
import { ImShare2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import bookImg from "../../../assets/images/book-frame.png";
import headphoneImg from "../../../assets/images/headphone-frame.png";
import phoneImg from "../../../assets/images/phone-frame.png";
import { BookCard } from "../../../components/bookCard/BookCard";
import Naqsh from "../../../assets/images/naqsh-aforizm.png"
import "./sp-book.scss"

export const SinglePageBook = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        setBook(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id,token]);

  useEffect(() => {
    book.author_id &&
      axios
        .get(
          `https://book-service-layer.herokuapp.com/author/authorId/${book.author_id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(function (response) {
          setAuthor(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [book.author_id,token]);

  useEffect(() => {
    book.author_id &&
      axios
        .get(
          `https://book-service-layer.herokuapp.com/book/genreId/${book.genre_id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(function (response) {
          setBooks(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [book.genre_id,token,book.author_id]);

  let ganre = "";

  switch (book.genre_id) {
    case 1:
      ganre = "Temuriylar davri";
      break;
    case 2:
      ganre = "Jadid adbiyoti";
      break;
    case 3:
      ganre = "Sovet davri";
      break;
    case 4:
      ganre = "Mustaqillik davri";
      break;

    default:
      ganre = "Topilmadi";
      break;
  }

  return (
    <div className="spb">
      <div className="container">
        <div className="spb-inner">
          <div className="spb-infoBox">
            <img src="https://via.placeholder.com/519x810" alt={book.title} />
            <div className="spb-info">
              <h2 className="spb-title rotterburg">{book.title}</h2>
              <span className="spb-authorName">{`${author.first_name} ${author.last_name}`}</span>
              <p className="spb-pages">
                Sahifalar soni: <span>{book.page}</span>
              </p>
              <p className="spb-data">
                Chop etilgan: <span>{book.year}</span>
              </p>
              <p className="spb-genre">
                Janri: <span>{ganre}</span>
              </p>
              <p className="spb-copy">
                Nashriyot: <span>Asaxiy books</span>
              </p>

              <h4 className="spb-subtitle">
                To'liq malumot <BsArrowDown />
                <span></span>
              </h4>

              <p className="spb-text">{book.description}</p>

              <span className="formats">Mavjud formatlar</span>

              <div className="types-box">
                <ul className="type-list">
                  <li className="type-item">
                    <img src={bookImg} alt="rasm" />
                    <span>Qog'oz kitob</span>
                    <span className="spb-price">$ {book.price}</span>
                  </li>
                  <li className="type-item">
                    <img src={headphoneImg} alt="rasm2" />
                    <span>Audio kitob</span>
                    <span className="spb-price"> 6:23 soat</span>
                  </li>
                  <li className="type-item">
                    <img src={phoneImg} alt="rasm3" />
                    <span>Elektron</span>
                    <span className="spb-price"> pdf, epub</span>
                  </li>

                  <li className="type-item">
                    <button>Javonga qo'shish</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="spb-blockquoteBox">
            <nav className="spb-navbar">
              <NavLink className={"spb-navLink"} to={"author"}>Muallif haqida</NavLink>
              <NavLink className={"spb-navLink"} to={"aforizm"}>Kitobdan iqtiboslar</NavLink>
              <NavLink className={"spb-navLink"} to={"minds"}>Kitobxonlar taqrizi</NavLink>
            </nav>

            <div className="spb-blockquoteCard">
              <blockquote className="blockquote-text">
                Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami
                bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam
                tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot
                to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi
                suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib
                keladi.
              </blockquote>

              <span className="blockquote-element">
                <AiFillHeart />
                <ImShare2 />
              </span>

              <img src={Naqsh} alt="naqsh" className="spb-bgImg" />
            </div>
          </div>

          <div className="spb-books-head ">
            <h4 className="spa-books-title ">Sizga yoqishi mumkin</h4>

            <Link to={"/books"} className={"spb-books-link"}>
              Barchasini ko'rish
            </Link>
          </div>

          <div className="spb-books-box">
            <ul className="spb-books-list">
              {books.length &&
                books.map((e) => {
                  return (
                    <li key={e.id} className="spb-books-item">
                      <BookCard id={e.id} book={e} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
