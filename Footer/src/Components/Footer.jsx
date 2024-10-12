import './Footer.css'

function Footer(){
    return(
        <>
        
        <div className="footer">
            <div className="firstColumn">
                <div className="title">COMPANY NAME</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Quis accusamus adipisci cum recusandae quisquam inventore error.<br/>
                    Quam magnam est velit,fuga sunt inventore dolorum cum obcaecati iste quo.<br/>
                    Facilis, illo.
                </p>
            </div>
            <div className="secondColumn">
                <div className="title">PRODUCTS</div>
                <ul className="links">
                    <li>MDBootstrap</li>
                    <li>MDWordPress</li>
                    <li>BrandFlow</li>
                    <li>Bootstrap Angular</li>
                </ul>
            </div>
            <div className="thirdColumn">
                <div className="title">USEFUL LINKS</div>
                <ul className="links">
                    <li>Your Account</li>
                    <li>Become an Affiliate</li>
                    <li>Shipping Rates</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="fourthColumn">
                <div className="title">CONTACT</div>

            </div>
        </div>
        <div className="bottomline">
            <p>©2020 Copyright: MDBootstrap.com</p>
        </div>

        </>
        
    )
}

export default Footer