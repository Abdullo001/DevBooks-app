import { Header } from "../../components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import { SinglePageAuthor } from "./singlePage/singlePageAuthor";
import { SinglePageBook } from "./SinglePageBook/sp-book";
import { BooksPage } from "./Books/Books";
import { AddBook } from "./addBook/addBook";
import { SearchAuthor } from "./SearchAuthor/SearchAuthor";
import { AddAuthor } from "./addAuthor/addAuthor";

export const Private = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/books/*" element={<BooksPage/>} />
        <Route path="/addBook" element={<AddBook/>} />
        <Route path="/addAuthor" element={<AddAuthor/>} />
        <Route path="/search-author" element={<SearchAuthor/>} />
        <Route path="/author/:id" element={<SinglePageAuthor/>} />
        <Route path="/book/:id/*" element={<SinglePageBook/>} />
      </Routes>
    </>
  );
};
