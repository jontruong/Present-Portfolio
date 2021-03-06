import ContactUs from '../src/components/ContactUs'
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (

    <div className="app-container">
      <Nav/>
      <Page/>
      <Projects/>
      <ContactUs/>
    </div>


  );
}

export default App;
