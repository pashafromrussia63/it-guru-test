import { useRoutes } from 'react-router-dom';
import { routes } from './router/routes';

function App() {
  const element = useRoutes(routes);
  
  return (
    <div className="w-full min-h-screen">
        {element}
    </div>
  );
}

export default App;