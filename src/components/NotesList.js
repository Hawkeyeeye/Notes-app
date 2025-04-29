import React, { useEffect, useState } from 'react';
import { getNotes } from '../utils/storage';

const NotesList = ({ refresh }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Why useEffect? Loads notes from storage on mount.
    setNotes(getNotes());
  }, [refresh]);

 // In NotesList.js
return (
    <div className="notes-list">
      {notes.length === 0 && <div>No notes yet.</div>}
      {notes.map(note => (
        <div key={note.id} className="note-card">
          <div className="note-title">{note.title}</div>
          <div className="note-content">{note.content}</div>
        </div>
      ))}
    </div>
  );
  
};

export default NotesList;
