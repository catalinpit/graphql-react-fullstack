import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Link from './Link';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                description
                url
            }
        }
    }
`

class LinkList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <div>Fetching data!</div>
                if (error) return <div>Error encountered! </div>
          
                const linksToRender = data.feed.links
          
                return (
                  <div>
                    {linksToRender.map(link => <Link key={link.id} link={link} />)}
                  </div>
                )
              }}
            </Query>
          )
    }
}

export default LinkList;