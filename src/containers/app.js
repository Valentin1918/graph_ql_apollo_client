import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import UserQuery from '../graph/user.graphql';
import AC from '../actions';
import { ERSD } from '../reducers';

//Another way to write a query:
// const UserQuery1 = gql`
//     query User($id: ID!, $alcoholic: Boolean!) {
//         users(id: $id){
//             id
//             name
//             friends(alcoholic: $alcoholic) {
//                 name
//             }
//         }
//     }
// `;

const mapResultsToProps = ({ data }) => {
  if (!data.users) return { loading: true };
  const { id, name, friends } = data.users;
  return {
    loading: false,
    id,
    name,
    friends,
  };
};

const mapPropsToOptions = ({ ersd }) => {
  return {
    variables: ersd.queryVariables
  };
};

@compose(
  connect(
    state => ({
      ersd: ERSD.getERSD(state),
    }),
    {
      getAllData: AC.getAllData,
    }
  ),
  graphql(UserQuery, {
    props: mapResultsToProps,
    options: mapPropsToOptions,
  })
)
export default class Authentication extends Component {
  static propTypes = {
    ersd: PropTypes.object,
    getAllData: PropTypes.func,
  };


  render() {
    console.log('render this.props', this.props);
    return (
      <div className="doc-collab-workflow-settings doc-collab-workflow-settings--ersd">

      </div>
    );
  }
}
