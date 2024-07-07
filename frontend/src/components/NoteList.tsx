import React from 'react';

interface Note {
  id: number;
  content: string;
  renderedContent: string;
}

interface NoteListProps {
  notes: Note[];
  onSelect: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onSelect, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div key={note.id} className="note-list-item">
          <span onClick={() => onSelect(note)}>{note.content.substring(0, 20)}...</span>
          <button onClick={() => onDelete(note.id)} className="ml-2 text-red-500">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;