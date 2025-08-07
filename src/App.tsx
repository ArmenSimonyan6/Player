import { NotFound } from './pages';
import { Layout } from './layouts';
import { ROUTES, ROUTES_GROUP } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {ROUTES_GROUP.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
