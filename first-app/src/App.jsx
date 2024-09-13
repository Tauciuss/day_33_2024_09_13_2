import Logo from './components/Logo';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Cards from './components/Cards';
import './App.css';

const App = () =>{
  return(
    <>
      <div className="row-1">
        <div className="sub-row-1">
          <Logo/>
          <Search/>
        </div>
        <div className="sub-row-2">
          <Navigation/>
        </div>
      </div>
    
      <div className="row-2">
          <Intro/>
      </div>

      <div className="row-3">
        <Cards/>
      </div>
    </>
  )
}

export default App
