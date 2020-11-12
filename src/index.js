import React from 'react';
import ReactDOM from 'react-dom';
import InfoCards from './components/InfoCards';

import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render((
	<Provider store = {store}>
	<InfoCards />
</Provider>), document.getElementById('root')
);
