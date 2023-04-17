// CSS
import "./Home.css";

// Hooks
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

// Components
import Wallet from "../../components/WalletCard/Wallet";

const Home = () => {
    const wallets = useFetch("/wallets");
    // console.log(wallets);

  return (
    <div className="homeContainer">
      <div className="searchContainer">
        <h1 className="searchTitle">Pesquisar ano</h1>
        <input type="number" name="search" id="search" placeholder="Ex:22" />
      </div>

      <div className="walletsContainer">
        <Wallet wallets={wallets}/>
      </div>

    </div>
  )
}

export default Home