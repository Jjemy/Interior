import './App.css';
import react from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/services/services';
import Projects from './components/projects/projects';
import Team from './components/team/team';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import WOW from 'wowjs';
import Aos from 'aos';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    this.setState({isLoading: false})
    new WOW.WOW().init();
    Aos.init();
  }
  render(){
    return (
      this.state.isLoading?
      <div class="d-flex justify-content-center align-items-center spinner-container">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only" />
        </div>
      </div>:
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
        <Footer />
        <a href="#" class="top-arrow"><i class="lni lni-chevron-up" /></a>
      </div>
    );
  }
}

export default App;
