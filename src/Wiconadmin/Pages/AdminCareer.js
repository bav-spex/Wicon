import axios from "axios";
import React, { useState, useEffect } from "react";
import TopNavbar from "../TopNavbar";
import Navbar from "../Navbar";
import "./form.css"
function AdminCareer() {
  const token = localStorage.getItem("token");

  const [careerData, setCareerData] = useState([]);

  const [loading, setLoading] = useState(true);
  const getList = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/careerList`,
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
        setCareerData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error.response);
      });
  };
  useEffect(() => {
    getList(0);
  }, []);
  // console.log(careerData);

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
    <div>
      <TopNavbar />
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <p className="page__section__title">Career</p>
          <div id="tableBlock" className="table__block">
                    <table id="table" >
                        <thead>
                            <tr className="header__border">
                                <th className="sr">No.</th>
                                <th className=" customerSoftware__customerName">Name</th>
                                <th className="available__SMS">Experience</th>
                                <th className="status">Detail</th>
                                <th className="restrict__IP">Email</th>
                                <th className="restrict__IP">Resume</th>
                        
                            </tr>
                        </thead>
                        <tbody>
                            {careerData.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.experience}</td>
                                        <td>{item.self_description}</td>
                                        <td>{item.email}</td>
                                        <td><a target="_blank" href={item.resume}>Resume</a></td>
                                       
                                       </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCareer;
