import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServerList from './ServerList';
import Widget from './Widget';

const Dashboard = () => {
  const [servers, setServers] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/servers')
      .then(response => {
        setServers(response.data);
      });
  }, []);

  const addWidget = (widget) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Server Dashboard</h1>
      <ServerList servers={servers} />
      <div className="grid grid-cols-3 gap-4">
        {widgets.map((widget, index) => (
          <Widget key={index} widget={widget} />
        ))}
      </div>
      <button onClick={() => addWidget({ type: 'uptime' })} className="mt-4 bg-blue-500 text-white p-2 rounded">Add Uptime Widget</button>
    </div>
  );
};

export default Dashboard;
