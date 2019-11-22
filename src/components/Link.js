import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.link.id} - {this.props.link.description} - {this.props.link.url}
                </p>
            </div>
        );
    }
}

export default Link;