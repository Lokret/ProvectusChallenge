import React, { Component } from 'react';
import tags from '../data';
import Tag from './tag.jsx';

export default class TagCloud extends Component {

    constructor() {
        super();

        this.state = {
            showTags: false,
            tags: []
        };
    }

    componentWillMount() {
        this.setState({ tags });
    }

    render() {
        const tags = this._getTags();
        return (
            <div className="row tags-container" >
                <div className="cell" >
                    <h2>Tag Cloud</h2>
                    <div className="tag-box" >
                        <h3 className="tag-count" >We found {tags.length} tags</h3>
                        <div className="tag-list" >
                            {tags}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    _calculateFontPoint() {
        const { tags } = this.state;
        let max = 0;
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].sentimentScore > max) {
                max = tags[i].sentimentScore;
            }
        }
        return max / 30;
    }

    _getTags() {
        const point = this._calculateFontPoint();
        return this.state.tags.map((tag) => {
            return <Tag
                id={tag.id}
                label={tag.label}
                point={point}
                sentimentScore={tag.sentimentScore}
                volume={tag.volume}
            />
        });
    }
}