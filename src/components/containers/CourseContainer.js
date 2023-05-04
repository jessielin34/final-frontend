import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk } from "../../store/thunks";
import { CourseView } from "../views";
import { useParams } from "react-router";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

class CourseContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
  }

  render() {
    return (
      <CourseView 
        course={this.props.course}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(CourseContainer));