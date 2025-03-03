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
      </section>
    </main>
  );
}
