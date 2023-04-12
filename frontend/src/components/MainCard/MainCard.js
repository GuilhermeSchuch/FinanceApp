// CSS
import "./MainCard.css";

import { Link } from "react-router-dom";

const MainCard = ({ title }) => {
  return (
    <div>
      <form action="" className="mainCardContainer mainCardStroke">
        <div className="fields">
          <header><h1 className="mainCardTitleBlue">{ title }</h1></header>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </div>

          { title == "REGISTRAR-SE" ? (
            <>
              <div className="field">
                <label htmlFor="confirmpassword">Confirme sua senha</label>
                <input type="password" name="confirmpassword" id="confirmpassword" />
              </div>

              <div className="field">
                <p className="underscore"><Link to="/login">Já possui cadastro?</Link></p>
              </div>
            </>
          ) : (
            <>
              <div className="field">
                <p className="underscore"><Link to="/register">Não possui cadastro?</Link></p>
              </div>
            </>
          )}

        </div>

        {title === "REGISTRAR-SE" ? (
          <div className="mainCardButton">
            <button type="submit">CADASTRAR</button>
          </div>
        ) : (
          <>
            <div className="mainCardButton">
              <button type="submit">ENTRAR</button>
            </div>
          </>
        )}
        
      </form>
    </div>
  )
}

export default MainCard