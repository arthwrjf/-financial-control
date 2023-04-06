import './style.css'
import Illustration from '../../img/Illustration.svg'

export const HomePage = ({setInitialPage}) => {

    return (
        <body className='bodyHomePage'>
            <div className='information__site'>
                <h1 className='corporation__name'><span>Nu </span> Kenzie</h1>
                <h3>Centralize o controle das suas finanças</h3>
                <p>de forma rápida e segura</p>
                <button type='submit' onClick={() => setInitialPage('dashboard')}>Iniciar</button>
            </div>
            <img className='imgHome' src={Illustration} alt="" />
        </body>
    )
}