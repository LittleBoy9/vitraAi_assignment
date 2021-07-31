import React, { useState, useEffect } from "react";
import data from "../../data/people.json";
import GridView from "./GridView";
import "./css/index.css";

const Page2 = () => {
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    let temp = data.filter((each) => {
      const balance = Number(each.balance.substring(1).replace(",", ""));

      if (balance <= 2000 && each.isActive == false) {
        return true;
      }
      return false;
    });
    setFilteredPeople(temp);
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="text-center page2-heading">
        People who are not active and whose balance is less than
        <b className="color"> $2000</b>
      </h4>
      <h3 className="text-center mt-3">
        <b className="color">{filteredPeople.length}</b> People Found
      </h3>
      <div className="content">
        {filteredPeople.map((eachPeople) => {
          return <GridView key={eachPeople._id} props={eachPeople} />;
        })}
      </div>
    </div>
  );
};

export default Page2;
