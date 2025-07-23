import { useState } from "react";

export interface Note {
  id: number;
  title: string;
  category: string;
  priority: string;
  description: string;
}

interface Props {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

const NoteForm = ({ notes, setNotes }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "work",
    priority: "medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };

    setNotes([newNote, ...notes]);

    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ｘ" : "Add New Note ➕"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              Priority
            </label>
            <select
              name="priority"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="high">🔴 High</option>
              <option value="medium">🟠 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="work">📁 Work</option>
              <option value="personal">🏠 Personal</option>
              <option value="ideas">💡 Ideas</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              name="description"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
