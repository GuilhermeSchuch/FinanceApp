// CSS
import "./Wallet.css";

const Wallet = ({ wallet }) => {
  return (
    <div className="walletContainer">
        <h3 className="walletName">{ wallet.name }</h3>

        <div className="walletGains">
            <p className="gain">Ganhos totais: R$ { wallet.totalGains }</p>

            <p className="gain">Gastos totais: R$ { wallet.totalExpenses }</p>

            <p className="gain">Lucros totais: R$ { wallet.totalGains - wallet.totalExpenses }</p>
        </div>
    </div>
  )
}

export default Wallet