import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, newPlayerName);
    }
  };

  const handleEditName = (e) => {
    setNewPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              required
              value={newPlayerName}
              onChange={handleEditName}
            />
          </>
        ) : (
          <>
            <span className="player-name">{newPlayerName}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
