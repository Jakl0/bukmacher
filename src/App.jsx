import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Logowanie from './components/Logowanie'
import Header from './components/Header'
import Bukmaching from './components/Bukmaching'
import Kupony from './components/Mecze'


function App() {
  const Mecze = [{
        Klub1: "Barcelona",
        Kurs1: 1.39,
        Klub2: "Atletic Bilbao",
        Kurs2: 6.25,
        Remis: 4.75,
    },
    {
        Klub1: "Elche",
        Kurs1: 7.25,
        Klub2: "Real Madryt",
        Kurs2: 1.32,
        Remis: 5.10,
    },
    {
        Klub1: "Bayern Monachium",
        Kurs1: 1.16,
        Klub2: "Frelburg",
        Kurs2: 12,
        Remis: 6.90,
    },
    {
        Klub1: "Paris Saint-Germain",
        Kurs1: 1.15,
        Klub2: "Le Havre",
        Kurs2: 13.50,
        Remis: 6.75,
    },
    {
        Klub1: "Burnley",
        Kurs1: 6.10,
        Klub2: "Chelsea",
        Kurs2: 1.45,
        Remis: 4.30,
    },]

    const [login , setLogin] = useState(false);
    const [kupon,setKupon] = useState([]);
    const [stawka,setStawka] = useState("");

  return (
    <>

    {login === false&& <Logowanie Zaloguj={()=> setLogin(true)} />}

    {login === true && 
    <div>
      <Header/> 
      <Bukmaching Tablica={Mecze}/>
      <Kupony Tablica={kupon}/>  
    </div> 
    
    
    }

    
    
    
    </>
  )
}

export default App
