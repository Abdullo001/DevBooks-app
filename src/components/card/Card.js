import { Link } from "react-router-dom";
import "./Card.scss";

import naqsh from "../../assets/images/naqsh.png"
import naqshKichik from "../../assets/images/naqsh-kichik.png"

export const Card = ({ id, author }) => {
  return (
    <Link to={`/author/${id}`} className={"card"}>
      <img
        src={`https://book-service-layer.herokuapp.com/${author.image}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
          "https://via.placeholder.com/173x132";
        }}
        alt={author.first_name}
        className={"card-img"}
      />
      <div className="card-info">
        <h3 className="card-title">{`${author.first_name} ${author.last_name}`}</h3>
        <span className="author-bith">
          {`${author.date_of_birth}-${author.date_of_death}`}
        </span>
        <img className="card-bgimg" src={naqsh} alt="naqsh" />
        <img className="card-bgimgLittle" src={naqshKichik} alt="naqsh" />
      </div>
    </Link>
  );
};
