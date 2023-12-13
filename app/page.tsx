import Image from "next/image";
import Recipes from "./Recipes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Recipes />
      {/* <Footer/> */}
    </main>
  );
}
