import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route } from 'react-router';
import TagCloud from './components/tag-cloud.jsx';
import TagDetails from './components/tag-details.jsx';

render(
    <Router history={hashHistory} >
        <Route path='/' component={TagCloud} />
        <Route path='/:id' component={TagDetails} />

    </Router>,
    document.getElementById('tag-cloud')
);
