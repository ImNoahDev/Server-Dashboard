import React from 'react';

const Widget = ({ widget }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      {widget.type === 'uptime' && (
        <div>
          <h3 className="text-lg font-bold">Server Uptime</h3>
          <p>...</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
