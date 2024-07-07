import React, { useState } from 'react';

interface NoteViewerProps {
  note: {
    id: number;
    content: string;
    renderedContent: string;
  };
  onUpdate: (id: number, content: string) => void;
}

const NoteViewer: React.FC<NoteViewerProps> = ({ note, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(note.content);

  const handleUpdate = () => {
    onUpdate(note.id, editContent);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="note-viewer">
        <textarea 
          value={editContent} 
          onChange={e => setEditContent(e.target.value)}
        ></textarea>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="note-viewer">
      <div dangerouslySetInnerHTML={{ __html: note.renderedContent }}></div>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};

export default NoteViewer;