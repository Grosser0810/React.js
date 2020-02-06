import { connect } from 'react-redux'
import { setVisibilitySort } from '../actions'
import SortBlock from "../components/SortBlock/SortBlock";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.sort === state.visibilitySort
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilitySort(ownProps.sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortBlock)