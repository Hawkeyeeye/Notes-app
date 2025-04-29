import './App.css';
import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import NavBar from './components/NavBar';

function App() {
  const [view, setView] = useState('add');
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => setRefresh(!refresh);

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NavBar view={view} setView={setView} />
      {view === 'add'
        ? <AddNote onAdd={handleAdd} />
        : <NotesList refresh={refresh} />}
    </div>
  );
  
}

export default App;
