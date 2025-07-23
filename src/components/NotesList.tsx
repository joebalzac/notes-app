import type { Note } from "./NoteForm";

interface Props {
  notes: Note[];
}

const NoteList = ({ notes }: Props) => {
  if (notes.length === 0) {
    return <p>No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-l-fuchsia-500 border-l-4">
          <h3 className="text-lg font-bold"> {note.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Categroy:</strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority:</strong>
            {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
