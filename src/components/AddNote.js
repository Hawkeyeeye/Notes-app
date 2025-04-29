import React, { useState } from 'react';
import { getNotes, saveNotes } from '../utils/storage';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Why use this submit handler? Ensures controlled, validated input.
      const newNote = { title, content, id: Date.now() };
      const notes = getNotes();
      saveNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
      onAdd();
    } catch (err) {
      setError('Failed to save note. Storage quota exceeded.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit" disabled={loading}>Add Note</button>
      {loading && <div>Saving...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
    </form>
  );
};

export default AddNote;
