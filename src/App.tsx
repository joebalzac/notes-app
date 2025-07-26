import { useEffect, useState } from "react";
import NoteForm, { type MainNote } from "./components/NoteForm";

import NoteList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState<MainNote[]>(() => {
    const notesString = localStorage.getItem("notes");
    const storedNotes = notesString ? JSON.parse(notesString) : [];
    return storedNotes;
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id: number) => {
    const confirmDelete = window.confirm("Are you sure buddy?");

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
        <NoteForm notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </>
  );
};

export default App;
