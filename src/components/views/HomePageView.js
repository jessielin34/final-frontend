import { Link } from 'react-router-dom';

const HomePageView = () => {
  return (
    <div>
      <h6 style={{backgroundColor:"#FFB6C1",color:"blck",fontFamily:"garamond",margin:0,padding:50}}> Instructor Home Page</h6>
      <Link style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"garamond",display:"block",padding:20}} to={'/instructors'} > All Instructors </Link>
      <Link style={{backgroundColor:"#F8C8DC",color:"black",fontFamily:"garamond",display:"block",padding:20}} to={'/courses'} > All Courses </Link>
      <div style={{backgroundColor:"#FFB6C1",color:"black",fontFamily:"garamond",display:"block",padding:300}} to={"/tasks"}></div>
    </div>
  );    
}

export default HomePageView;