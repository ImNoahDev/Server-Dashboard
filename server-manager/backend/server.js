const express = require('express');
const snmp = require('snmp-native');
const cors = require('cors');
const { exec } = require('child_process');
const Datastore = require('nedb');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());


const db = new Datastore({ filename: 'servers.db', autoload: true });


app.get('/api/servers', (req, res) => {
  db.find({}, (err, servers) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(servers);
  });
});


app.post('/api/servers', (req, res) => {
  const server = req.body;
  db.insert(server, (err, newServer) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(newServer);
  });
});


app.get('/api/servers/:id/power-status', (req, res) => {
  db.findOne({ _id: req.params.id }, (err, server) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!server) return res.status(404).json({ error: 'Server not found' });

    const command = `ipmitool -I lanplus -H ${server.ip} -U admin -P password power status`;

    exec(command, (err, stdout, stderr) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ powerStatus: stdout.trim() });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
