// App.js
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import AuthForm from './components/AuthForm';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { Container, Typography } from '@mui/material';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const App = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => setUser(currentUser));
  }, []);

  useEffect(() => {
    if (user) fetchNotes();
  }, [user]);

  const fetchNotes = async () => {
    const notesSnapshot = await getDocs(collection(db, 'notes'));
    const notesData = notesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setNotes(notesData);
  };

  const addNote = async (note) => {
    await addDoc(collection(db, 'notes'), { ...note, uid: user.uid });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    fetchNotes();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center">My Notes App</Typography>
      {user ? (
        <>
          <NoteForm onSave={addNote} />
          <NotesList notes={notes} onDelete={deleteNote} />
        </>
      ) : (
        <AuthForm />
      )}
    </Container>
  );
};

export default App;

