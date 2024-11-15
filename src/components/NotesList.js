// NotesList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const NotesList = ({ notes, onEdit, onDelete }) => (
  <Box sx={{ mt: 3 }}>
    <List>
      {notes.map((note) => (
        <ListItem
          key={note.id}
          sx={{
            mb: 1,
            border: '1px solid lightgray',
            borderRadius: '8px',
            padding: '10px',
          }}
          secondaryAction={
            <>
              <IconButton edge="end" onClick={() => onEdit(note)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => onDelete(note.id)}>
                <Delete />
              </IconButton>
            </>
          }
        >
          <ListItemText primary={note.title} secondary={note.content} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default NotesList;
