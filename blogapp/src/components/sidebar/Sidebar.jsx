import { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats((res.data));
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">About Me</div>
        <img src="https://resourcefulmearttherapy.ca/wp-content/uploads/2021/01/ADK-0244-1116x1123.jpg" alt="about" className="sidebarImg" />
        <p>
        Welcome to Wordsmith Haven! We are a passionate community dedicated to write and share Blogs. 
        Through insightful articles, we share knowledge, experiences, and creative perspectives on key topics. 
        Join us in exploring various themes and stay connected for regular updates that aim to inspire, inform, 
        and foster a sense of community. Whether you're here for expertise, personal growth, or simply to indulge in engaging content,
         we're thrilled to have you on this journey with us. Welcome to a space where ideas thrive, and connections flourish!
        </p>
      </div>
 
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                  {cats.map((c)=> (
                      <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItem">{c.name}</li></Link>
                       
                  ))}
                   
                    
                </ul>
        
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
                <div className="socialContainer">
                    <i className="sidebarIcons fa-brands fa-instagram"></i>
                    <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcons fa-brands fa-linkedin"></i>
                    <i className="sidebarIcons fa-brands fa-square-x-twitter"></i>
                </div>
        </div>
    </div>
  )
}
