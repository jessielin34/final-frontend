import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewInstructorView from "../views/NewInstructorView";
import { addInstructorThunk } from "../../store/thunks";

class NewInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      department: "",
      id: "",
      redirect: false,
      redirectId: null,
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.firstname === "") {
      this.setState({ error: "Name field is required" });
      return;
    }
    if (this.state.lastname === "") {
      this.setState({ error: "Name field is required" });
      return;
    }
    if (this.state.id === "") {
        this.setState({ error: "Id field is required" });
        return;
      }
    let instructor = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
      id: this.state.id
    };

    let newinstructor = await this.props.addInstructor(instructor);

    this.setState({
      redirect: true,
      redirectId: newinstructor.id,
      error: "",
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/instructor/${this.state.redirectId}`} />;
    }
    return (
      <NewInstructorView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
  };
};

export default connect(null, mapDispatch)(NewInstructorContainer);