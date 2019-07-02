import React from 'react';
import { Swipe } from "react-swipe-component"
import List from './components/List';
import Form from './components/Form';
import { Flex } from '../../library/FlexBox';
import * as client_actions from '../../actions/client';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const Client: React.FC = ({ createClient }: any) => {

  return (
    <Flex fd='column' h='100%' m='2em'>
      <Form createClient={createClient} />
      <Swipe
        nodeName="div"
        className="test"
        onSwipedDown={() => console.log('swip down')}
      >
        <List />

      </Swipe>
    </Flex>
  )
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ ...client_actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);
