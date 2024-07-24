import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./card.jsx";

export default function Home() {
 const fetchData = async () => {
   try {
     const response = await fetch("https://bored-api.appbrewery.com/random");
     if (!response.ok) {
       throw new Error("Failed to fetch data");
     }

     const data = await response.json();
     console.log(data);
     return data;
   } catch (error) {
     console.error(error);
   }
 };

 fetchData();

    return (
    <div>
      <nav>
        <h2>Title</h2>
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
      </nav>
      <Card />
      <button onClick={fetchData}>hi{fetchData}</button>
    </div>
  );
}
