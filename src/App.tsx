// Modules
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Styles
import './styles/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';

// Components
import Nav from './components/global/Nav';
import Footer from './components/global/Footer';
import Burger from './components/global/Burger';

// Pages
import Main from './pages/Main';
import Events from './pages/Events';
import Rating from './pages/Rating';
import Profile from './pages/Profile';
import EventItem from './pages/EventItem';
import Structure from './pages/Structure';
import Contacts from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Tournaments from './pages/Tournaments';
import PlayerProfile from './pages/PlayerProfile';

const App = () => {
  // Types
  type drop = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  const refTrig_1 = useRef<any>(null);

  // State
  const [dropdownBurger, setDropdownBurger] = useState(false);
  const [dropdown, setDropdown]: drop = useState(false);
  const [burgerOpen, setBurgerOpen]: drop = useState(false);

  return (
    <div className="App">
      <Nav
        // dropdown={dropdown}
        // setDropdown={setDropdown}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        // refTrig_1={refTrig_1}
      />
      <Burger
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        dropdownBurger={dropdownBurger}
        setDropdownBurger={setDropdownBurger}
      />
      <div className="inner-body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<Events />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event/:eventId" element={<EventItem />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/player/:playerId" element={<PlayerProfile />} />
        </Routes>
      </div>
      <Footer
        setBurgerOpen={setBurgerOpen}
        burgerOpen={burgerOpen}
        dropdown={dropdown}
        setDropdown={setDropdown}
        dropdownBurger={dropdownBurger}
        setDropdownBurger={setDropdownBurger}
        refTrig_1={refTrig_1}
      />
    </div>
  );
};

export default App;
