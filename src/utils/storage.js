// Why use localStorage? Simple, persistent client-side storage for small data.
export const getNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  
  export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  