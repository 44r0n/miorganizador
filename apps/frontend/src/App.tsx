import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('cargando...');

  useEffect(() => {
    fetch('/api/health')
      .then(response => response.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('backend no disponible'));
  }, []);

  return (
    <div>
      <h1>Mi Organizador tiene hot reload?</h1>
      <p>API: {status}</p>
    </div>
  );
}

export default App;