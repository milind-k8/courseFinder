
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { AppShell } from './components/AppShell';

function App() {

  return (
    <BrowserRouter>
      <AppShell>
        <AppRouter />
      </AppShell>
    </BrowserRouter>
  )
}

export default App
