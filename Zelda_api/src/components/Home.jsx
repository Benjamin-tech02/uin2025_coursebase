import { useState } from "react";
import "../assets/styles/layout.scss";
import GameCard from "./GameCard";
import "../assets/styles/layout.scss"
import { useState } from "react";

export default function Home({ games }) {
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async()=>{
    fetch(`https:/zelda.fanpasis.com/api/games?name=${search}`)
    .then((Response) => console.log(Response))
  }
  return (
    <main>
      <h1>Forside</h1>;
      <form onSubmit={handleSubmit}>
        <label htmlFor="sea">Her kan du søke etter spill</label>
        <input type="search" id="search" onChange={handleChange} />
        <button onClick={handleClick}>Søk etter spill</button>
      </form>
      <section className="føex-section">
        {games?.map((game) => (
        <GameCard key={game.id} game={game} />
        ))}
import SearchForm from "./SearchForm";

export default function Home({ games, setGames }) {
  const [search, setSearch] = useState();

  const handleClick = async () => {
    fetch(`https://zelda.fanapis.com/api/games?name=${search}`)
      .then((response) => response.json())
      .then((data) => setGames(data.data))
      .catch((error) =>
        console.error("Skjedde noe feil ved fetch av søk", error)
      );
  };
  return (
    <main>
      <h1>Forside</h1>
      <SearchForm setSearch={setSearch} handleClick={handleClick} />

      <section className="flex-section">
        {games?.length > 0 ? (
          games?.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>Finner ikke noe på søket ditt</p>
        )}
      </section>
    </main>
  );
}
