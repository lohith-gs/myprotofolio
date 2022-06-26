import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Art from './Art/Art';
import './App.css';

function App() {
  return (
      <div className='body-style'>
        <Intro/>
        <About/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Art/>
        <Contact/>
        
      </div>
  );
}

export default App;
