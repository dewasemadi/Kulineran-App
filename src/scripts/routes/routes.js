import Home from '../views/pages/home';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';
import NotFound from '../views/pages/notfound';

const routes = {
  '/': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
  '/404': NotFound,
};

export default routes;
