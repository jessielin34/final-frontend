import { Link } from "react-router-dom";
const NewCourseView = (props) => {
    const {handleChange, handleSubmit, error } = props;
  
    return (
      <div className="root">
        <div className="formContainer">
          <div className="formTitle">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              New Course
            </h2>
          </div>
          <form style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20, textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="title" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <button type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>
          {error!=="" && <p>{error}</p>}
          </div>
          <div style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}}>
            <Link to={"/"}>Home Page</Link>
          </div>
          <div style={{backgroundColor:"#FFC0CB",color:"black",fontFamily:"Roboto",display:"block",padding:20}}></div>
        </div>
    );
  };
  
  export default NewCourseView;