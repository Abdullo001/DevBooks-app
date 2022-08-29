import { Link } from "react-router-dom";
import "./BookCard.scss";


export const BookCard = ({ id, book,children }) => {
  return (
    <Link to={`/book/${id}`} className={"bookCard"}>
      <img
        src={`https://book-service-layer.herokuapp.com/${book.image}`}
        alt={book.title}
        className={"bookCard-img"}
        width={164}
        height={246}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
          "https://via.placeholder.com/164x246";
        }}
      />
      <div className="bookCard-info">
        <h3 className="bookCard-title rotterburg">{`${book.title}`}</h3>

        {children}
      </div>
    </Link>
  );
};
