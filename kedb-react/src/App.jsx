import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {

   const [search, setSearch] = useState("");

    useEffect(() => {
    console.log("KEDB Dashboard loaded!");
    }, []);

    return (
    <div>
      <h1>KEDB Dashboard</h1>
    </div>
    );
}


export default App
