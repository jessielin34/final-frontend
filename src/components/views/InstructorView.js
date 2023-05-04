import { Link } from "react-router-dom";


const InstructorView = (props) => {
  const {instructor, editCourse, allCourses} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  
  return (
    <div style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:40}}>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:40}}> Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})}>
              Remove Course
            </button>
            </div>
          );
        })}</div>
        <div style={{backgroundColor:"#F89880",color:"black",fontFamily:"Roboto",margin:0,padding:40}}>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>Add Course</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default InstructorView;