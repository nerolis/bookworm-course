import React from 'react'
import { Segment} from 'semantic-ui-react'

const SignupPage = props => (
  <div className='container'>
  <Segment>{props.match.params.dreamId}</Segment>
  </div>
)

export default SignupPage;