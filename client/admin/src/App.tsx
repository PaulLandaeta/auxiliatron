import {useState} from 'react';
import SubTitle from './components/SubTitle';
import Title from './components/Title';

function App() {
  // Destructurar un Array
  // [nombre, setNombre]
  const [cont, setCont] = useState(0);
  const clicked = () => {
    setCont(cont+1);
  }
  return (
    <>
  <Title description={`Hola mundo ${cont}`} color="blue"/>
  <Title description="Chau Mundo" color="red"/>
  <SubTitle />
  <button onClick={clicked}>Clicked</button>
  </>
  );
}

export default App;
