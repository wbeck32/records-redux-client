import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getRecords} from './records.actions';
import Records from './Records';

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getRecords }, dispatch);
}

const mapStateToProps = state => {
  return {
    categories : state.categories,
    token : state.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);
