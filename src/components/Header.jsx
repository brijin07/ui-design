import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  return (
    <>
      <div  className='navv container-fluid '>
      <Navbar expand="lg" className="">
      <Navbar.Brand href="#home">
            <img
              src="https://st2.depositphotos.com/3867453/5604/v/450/depositphotos_56046399-stock-illustration-letter-p-logo-icon-design.jpg"
             
              className="img_nav d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
           
           <div className='nav_profile ms-auto me-2'>
           <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              width="30"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            xyz enterprises pvt.Ltd
           </div>
       
       <div className='drop_down bg-light me-5'>
             <NavDropdown title="" id="basic-nav-dropdown " disabled>
    
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
       </div>
    </Navbar>
      </div>
    </>
  )
}

export default Header