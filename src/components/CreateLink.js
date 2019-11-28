/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_LINK_MUTATION = gql`
    mutation POST_MUTATION($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            url
            description
        }
    }
`;

class CreateLink extends Component {
    state = {
        description: '',
        url: ''
    }

    render() {
        const { description, url } = this.state;

        return(
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={description}
                        onChange={ e => this.setState({ description: e.target.value })}
                        type="text"
                        placeholder="Link description"
                    />

                    <input 
                        className="mb2"
                        value={url}
                        onChange={ e => this.setState({ url: e.target.value })}
                        type="text"
                        placeholder="Link URL"
                    />
                </div>
                <Mutation mutation={CREATE_LINK_MUTATION} variables={{ description, url }}>
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        );
    }
}

export default CreateLink;