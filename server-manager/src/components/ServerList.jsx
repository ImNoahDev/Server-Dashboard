import React from 'react';
import { Link } from 'react-router-dom';

const ServerList = ({ servers }) => (
  <div>
    <h2 className="text-xl font-bold">Servers</h2>
    <ul>
      {servers.map(server => (
        <li key={server._id}>
          <Link to={`/servers/${server._id}`} className="text-blue-500">{server.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ServerList;
