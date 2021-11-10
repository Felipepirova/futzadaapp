import "../styles/home.scss"
import {CardList} from "../components/CardList" 

export function Home() {
  return (
    <div>
      <h1 className="title">Fut<span>zeiros</span></h1>
      <CardList/>
    </div>
  );
}