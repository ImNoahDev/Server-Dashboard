// src/components/ServerDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServerDetail = () => {
  const { id } = useParams();
  const [server, setServer] = useState(null);
  const [powerStatus, setPowerStatus] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5001/api/servers/${id}`)
      .then(response => {
        setServer(response.data);
      });
  }, [id]);

  useEffect(() => {
    if (server) {
      axios.get(`http://localhost:5001/api/servers/${id}/power-status`)
        .then(response => {
          setPowerStatus(response.data.powerStatus);
        });
    }
  }, [server, id]);

  if (!server) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{server.name}</h1>
      <p>IP: {server.ip}</p>
      <p>Type: {server.type}</p>
      {server.idracUrl && <p>iDRAC URL: <a href={server.idracUrl} className="text-blue-500">{server.idracUrl}</a></p>}
      <p>Power Status: {powerStatus}</p>
      {/* Add more server details and controls as needed */}
    </div>
  );
};

export default ServerDetail;
