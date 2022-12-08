import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import CardItem from "../../components/card-item/Card-item.component";
import SearchBox from "../../components/search-box/search-box";
import { api } from "../../Api/api";
import { setCharacter } from "../../store/character/character.action";
import { selectCharacter } from "../../store/character/character.selector";
import "./home.styles.css";

const Home = () => {
  const characters = useSelector(selectCharacter);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inputSearch, setInputSearch] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`people/?page=${1}`);
      const returnedData = await response.data;

      dispatch(setCharacter(returnedData.results));
      setIsLoading(false);
    };
    setIsLoading(true);
    getData();
  }, []);

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await api.get(`people/?search=${inputSearch}`);

      const returnedData = await response.data;

      dispatch(setCharacter(returnedData.results));
      setIsLoading(false);
    };
    setIsLoading(true);
    getFilteredData();
  }, [inputSearch]);

  const getUrlId = (url: string) => {
    const splitedUrl = url.split("/");
    const characterId = splitedUrl[splitedUrl.length - 2];
    return characterId;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value.toLocaleUpperCase("fr-FR"));
  };

  return (
    <>
      <div className="search-box-container">
        <SearchBox onChangeHandler={handleChange} />
      </div>

      <div className="charactersList">
        {isLoading ? (
          <div className="loading">
            <span style={{ color: "#ffe81f" }}>Chargement en cours...</span>
          </div>
        ) : (
          characters.character.map((character) => {
            const { url, name } = character;
            return (
              <CardItem
                imageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                  url
                )}.jpg`}
                name={name}
                key={name}
                id={getUrlId(url)}
                type="characters"
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
