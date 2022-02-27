import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../TopNavbar";
import Navbar from "../Navbar";
import "./form.css"

function AdminContact() {
    const token = localStorage.getItem("token");

  const [contactData, setContactData] = useState([]);

  const [loading, setLoading] = useState(true);

  const getList = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/contactUsList`,
        { id: 0 },
        {
          headers: {
            "api-key": "Wicon@123",
            Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setContactData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getList(0);
  }, []);

  if (loading) {
    return (
      <>
        <TopNavbar />
        <Navbar />
        <h1></h1>
      </>
    );
  }
    return (
        <>
            <TopNavbar/>
            <Navbar/>
            <div className="container-fluid">
        <div className="container">
          <p className="page__section__title">Contact</p>
          <div id="tableBlock" className="table__block">
                    <table id="table" >
                        <thead>
                            <tr className="header__border">
                                <th className="sr">No.</th>
                                <th className=" customerSoftware__customerName">Name</th>
                                <th className="available__SMS">Email</th>
                                <th className="status">Subject</th>
                                <th className="restrict__IP">Phone Number</th>
                                <th className="restrict__IP">Description</th>
                        
                            </tr>
                        </thead>
                        <tbody>
                            {contactData.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.description}</td>
                                       
                                       </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
      </div>
    
        </>
    )
}

export default AdminContact
