import 'bulma/css/bulma.css';
import React from 'react';
import './App.css';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import Heading from './components/Heading/Heading';
import Cards from './components/Cards/Cards';

const App = () => {

  const profilesData = [
    {title: "Alexa", logo: AlexaImage, handle: "@alexa99", description: "I am a virtual assistant developed by Amazon."},
    {title: "Cortana", logo: CortanaImage, handle: "@cortana99", description: "I am a virtual assistant developed by Microsoft."},
    {title: "Siri", logo: SiriImage, handle: "@siri99", description: "I am a virtual assistant developed by Apple."}
  ];

  return (
  <div>
    <Heading title="Virtual Assistants" subTitle="Most popular ones..." />
    <Cards profiles={profilesData} />
  </div>
  );
  
};

export default App;
