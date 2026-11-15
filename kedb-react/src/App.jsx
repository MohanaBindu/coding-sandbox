import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {

   const [search, setSearch] = useState("");

  return (
    <div className="container mt-4">

      <h1>KEDB Dashboard</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Search incidents..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p className="mt-3">
        You are searching for: {search}
      </p>

    </div>
  )

}

function StatsCard({ title, count }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3 shadow-sm">
        <h5>{title}</h5>
        <h2>{count}</h2>
      </div>
    </div>
  );
}


export default App
