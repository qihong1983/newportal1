
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './test/app.jsx';
import Repos from './test/Repos.jsx';

import About from './test/About.jsx';

import Home from './test/Home.jsx';




ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={App}>
  	<IndexRoute component={Home} />
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
  </Route>
</Router>
), document.getElementById('app'));