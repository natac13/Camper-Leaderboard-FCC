import React             from 'react';
import { render }        from 'react-dom';
import { Provider }      from 'react-redux';

/*** store ***/
import configureStore from './store/configureStore';
const store = configureStore();

/*** Application ***/
import App from './containers/App/';
import './scss/setup.scss';
/*===========================================
=            Immutable Dev tools            =
===========================================*/

import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

/*=====  End of Immutable Dev tools  ======*/


const rootElement = document.getElementById('root');

render((
    <Provider store={store}>
        <App />
    </Provider>
), rootElement);

