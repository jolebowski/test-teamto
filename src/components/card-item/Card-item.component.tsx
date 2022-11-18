import { Link } from "react-router-dom";

import "./card-item.styles.css";

type CardItemProps = {
  imageUrl: string;
  name: string;
  id: string;
  type: "characters";
};

const CardItem = ({ id, imageUrl, name, type }: CardItemProps) => {
  return (
    <div>
      <div className="characterCard">
        <Link to={`/${type}/${id}`}>
          <img className="characterImg" src={imageUrl} alt={name} />
        </Link>
        <h3 className="title_list_item">{name}</h3>
      </div>
    </div>
  );
};

export default CardItem;
