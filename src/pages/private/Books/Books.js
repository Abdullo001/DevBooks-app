import HeroBanner from "../../../assets/images/hero.png";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { BookCard } from "../../../components/bookCard/BookCard";

export const BooksPage = () => {
  const [id, setId] = useState("1");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/${id}`)
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="home">
      <div className="container">
        <div className="home-hero">
          <img src={HeroBanner} alt="hero-poster" className="hero-img" />
          <div className="search">
            <h2 className="search-title rotterburg">Qidirish</h2>

            <form className="search-form">
              <input
                type={"search"}
                className="search-input"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <button type="submit" className="search-btn">
                <BiSearchAlt /> Izlash
              </button>
            </form>
          </div>
        </div>

        <div className="home-main">
          <h2 className="main-title rotterburg">Asosiy kategoriyalar</h2>

          <nav className="main-nav">
            <ul className="main-list">
              <li className="main-item">
                <NavLink
                  to={"/books"}
                  onClick={() => {
                    setId(1);
                  }}
                  className={"main-link"}
                >
                  Temuriylar davri
                </NavLink>
              </li>
              <li className="main-item">
                <NavLink
                  onClick={() => {
                    setId(2);
                  }}
                  to={"2"}
                  className={"main-link"}
                >
                  Jadid adabiyoti{" "}
                </NavLink>
              </li>
              <li className="main-item">
                <NavLink
                  to={"3"}
                  onClick={() => {
                    setId(3);
                  }}
                  className={"main-link"}
                >
                  Sovet davri
                </NavLink>
              </li>
              <li className="main-item">
                <NavLink
                  to={"4"}
                  onClick={() => {
                    setId(4);
                  }}
                  className={"main-link"}
                >
                  Mustaqillik davri
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="autors-box">
            <Routes>
              <Route
                index
               
                element={
                  <>
                    {books.length && (
                      <ul className="author-card">
                        {books.map((e) => {
                          return (
                            <li key={e.id} className="author-item">
                              <BookCard book={e} id={e.id} >
                                
                              </BookCard>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                }
              />
              <Route
                path="2"
                element={
                  <>
                    {books.length && (
                      <ul className="author-card">
                        {books.map((e) => {
                          return (
                            <li key={e.id} className="author-item">
                              <BookCard book={e} id={e.id} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                }
              />
              <Route
                path="3"
                element={
                  <>
                    {books.length && (
                      <ul className="author-card">
                        {books.map((e) => {
                          return (
                            <li key={e.id} className="author-item">
                              <BookCard book={e} id={e.id} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                }
              />
              <Route
                path="4"
                element={
                  <>
                    {books.length && (
                      <ul className="author-card">
                        {books.map((e) => {
                          return (
                            <li key={e.id} className="author-item">
                              <BookCard book={e} id={e.id} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
