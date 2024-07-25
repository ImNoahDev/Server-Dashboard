import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddServer = () => {
  const [name, setName] = useState('');
  const [ip, setIp] = useState('');
  const [type, setType] = useState('');
  const [idracUrl, setIdracUrl] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/servers', { name, ip, type, idracUrl })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add Server</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">IP Address</label>
        <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">iDRAC URL</label>
        <input type="text" value={idracUrl} onChange={(e) => setIdracUrl(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Server</button>
    </form>
  );
};

export default AddServer;
