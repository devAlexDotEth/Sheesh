import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './styles';
import Home from './compositions/home';
import Navigation from './components/navigation';
import Button from './components/button';
import Footer from './components/footer';
import { ScrollToTopOnRouteChange } from './utility/scroll';

function App() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <Container>

        <Navigation 
          localStyles={{position: 'fixed', top: 0}}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Button onClick={() => setIsMobileMenuOpen(false)} as="a" variant='PRIMARY' size='M' href='https://app.uniswap.org/#/tokens/ethereum/0xbb4f3ad7a2cf75d8effc4f6d7bd21d95f06165ca' target="_blank">Swap Now</Button>
        </Navigation>

        <ScrollToTopOnRouteChange />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer
          contactLink='https://twitter.com/sheesherc20'
          localStyles={{position: 'fixed', bottom: 0, left: 0}} 
        />

      </Container>
    </Router>

  );
}

export default App;
