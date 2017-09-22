import React from 'react';
import ReactDOM from 'react-dom';
import Teams  from './Teams.js'

import './bootstrap-4.0.0-beta/dist/css/bootstrap.min.css';
import '../node_modules/material-components-web/dist/material-components-web.css';
import './Teams.css';

var team1 = {name:'Amazon', url:'amazon.com', notifications:15, img:'http://www.turnerduckworth.com/media/filer_public/86/18/86187bcc-752a-46f4-94d8-0ce54b98cd46/td-amazon-smile-logo-01-large.jpg'};
var team2 = {name:'Facebook', url:'fb.com', notifications:8, img:'https://www.facebook.com/images/fb_icon_325x325.png'};
var teams = [team1, team2];

ReactDOM.render(
	<Teams teams={teams} />,
	document.getElementById('root')
);