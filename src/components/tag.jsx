import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tag extends Component {

    constructor() {
        super();
    }

    render() {
        const { id, label, sentimentScore, volume, point } = this.props;
        let fontSize = sentimentScore / point;
        fontSize = fontSize < 10 ? 10 : fontSize;

        return (
            <span className="tag" style={{fontSize: fontSize }} >
                <Link to={`/${id}`} >{label}</Link>
            </span>
        );
    }
}
