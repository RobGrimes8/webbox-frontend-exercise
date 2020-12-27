//STYLES
import './styles/css/App.css';
//COMPONENTS
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/MobileNav/MobileNav'
import Card from './components/Card/Card'
import Accordion from './components/Accordion/Accordion'
import Footer from './components/Footer/Footer'
//DATA
import accordionData from './assets/accordion.json'
//IMAGES
import image from './assets/images/card-image.png'
import travelSVG from './assets/images/icons/dropdowns/icon-travel.svg'
import burgerSVG from './assets/images/icons/dropdowns/icon-burger.svg'
import clockSVG from './assets/images/icons/dropdowns/icon-clock.svg'
import foodSVG from './assets/images/icons/dropdowns/icon-food.svg'
import piggybankSVG from './assets/images/icons/dropdowns/icon-piggybank.svg'


function App() {

  const iconList = [travelSVG, piggybankSVG, clockSVG, burgerSVG, foodSVG]

  const accordionList = accordionData.items.map((item, index) =>
    <Accordion 
      key={index}
      title={item.title}
      subTitle={item.subTitle}
      content={item.content}
      buttonText={item.buttonText}
      icon={iconList[index]}
    />
  );
  
  return (
    <div className="App">
      <MobileNav />
      <Navbar />
      <section className="hero">
        <h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h1>
        <p>Praesent tincidunt lectus lacus, non pellentesque lorem mattis faucibus. Duis venenatis sed odio ac imperdiet. Donec tempus egestas risus et sagittis. Proin venenatis nec erat sed pulvinar.</p>
      </section>
      <section className="cards">
        <p className="subtitle">Cards</p>
        <div className="cardParent">
          <Card 
            imgSrc={image}
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus turpis vel risus eleifend, et maximus metus fringilla. Praesent in lacus rhoncus…"
          />
          <Card 
            imgSrc={image}
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus turpis vel risus eleifend, et maximus metus fringilla. Praesent in lacus rhoncus…"
          />
          <Card 
            imgSrc={image}
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus turpis vel risus eleifend, et maximus metus fringilla. Praesent in lacus rhoncus…"
          />
        </div>
      </section>
      <section className="accordions">
        <p className="subtitle">Accordions</p>
        {accordionList}
      </section>  
      <Footer />
    </div>
  );
}

export default App;
