import React, { useState } from 'react';
import './index.css';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
    }

    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className='draganddrap'>
      <h1 className='head'>Drag and Drop </h1>
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div
          id="drag-item"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className='text'
        >
          Drag 
        </div>
      </div>
      {fileName && (
          <p className='file-name'>File Name: {fileName}</p>
        )}
    </div>
  );
};

export default DragAndDrop;
