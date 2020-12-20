//STYLES
import './styles/css/App.css';
//COMPONENTS
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Accordion from './components/Accordion/Accordion'
//DATA
import accordionData from './assets/accordion.json'
//IMAGES
import image from './assets/images/card-image.png'
import travelSVG from './assets/images/icons/dropdowns/icon-travel.svg'
import burgerSVG from './assets/images/icons/dropdowns/icon-burger.svg'
import clockSVG from './assets/images/icons/dropdowns/icon-clock.svg'
import foodSVG from './assets/images/icons/dropdowns/icon-food.svg'
import piggybankSVG from './assets/images/icons/dropdowns/icon-piggybank.svg'
import FacebookSVG from './assets/images/icons/socials/facebook.svg'
import InstagramSVG from './assets/images/icons/socials/instagram.svg'
import LinkedinSVG from './assets/images/icons/socials/linkedin.svg'
import TwitterSVG from './assets/images/icons/socials/twitter.svg'
import YoutubeSVG from './assets/images/icons/socials/youtube.svg'


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
  
console.log(accordionData.items);

  return (
    <div className="App">
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
      <footer>
        <div className="copyright">
          <p>© Copyright 2020 WebBox.</p>
        </div>
        <div className="title">
          <p>WebBox Front-end Developer Exercise</p>
        </div>
        <div className="socials">
          <a href="https://en-gb.facebook.com/webboxdigital/">
            <img src={FacebookSVG} />
          </a>
          <a href="https://twitter.com/webboxdigital?lang=en">
            <img src={TwitterSVG} />
          </a>
          <a href="https://www.instagram.com/webboxdigital/?hl=en">
            <img src={InstagramSVG} />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ">
            <img src={YoutubeSVG} />
          </a>
          <a href="https://www.linkedin.com/company/webbox-digital/">
            <img src={LinkedinSVG} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
