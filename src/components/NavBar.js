import React from 'react';

const NavBar = ({ view, setView }) => (
  <nav style={{marginBottom: '16px'}}>
    {/* Why this nav? Simple toggle between add/view for clarity. */}
    <button onClick={() => setView('add')} disabled={view === 'add'}>Add Note</button>
    <button onClick={() => setView('list')} disabled={view === 'list'}>View Notes</button>
  </nav>
);

export default NavBar;
