import React, { useState } from 'react';

function QualificationForm({ onSave }) {
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const qualification = { degree, institution, year };

    try {
      const token = localStorage.getItem('token'); // ✅ get token
      const res = await fetch('http://localhost:5000/api/qualifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // ✅ include token
        },
        body: JSON.stringify(qualification),
      });

      if (res.ok) {
        onSave && onSave();
        setDegree('');
        setInstitution('');
        setYear('');
        alert('Qualification added successfully!');
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to save qualification');
      }
    } catch (error) {
      console.error('Error saving qualification:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Qualification</h2>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={e => setDegree(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={e => setInstitution(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
        required
      />
      <button type="submit">Save Qualification</button>
    </form>
  );
}

export default QualificationForm;
