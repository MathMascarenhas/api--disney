import { getAllCharacters } from "../utils/api/api";
import { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { CardList } from "../components/CardList/CardList";
import "./Home.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    display: "flex",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
};
Modal.setAppElement("#root");

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [singleCharacter, setSingleCharacter] = useState({
    _id: 308,
    films: ["Tangled", "Tangled: Before Ever After"],
    shortFilms: ["Tangled Ever After", "Hare Peace"],
    tvShows: ["Once Upon a Time", "Tangled: The Series"],
    videoGames: [
      "Disney Princess Enchanting Storybooks",
      "Hidden Worlds",
      "Disney Crossy Road",
      "Kingdom Hearts III",
    ],
    parkAttractions: ["Celebrate the Magic", "Jingle Bell, Jingle BAM!"],
    allies: [],
    enemies: [],
    name: "Queen Arianna",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg",
    url: "https://api.disneyapi.dev/characters/308",
  });

  async function getAll() {
    const response = await getAllCharacters();
    setCharacters(response);
  }

  useEffect(() => {
    getAll();
    console.log("rodou");
  }, []);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="home">
        <Header setSearch={setSearchText} />
        <CardList
          allCharacters={characters.filter((character) =>
            character.name.toLowerCase().includes(searchText)
          )}
          setModal={handleModal}
          oneCharacter={setSingleCharacter}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card information"
      >
        <div className="modal">
          <img
            className="img-modal"
            src={singleCharacter.imageUrl}
            alt={`${singleCharacter.name} imagem`}
          ></img>
          <div className="modal-infos">
            <h2 className="title-modal">{singleCharacter.name}</h2>
            <div className="sub-info-modal">
              <h3 className="subhead-modal">
                Filmes:
                {singleCharacter.films.length
                  ? singleCharacter.films.join(", ")
                  : "Este personagem não esteve em um filme"}
              </h3>
              <h3 className="subhead-modal">
                Curtas:
                {singleCharacter.shortFilms.length
                  ? singleCharacter.shortFilms.join(", ")
                  : "Este personagem não esteve em um curta"}
              </h3>
              <h3 className="subhead-modal">
                Programas de TV:
                {singleCharacter.tvShows.length
                  ? singleCharacter.tvShows.join(", ")
                  : "Este personagem não esteve em um programa de TV"}
              </h3>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
