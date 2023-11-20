import { Link } from "react-router-dom"
import ControleXbox from '../../../public/img/controle.png';
import './home.css'
import './jogos.css'
import './footer.css'
import Minecraft from '../../../public/img/minecraft.png'
import Fifa from '../../../public/img/fifa.png'
import Farcry from '../../../public/img/farcry6.png'
import Forza from '../../../public/img/forzahorizon.png'

export default function Home() {
    return (
        <main>
            <section className="main-content">
                <div className='content'>
                    <h2><span>Desempenho</span> <br />Aperfeiçoado</h2>
                    <p>O controle do Xbox sem fio é um dispositivo de entrada ergonômico e confortável, projetado para uso com os consoles Xbox da Microsoft. Possui alavancas analógicas, botões de ação, conectividade sem fio de longo alcance e opção de uso com pilhas ou bateria recarregável. É essencial para uma experiência de jogo imersiva e conveniente nos consoles Xbox.</p>
                </div>
                <figure>
                    <img src={ControleXbox} alt="Imagem do controle do Xbox" />
                </figure>
            </section>

            <section className='jogos'>
                <div className="mc">
                    <img src={Minecraft} alt="Capa do jogo do Minecraft" />
                </div>

                <div className="ff">
                    <img src={Fifa} alt="Capa do jogo do Fifa" />
                </div>

                <div className="fc6">
                    <img src={Farcry} alt="Capa do jogo Farcry 6" />
                </div>

                <div className="forz">
                    <img src={Forza} alt="Capa do Jogo forza horizon" />
                </div>
            </section>

            <footer className='footer'>
                <div className="links">
                    <h4>Browse</h4>
                    <ul>
                        <li><Link to='/'>Xbox consoles</Link></li>
                        <li><Link to='/'>Xbox games</Link></li>
                        <li><Link to='/'>Xbox Game Pass</Link></li>
                        <li><Link to='/'>Xbox accessories</Link></li>
                    </ul>
                </div>

                <div className="links">
                    <h4>Resources</h4>
                    <ul>
                        <li><Link to='/'>Xbox News</Link></li>
                        <li><Link to='/'>Xbox Support</Link></li>
                        <li><Link to='/'>Feedback</Link></li>
                        <li><Link to='/'>Community standards</Link></li>
                    </ul>
                </div>

                <div className="links">
                    <h4>Microsoft Store</h4>
                    <ul>
                        <li><Link to='/'>Microsoft Account</Link></li>
                        <li><Link to='/'>Microsoft Store Support</Link></li>
                        <li><Link to='/'>Returns</Link></li>
                        <li><Link to='/'>Store Locations</Link></li>
                    </ul>
                </div>
            </footer>
        </main >
    );
}