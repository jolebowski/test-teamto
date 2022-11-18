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
        <img className="characterImg" src={imageUrl} alt={name} />
        <h3 className="title_list_item">{name}</h3>
      </div>
    </div>
  );
};

export default CardItem;
