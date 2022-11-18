import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../store/character/character.types";
import { api } from "../../Api/api";
import "./character.styles.css";

type CharacterParams = {
  id: string;
};

const CharacterPage = () => {
  const [data, setData] = useState<Character>();

  const { id } = useParams<CharacterParams>();

  useEffect(() => {
    const getCharacterData = async () => {
      try {
        const response = await api.get(`/people/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCharacterData();
  }, [id]);

  return (
    <div className="character-container">
      <div className="character-margin-auto">
        <div className="card-description">
          <div className="text-description">
            <h1>Name : {data?.name}</h1>
          </div>
          <div className="text-description">
            <h2>Eye color : {data?.eye_color}</h2>
          </div>
          <div className="text-description">
            <h3>Haire color : {data?.hair_color}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterPage;
