import "./style.css"

export const Header = ({setInitialPage}) => {
    
    return (

        <header className="headerContainer">
            <h1 className="corporationName"><span>Nu </span>Kenzie</h1>
            <button type="submit" onClick={() => setInitialPage('Início')}>Início</button>
        </header>
    )
}