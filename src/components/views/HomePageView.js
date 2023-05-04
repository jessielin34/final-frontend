import { Link } from 'react-router-dom';

const HomePageView = () => {
  return (
    <div>
      <h6 style={{backgroundColor:"#FFB6C1",color:"black",fontFamily:"Roboto",margin:10,padding:200,}}> Instructor Home Page</h6>
      <Link style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}} to={'/instructors'} > All Instructors </Link>
      <Link style={{backgroundColor:"#F8C8DC",color:"black",fontFamily:"Roboto",display:"block",padding:20}} to={'/courses'} > All Courses </Link>
      <div style={{backgroundColor:"#FFB6C1",color:"black",fontFamily:"Roboto",display:"block",padding:300}} to={"/tasks"}></div>
    </div>
  );    
}

export default HomePageView;