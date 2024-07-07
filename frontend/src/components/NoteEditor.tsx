import React, { useState } from 'react';

interface NoteEditorProps {
  onSave: (note: { content: string }) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave({ content });
    setContent('');
  };

  return (
    <div className="note-editor">
      <textarea 
        value={content} 
        onChange={e => setContent(e.target.value)}
        placeholder="Write your note here..."
      ></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NoteEditor;