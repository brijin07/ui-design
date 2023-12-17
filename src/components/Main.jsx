import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    // root 
    <div className="  d-flex  ">
      <Sidebar />

      {/* main container */}
      <div className="main ">
        <div className="headerr d-flex ">
            <h1 className="main_head fw-bold  mt-4 ">
              choose a plan that just right for you !
            </h1>
            <div className="mbtn  mt-4">
            
            <button className="btn1">Monthly</button>
            <button className="btn2">
              Annualy <span>(-10%)</span>
            </button>
          </div>
        </div>
        {/* child container */}
        <div className="main_content">
          <div className="box  ">
            <h4>Basic</h4>
            <h6 style={{lineHeight:"10px", textDecoration:"line-through red"}}>$9.99/mo</h6>
            <h5 style={{lineHeight:"15px"}}>$9.99/mo</h5>
            <button className="btn " style={{lineHeight:"20px", backgroundColor:"#ffe7a9"}}>Get started<i class="fa-solid fa-arrow-right ps-2"></i></button>
            <hr align="center" width="90%" style={{lineHeight:"1px"}}></hr>
            <h6 style={{lineHeight:"5px", fontSize:"13px"}}>What you will get:</h6>
            <h5 style={{lineHeight:"", fontSize:"13px"}} ><i class="fa-solid fa-user fa-xs pe-2"></i>Upto 25 users</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-upload fa-xs pe-2"></i>Upto 25gb storage</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-envelope fa-xs pe-2"></i>Email support</h5>
            <h6><a href="" className="text-dark ms-4">EXPLORE FECTURES<i class="fa-solid fa-caret-up fa-rotate-90"></i></a></h6>



          </div>
          {/* child */}
          <div className="box ">
          <h4>Standard</h4>
            <h6 style={{lineHeight:"10px", textDecoration:"line-through red"}}>$100.9/mo</h6>
            <h5 style={{lineHeight:"15px"}}>$99.9/mo</h5>
            <button className="btn " style={{lineHeight:"20px", backgroundColor:"#fe9494"}}>Get started<i class="fa-solid fa-arrow-right ps-2"></i></button>
            <hr align="center" width="90%" style={{lineHeight:"1px"}}></hr>
            <h6 style={{lineHeight:"5px", fontSize:"13px"}}>What you will get:</h6>
            <h5 style={{lineHeight:"", fontSize:"13px"}} ><i class="fa-solid fa-user fa-xs pe-2"></i>Upto 25 users</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-upload fa-xs pe-2"></i>Upto 25gb storage</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-envelope fa-xs pe-2"></i>Email support</h5>
            <h6><a href="" className="text-dark ms-4">EXPLORE FECTURES<i class="fa-solid fa-caret-up fa-rotate-90"></i></a></h6>
          </div>
          {/* child */}
          <div className="box">
          <h4>Premium</h4>
            <h6 style={{lineHeight:"10px", textDecoration:"line-through red"}}>$299.9/mo</h6>
            <h5 style={{lineHeight:"15px"}}>$199.99/mo</h5>
            <button className="btn " style={{lineHeight:"20px", backgroundColor:"#e7a2ff"}}>Get started<i class="fa-solid fa-arrow-right ps-2"></i></button>
            <hr align="center" width="90%" style={{lineHeight:"1px"}}></hr>
            <h6 style={{lineHeight:"5px", fontSize:"13px"}}>What you will get:</h6>
            <h5 style={{lineHeight:"", fontSize:"13px"}} ><i class="fa-solid fa-user fa-xs pe-2"></i>Upto 25 users</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-upload fa-xs pe-2"></i>Upto 25gb storage</h5>
            <h5 style={{lineHeight:"15px", fontSize:"13px"}}><i class="fa-sharp fa-solid fa-envelope fa-xs pe-2"></i>Email support</h5>
            <h6><a href="" className="text-dark ms-4">EXPLORE FECTURES<i class="fa-solid fa-caret-up fa-rotate-90"></i></a></h6>
          </div>
        </div>
         {/* child */}
        <div className="main2 mt-5">
          
          <div className="box1 d-flex">
            <div className="b1 mt-3 ps-3"> 
                <button className="btnf ">Free forever</button>
                <h3>Free Starter</h3>
                <p>The quickest and easiest way to try Protocols with basic functionalities</p>
                <button className="btn " style={{backgroundColor:"#8ae27f"}}> Get started<i class="fa-solid fa-arrow-right ps-2"></i> </button>
            </div>
            <div className="b2 mt-3">

            <h5 style={{ fontSize:"13px"}}>What you will get:</h5>
            <h4 style={{lineHeight:"", fontSize:"13px"}} ><i class="fa-solid fa-user fa-xs pe-2"></i>Upto 25 users</h4>
            <h4 style={{fontSize:"13px"}}><i class="fa-sharp fa-solid fa-upload fa-xs pe-2"></i>Upto 25gb storage</h4>
            <h5 style={{ fontSize:"13px"}}><i class="fa-sharp fa-solid fa-envelope fa-xs pe-2"></i>Email support</h5>
             <p><i class="fa-solid fa-check-double"></i>Basics of document,Accounting
             ,Notes, and Team Management included</p>
    
            </div>
          </div>

          {/* boxes */}
          <div className="box2 d-flex">
            <div className="b3 mt-3 ps-3"> 
                <button className="btnf1 ">Lets Connect</button>
                <h3>Enterprise Plan</h3>
                <p>Effortless customize and services ensuring the prefect tools for success</p>
                <button className="btn " style={{backgroundColor:"#586bbd"}}> Get started<i class="fa-solid fa-arrow-right ps-2"></i> </button>
            </div>
            <div className="b4 mt-3 ps-2">

            <h5 style={{ fontSize:"13px"}}>What you will get:</h5>
            <h4 style={{lineHeight:"3", fontSize:"13px"}} ><i class="fa-solid fa-user fa-xs pe-2"></i>more 75 users</h4>
            
             <p><i class="fa-solid fa-check-double "></i><span>customization of all other features</span></p>
            </div>

          </div>

        </div>          

        <p className="last-text text-info mt-2" style={{marginLeft:"550px", fontSize:"12px"}}>*Some unique features are provided as add-ons with indivitual plans for each features</p>


      </div>
    </div>
  );
};

export default Main;
