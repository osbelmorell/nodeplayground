import css from './../scss/styles.scss';
import React from 'react';
import { render } from 'react-dom';
// import $ from 'jquery';

import DefaultLayout from './layouts/default.jsx';

const app = document.getElementById('app');

render(
	<DefaultLayout />
 	, app , function(){
	console.log('callback');
});