// CSS
import "./Wallet.css";

const Wallet = ({ wallets }) => {
  // console.log(wallets);

  let walletNames = [];
  let wallet = []
  let walletTotalGainsAndExpenses = [];

  for(const prop in wallets){
    // console.log(`${prop}: ${wallets[prop]}`);
    // console.log(wallets[prop]);
    walletTotalGainsAndExpenses.push(Object.values(wallets[prop]));
    walletNames.push(prop);
  }

  const resultado = walletNames.map((name, i) => [name, walletTotalGainsAndExpenses[i]]);

  // console.log(walletNames);
  // console.log(walletTotalGainsAndExpenses);
  console.log(resultado);

  return (
    <>
      {resultado && resultado.map((e) => (
        <div className="walletContainer">
          <h3 className="walletName">{ e[0] }</h3>

          <div className="walletGains">
              <p className="gain">Ganhos totais: R$ { e[1][0].toFixed(2) }</p>
              <p className="gain">Gastos totais: R$ { e[1][1].toFixed(2) }</p>
              <p className="gain">Lucros totais: R$ { (e[1][0] - e[1][1]).toFixed(2) }</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Wallet