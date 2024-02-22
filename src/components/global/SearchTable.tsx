// Modules
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

// Icons
import search from "../../icons/search.svg";

// Types
import { PlayersData } from "../../types/players";

// Helpers
import { getTeam } from "../../helpers/apiRequests";
import { highlightColor } from "../../helpers/otherVariables";

const SearchTable = () => {
  // Inner Types
  type searchItemType = [string, React.Dispatch<React.SetStateAction<string>>];

  const [playerData, setPlayerData]: [
    PlayersData[],
    React.Dispatch<PlayersData[]>
  ] = useState([
    {
      id: -1,
      title: "",
      national: 0,
      img: "",
      name: "",
      birthday: -1,
      classic: -1,
      rapid: -1,
      blitz: -1,
    },
  ]);

  useEffect(() => {
    getTeam(setPlayerData);
  }, []);

  const [searchItem, setSearchItem]: searchItemType = useState("$#@");

  return (
    <div className="search-table">
      <form className="search-field" onSubmit={(e) => e.preventDefault()}>
        <input
          disabled={playerData[0].id === -1 ? true : false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (playerData) {
              if (e.target.value.length === 0) {
                setSearchItem("$#@");
              } else {
                setSearchItem(e.target.value);
              }
            }
          }}
          type="text"
          placeholder="Введите имя ID игрока"
        />
        {/* <button type="button" className="search-button">
          Поиск
        </button> */}
        <div className="loop">
          <img src={search} alt="" />
        </div>
      </form>
      <div className="search-table-wrapper">
        <table className="search">
          <tbody>
            <tr className="table-header">
              <th>№</th>
              <th>ID</th>
              <th>Титул игрока</th>
              <th>Имя</th>
              <th>Год рождения</th>
              <th>Классика</th>
              <th>Рапид</th>
              <th>Блиц</th>
            </tr>
            {playerData[0].id !== -1
              ? playerData.map((player, i) => {
                  if (searchItem === "$#@") {
                    return (
                      <tr key={uuidv4()} className="search-tr">
                        {/* N_o */}
                        <td>{i + 1}</td>
                        <td>{player.id}</td>
                        <td>{player.title}</td>
                        <td>{player.name}</td>
                        <td>{player.birthday}</td>
                        <td>{player.classic}</td>
                        <td>{player.rapid}</td>
                        <td>{player.blitz}</td>
                      </tr>
                    );
                  } else {
                    if (
                      Object.values(player)
                        .toString()
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return (
                        <tr key={uuidv4()} className="search-tr">
                          {/* N_o */}
                          <td>{i + 1}</td>
                          <td>{player.id}</td>
                          <td>{player.title}</td>
                          <td>{player.name}</td>
                          <td>{player.birthday}</td>
                          <td>{player.classic}</td>
                          <td>{player.rapid}</td>
                          <td>{player.blitz}</td>
                        </tr>
                      );
                    } else {
                      return "";
                    }
                  }
                })
              : ["", "", "", ""].map(() => (
                  <tr className="table-skeleton" key={uuidv4()}>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                    <td>
                      <Skeleton
                        highlightColor={highlightColor}
                        width={"100%"}
                        height={"3rem"}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchTable;
