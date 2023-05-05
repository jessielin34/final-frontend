import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div style={{display:"block",border:50,backgroundColor:"#F89880",borderRadius:30,padding:30}}>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
      <br />
      <br />
      <Link to={"/"}> Home Page </Link>
    </div>
    );
  }
  
  return (
    <div style={{display:"block",border:50,backgroundColor:"#F89880",borderRadius:30,padding:30}}>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div style={{display:"block",border:50,backgroundColor:"#F89880",borderRadius:30,padding:30}} key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link style={{display:"block",border:50,backgroundColor:"#F89880",fontFamily:"Roboto",borderRadius:30,padding:30}} to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
      <Link style={{display:"block",border:50,backgroundColor:"#F89880",fontFamily:"Roboto",borderRadius:30,padding:30}} to={`/newcourse`}>
        <button>Home Page</button>
      </Link>
      <div style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}}></div>
    </div>
  );
};


export default AllCoursesView;