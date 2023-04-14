// CSS
import "./Home.css";

// Hooks
import useFetch from "../../hooks/useFetch";

// Components
import Wallet from "../../components/WalletCard/Wallet";

const Home = () => {
    const walletsFetch = useFetch("/wallets");
    let wallets = [];
    // {walletsFetch.data && console.log(walletsFetch.data.response[0].name)}
    if(walletsFetch.data != undefined){
      // console.log(walletsFetch.data.response);
      
      for(let i = 0; i < walletsFetch.data.response.length; i++){
        wallets.push(walletsFetch.data.response[i]);
      }
    }
    

    // const wallets = walletsFetch.response;
    // console.log(wallets);

  return (
    <div className="homeContainer">
      <div className="searchContainer">
        <h1 className="searchTitle">Pesquisar ano</h1>
        <input type="number" name="search" id="search" placeholder="Ex:22" />
      </div>

      {wallets && wallets.map((wallet) => (
        <Wallet key={wallet._id} wallet={wallet}/>
      ))}

    </div>
  )
}

export default Home