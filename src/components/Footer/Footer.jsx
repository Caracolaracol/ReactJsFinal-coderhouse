import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <footer>
                <div className='footer__envios'>
                    <p>Envíos a todo Chile</p>
                    <p>Visítanos en av. Providencia 2594, local 210 - Metro tobalaba</p>
                    <p><b>Horario:</b> Lunes a viernes 11 a 19 hrs </p>
                </div>
                <div className='footer__siguenos'>
                    <h2>Síguenos: </h2>
                    <div className='footer__siguenos-list'>
                        <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" width={30} alt="facebook" /></div>
                        <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" width={30} alt="twitter" /></div>
                        <div></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer