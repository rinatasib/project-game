import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Pluses } from "./components/Pluses/Pluses";


export function App() {
  return (
   <div className="layout">
    <Header/>
    <Banner/>
    <Pluses/>
    <Footer/>
   </div>
  );
}


