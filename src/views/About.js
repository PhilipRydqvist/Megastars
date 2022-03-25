import styled from "styled-components";

import EvaCortado from "../assets/graphics/eva-cortado.jpg"

import Header from "../components/Header";

function About() {
    
    return( 

    <AboutKaffeWrapper>
        <div>
        <Header />
        </div>

        <section>
        <h1 className="">Vårt Kaffe</h1>
        </section>

        <section className="ingress">
            <h4>Pumpkin spice mug, barista cup, sit macchiato, 
            kopi-luwak, doppio, grounds dripper, crema, strong whipped, 
            variety extra iced id lungo half and half mazagran. 
            Pumpkin spice. 
            </h4>
        </section>

        <section className="styckeett">
            <p>
            Que dark fair trade, spoon decaffeinated, 
            barista wings whipped, as rich aftertaste, con panna milk black, 
            arabica white rich beans single shot extra affogato. 
            So affogato macchiato sit extraction instant grinder 
            seasonal organic, turkish single shot, single origin, 
            and robusta strong to go so dripper. Viennese froth, 
            grounds caramelization skinny aromatic cup kopi-luwak, 
            fair trade flavour, frappuccino medium, café au lait flavour 
            cultivar ut bar instant kopi-luwak.
            </p>
        </section>

        <section className="stycketvå">
            <p>    
            Roast id macchiato, single shot siphon mazagran milk 
            fair trade est aroma a half and half and, so, 
            galão iced to go, whipped as cream cup pumpkin spice iced. 
            At extra, rich grinder, brewed to go, steamed half and half at, that, 
            percolator macchiato trifecta and body as arabica dripper. In galão 
            black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. 
            Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, 
            percolator cream black, galão flavour, milk aromatic turkish skinny crema.
            </p>
        </section>

        <section>
            <img src={ EvaCortado } alt="EvaCortado"/>
            <p className="namn">Eva Cortado</p>
            <p className="vd">VD & Grundare</p>
        </section>
    </AboutKaffeWrapper>
    )
}

export default About;

const AboutKaffeWrapper = styled.div `
background-color: #f3e4e1;


.ingress {
    font-style: bold;
}
`
