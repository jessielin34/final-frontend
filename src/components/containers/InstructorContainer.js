import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchInstructorThunk,
  fetchAllCoursesThunk,
  editCourseThunk 
} from "../../store/thunks";

import { InstructorView } from "../views";

import { useParams } from "react-router";

import { Link } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

class InstructorContainer extends Component {
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchCourses();
  }

  render() {
    return (
      <div style={{backgroundColor:"#F89880",color:"blck",fontFamily:"garamond",margin:0,padding:100,}}>
      <InstructorView 
        instructor={this.props.instructor}
        editCourse={this.props.editCourse}
        allCourses={this.props.allCourses}
      />
      <br />
      <br />
        <Link style={{border:50,backgroundColor:"#F89880",borderRadius:30,padding:30,display:"inline-block"}} to={"/"}>Home Page </Link>
        <div style={{display:"block",border:50,backgroundColor:"#F89880",borderRadius:30,padding:100,}}></div>
    </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),

  };
};

export default withRouter(connect(mapState, mapDispatch)(InstructorContainer));