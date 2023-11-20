import './hero.css'
import HeroXbox from'../../../public/img/hero-xbox.png'

export default function Hero(){
    return (
        <div className="hero">
            <div className="hero-content">
                <img src={HeroXbox} alt="Imagem do hero de um xbox" />
                <h2><span>Xbox Serie S</span> | Xbox</h2>
                <button>Pedido Antecipado</button>
            </div>
        </div>
    )
}