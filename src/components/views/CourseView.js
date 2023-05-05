import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  return (
    <div style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}}>
      <h1>{course.title}</h1>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff (unassigned)</h3>}
      <Link to={`/editcourse/${course.id}`}>Edit course information</Link>
      <br/>
      <Link to={`/courses`}>View all courses</Link>
      <div style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}}></div>
    </div>
  );

};

export default CourseView;