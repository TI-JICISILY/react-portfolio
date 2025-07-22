import React, { useEffect, useState } from 'react';
import QualificationForm from '../components/QualificationForm';

const QualificationPage = () => {
  const [qualifications, setQualifications] = useState([]);

  const fetchQualifications = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/qualifications');
      const data = await res.json();
      setQualifications(data);
    } catch (err) {
      console.error('Error fetching qualifications:', err);
    }
  };

  useEffect(() => {
    fetchQualifications();
  }, []);

  return (
    <div>
      <h2>Qualifications</h2>
      <ul>
        {qualifications.map(q => (
          <li key={q._id}>
            {q.degree} - {q.institution} ({q.year})
          </li>
        ))}
      </ul>
      <QualificationForm onSave={fetchQualifications} />
    </div>
  );
};

export default QualificationPage;

