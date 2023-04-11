// CSS
import "./MainCard.css";

const MainCard = ({ title }) => {
  return (
    <div>
      <form action="" className="mainCardContainer mainCardStroke">
        <div className="fields">
          <header><h1 className="mainCardTitleBlue">LOGIN</h1></header>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="field">
            <p className="underscore">Não possui cadastro?</p>
          </div>
        </div>

        <div className="mainCardButton">
          <button type="submit">ENTRAR</button>
        </div>
      </form>
    </div>
  )
}

export default MainCard