import React             from 'react';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';

/*** store ***/
import configureStore from './store/configureStore';
const store = configureStore();

/*** Application ***/
import App from './containers/App/';

/*===========================================
=            Immutable Dev tools            =
===========================================*/

import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

/*=====  End of Immutable Dev tools  ======*/

/*===================================
=            Material-ui            =
===================================*/

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/*=====  End of Material-ui  ======*/

const rootElement = document.getElementById('root');

render((
    <Provider store={store}>
        <App />
    </Provider>
), rootElement);

