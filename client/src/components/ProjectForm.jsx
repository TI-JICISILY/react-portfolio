import React, { useState } from 'react';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, link })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Project added successfully');
        setTitle('');
        setDescription('');
        setLink('');
      } else {
        alert(data.message || 'Failed to add project');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project Link (optional)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProjectForm;
