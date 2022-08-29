import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./singlePageAuthor.scss";
import { BookCard } from "../../../components/bookCard/BookCard";

export const SinglePageAuthor = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const [singleAuthor, setSingleAuthor] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        setSingleAuthor(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id,token]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/books/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id,token]);

  return (
    <>
      {singleAuthor.last_name && (
        <div className="singlePageAuthor">
          <div className="container">
            {/* spa==>singlePageAuthor */}
            <div className="spa-inner">
              <div className="spa-leftBox">
                <img
                  src={`https://book-service-layer.herokuapp.com/${singleAuthor.image}`}
                  alt={singleAuthor.first_name}
                  width={582}
                  height={779}
                  className="spa-authorImg"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://via.placeholder.com/582x779";
                  }}
                />
                <p className="spa-data rotterburg">
                  <span className=" spa-data-brith ">
                    {singleAuthor.date_of_birth}
                  </span>{" "}
                  -{" "}
                  <span className=" spa-data-death ">
                    {singleAuthor.date_of_death}
                  </span>
                </p>
              </div>

              <div className="spa-rightBox">
                <h2 className="spa-title rotterburg">
                  {`${singleAuthor.first_name} ${singleAuthor.last_name}`}
                </h2>

                <p className="spa-text">{singleAuthor.bio}</p>

                <h3 className="spa-subtitle rotterburg">
                  <BsFillBookmarkFill /> Ijodi
                </h3>

                <div className="spa-subtext-box">
                  <p className="spa-subtext">
                    Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
                    ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
                    muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                    qaytmaydi“ qissasi boʻldi.
                  </p>
                </div>

                <div className="spa-books-head">
                  <h4 className="spa-books-title rotterburg">Asarlari</h4>

                  <Link to={"/books"} className={"spa-books-link"}>
                    Barchasini ko'rish
                  </Link>
                </div>

                <div className="spa-books-box">
                  <ul className="spa-books-list">
                    {books.length &&
                      books.map((e) => {
                        return (
                          <li key={e.id} className="spa-books-item">
                            <BookCard id={e.id} book={e} />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
