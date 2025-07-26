import Note from "./Note";
import type { MainNote } from "./NoteForm";

interface Props {
  notes: MainNote[];
  deleteNote: (id: number) => void;
}

const NoteList = ({ notes, deleteNote }: Props) => {
  if (notes.length === 0) {
    return <p>No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
