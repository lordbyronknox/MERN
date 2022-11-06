import { Container } from 'react-bootstrap';
//Header and Footer are exported as default, so we dont need to wrap them in {}.
import Header from './components/Header'; 
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <h1>Welcome To Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
