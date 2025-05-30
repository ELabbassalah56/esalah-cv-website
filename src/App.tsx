// App component
import './App.css';
import { 
  Header, 
  Summary, 
  Experience, 
  Projects, 
  Skills, 
  Training, 
  Education, 
  WhyHireMe, 
  Footer 
} from './components/CVSections';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Summary />
        <Experience />
        <Projects />
        <Skills />
        <Training />
        <Education />
        <WhyHireMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
