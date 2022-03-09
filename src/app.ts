import './styles/global.css';

import { Home } from './pages';

function App(): void {
  const home = new Home();

  const querySelector = '#root';

  home.render(querySelector);
}

App();
