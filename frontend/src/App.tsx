import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import NoteViewer from './components/NoteViewer';

interface Note {
  id: number;
  content: string;
  renderedContent: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNote = async (note: { content: string }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/notes`, note);
      setNotes([...notes, response.data]);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const updateNote = async (id: number, content: string) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/notes/${id}`, { content });
      setNotes(notes.map(note => note.id === id ? response.data : note));
      setSelectedNote(response.data);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/notes/${id}`);
      setNotes(notes.filter(note => note.id !== id));
      setSelectedNote(null);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Markdown Notes</h1>
      <div className="app-container">
        <div className="col-span-1">
          <NoteEditor onSave={saveNote} />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          {isLoading ? (
            <p>Loading notes...</p>
          ) : (
            <NoteList 
              notes={filteredNotes} 
              onSelect={setSelectedNote}
              onDelete={deleteNote}
            />
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          {selectedNote && (
            <NoteViewer 
              note={selectedNote} 
              onUpdate={updateNote}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;