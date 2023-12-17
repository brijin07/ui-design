import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="side_bar  ">
        {/* profile */}
        <div className="profile">
          <img
          
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            width="80"
            height="80"
            className="d-inline-block align-top mt-2"
            alt="React Bootstrap logo"
          />
          <h5 className="" style={{ fontSize: "15px" }}>
            brijin george{" "}
            <i
              className="fa-solid fa-greater-than fa-2xs"
              style={{ color: "#09b3fb" }}
            />
          </h5>
          <p style={{ fontSize: "12px", lineHeight: "1px" }}>
            brijingeorge07@gmail.com
          </p>
        </div>
        {/* contents */}
        <div
          className="icon_hover mt-2 ps-2 mt-4 p-1"
          style={{
            width: "150px",
            borderRadius: "0px 5px 6px 0px",
            textDecoration: "none",
          }}
        >
          <a href="" style={{ textDecoration: "none", color: "black",fontWeight:"bolder" }}>
            <i
              className="fa-solid fa-table-columns pe-2"
              style={{ color: "#0ee1d3" }}
            ></i>
            Dashboard
          </a>
        </div>
        <div
          className="icon_hover mt-2 ps-2 mt-4 p-1"
          style={{
            width: "150px",
            borderRadius: "0px 5px 6px 0px",
            textDecoration: "none",
          }}
        >
          <a href="" style={{ textDecoration: "none", color: "black",fontWeight:"bolder" }}>
            <i
              class="fa-solid fa-plant-wilt pe-2"
              style={{ color: "#0ee1d3" }}
            ></i>
            Perks
          </a>
        </div>{" "}
        <div></div>
        <div
          className="icon_hover mt-2 ps-2 mt-4 p-1"
          style={{
            width: "150px",
            borderRadius: "0px 5px 6px 0px",
            textDecoration: "none",
          }}
        >
          <a href="" style={{ textDecoration: "none", color: "black",fontWeight:"bolder" }}>
            <i
              class="fa-solid fa-puzzle-piece pe-2"
              style={{ color: "#0ee1d3" }}
            ></i>
            Addons
          </a>
        </div>
        <div
          className="icon_hover mt-2 ps-2 mt-4 p-1"
          style={{
            width: "150px",
            borderRadius: "0px 5px 6px 0px",
            textDecoration: "none",
          }}
        >
          <a href="" style={{ textDecoration: "none", color: "black",fontWeight:"bolder" }}>
            <i
              class="fa-solid fa-circle-question pe-2"
              style={{ color: "#0ee1d3" }}
            ></i>
            FAQ
          </a>
        </div>
        <div
          className="icon_hover mt-2 ps-2 mt-4 p-1"
          style={{
            width: "150px",
            borderRadius: "0px 5px 6px 0px",
            textDecoration: "none",
          }}
        >
          <a href="" style={{ textDecoration: "none", color: "black", fontWeight:"bolder" }}>
            <i
              class="fa-solid fa-message pe-2"
              style={{ color: "#0ee1d3" }}
            ></i>
            Support
          </a>
        </div>
        <button
          className="  btn btn-border 0 text-info mt-5 ms-5"
          style={{ background: "none", border: "none",fontWeight:"bolder" }}
        >
          Log out{" "}
          <i
            class="fa-solid fa-power-off fa-xs"
            style={{ color: "#0ee1d3" }}
          ></i>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
