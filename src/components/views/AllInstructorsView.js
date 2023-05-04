import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  let { deleteInstructor } = props;
  if (!props.allInstructors.length) {
    return (
      <div style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:400}}>
      <p>There are no instructors.</p>
      <div>
            <Link style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:0,}} to={`/newinstructor`}>
              Add New Instructor
            </Link>
          </div>
          <br />
      <Link to={"/"}> Home Page </Link>
      
    </div>
    );
  }

  return (
    <div style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:40}}>
      <Link to={'/'}>
      <h2 style={{backgroundColor:"#FAA0A0",fontFamily:"Roboto",marginInline:50,padding:50}}> Home Page </h2>
        <div>
          <br />
              <Link style={{display:"inline-block",backgroundColor:"#FAA0A0",color:"black",fontFamily:"Roboto",margin:0,padding:40,}} to={`/newinstructor`}>
                Add New Instructor
              </Link>
            </div>
        </Link>
        <div>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id} style={{backgroundColor:"#FAA0A0",color:"black",fontFamily:"Roboto",margin:50,padding:30}}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <button onClick={() => deleteInstructor(instructor.id)}>Delete Instructor</button>
        </div>
        );

      })}
      </div>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;