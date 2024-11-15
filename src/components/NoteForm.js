// NoteForm.js
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <TextField
        label="Content"
        variant="outlined"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <Button onClick={handleSave} variant="contained" sx={{ width: '100%' }}>
        Save Note
      </Button>
    </Box>
  );
};

export default NoteForm;
