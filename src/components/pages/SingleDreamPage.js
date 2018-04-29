import React                 from 'react'
import PropTypes             from "prop-types";
import { connect }           from "react-redux";
import { Segment, Container} from 'semantic-ui-react';
import { fetchOneDream }     from "../../actions/dreams";

class SingleDreamPage extends React.Component {
  componentDidMount = () => {
    this.onInit(this.props);
  }

  onInit = props => props.fetchOneDream(this.props.match.params.dreamId);
  
  renderDream = () => <Segment>test</Segment>


  render() {
    return (
      <Container>
        {this.renderDream()}
      </Container>
    )
  }
};

function mapStateToProps(state) {
  return {
    dream: state.dreams
  };
}
  
export default connect(mapStateToProps, { fetchOneDream })(SingleDreamPage);