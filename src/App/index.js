import { Nadvar } from '../Nadvar';
import { SeccionOne } from '../SeccionOne';
import { SeccionDos } from '../SeccionDos';
import { SeccionTres } from '../SeccionTres';
import { SeccionCuatro } from '../SeccionCuatro';
import { SeccionCinco } from '../SeccionCinco';
import { SeccionSeis } from '../SeccionSeis';
import { SeccionBox } from '../SeccionBox';
import { Item } from '../Item';
import { Footer } from '../Footer';
import { Whatsapp } from '../Whatsapp';
import './App.css';

function App() {
  return (
    <>
      <Nadvar/>
      <SeccionOne/>
      <SeccionDos/>
      <SeccionTres/>
      <SeccionCuatro/>
        <Item/>
      <SeccionBox/>
      <SeccionCinco/>
      <SeccionSeis/>
      <Whatsapp/>
      <Footer/>
    </>
  );
}

export default App;
