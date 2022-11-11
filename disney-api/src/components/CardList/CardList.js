import { Card } from "../Card/Card";
import "./CardList.css";

export function CardList({ allCharacters, setModal, oneCharacter }) {
  return (
    <div className="card-list">
      {allCharacters.map((item, index) => {
        return (
          <button
            key={index}
            className="btn-card"
            onClick={async () => {
              await oneCharacter(item);
              setModal();
            }}
          >
            <Card info={item} />
          </button>
        );
      })}
    </div>
  );
}
