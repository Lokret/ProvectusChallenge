import React, { Component } from 'react';
import tags from '../data';

export default class Tag extends Component {

    constructor() {
        super();
    }

    renderPageTypes(data) {
        return (<div>
            {data.map((item) => {
                return (<div><span> - {item.key}: </span>{item.value}</div>);
            })}
        </div>)
    }

    render() {
        const { id } = this.props.params;
        let item = tags.filter((item) => { return item.id === id })[0];
        let pageTypes = Object.keys(item.pageType).map((key) => { return { key: key, value: item.pageType[key] } });
        return (
            <div className="tag-details" >
                <div className="detail" ><span className="label" >Label: </span>{ item.label }</div>
                <div className="detail" ><span className="label" >Total Mentions: </span>{ item.volume || 0 }</div>
                <div className="detail" ><span
                    className="label" >Positive Mentions: </span>{ item.sentiment.positive || 0 }
                </div>
                <div className="detail" ><span
                    className="label" >Neutral Mentions: </span>{ item.sentiment.neutral || 0 }
                </div>
                <div className="detail" ><span
                    className="label" >Negative Mentions: </span>{ item.sentiment.negative || 0}
                </div>
                <div className="detail" ><span
                    className="label" >List of page types: </span>{ this.renderPageTypes(pageTypes) }</div>
            </div>
        );
    }
}
