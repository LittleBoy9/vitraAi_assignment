import React, { useState, useEffect } from "react";
import "rc-tooltip/assets/bootstrap.css";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import data from "../../data/people.json";
import GridView from "./GridView";
import { Button } from "reactstrap";
import * as faIcon from "react-icons/fa";
import "./css/index.css";

export default function Page1() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  const [lowerVal, setLowerVal] = useState(1000);
  const [upperVal, setUpperVal] = useState(4000);

  const [sliderValue, setSliderValue] = useState([lowerVal, upperVal]);

  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);

  useEffect(() => {
    setPeople(data);
    setFilteredPeople(data);
  }, []);

  const marks = {
    1000: {
      style: {
        color: "#5f18eb",
      },
      label: <strong>$1000</strong>,
    },
    4000: {
      style: {
        color: "#5f18eb",
      },
      label: <strong>$4000</strong>,
    },
  };

  const filterData = (_lowerVal, _upperVal) => {
    let temp = people.filter((each) => {
      const balance = Number(each.balance.substring(1).replace(",", ""));
      if (balance >= _lowerVal && balance <= _upperVal) {
        return true;
      }
      return false;
    });
    setFilteredPeople(temp);
  };

  const handleChange = (val) => {
    setSliderValue([val[0], val[1]]);
    setLowerVal(val[0]);
    setUpperVal(val[1]);
    filterData(val[0], val[1]);
  };

  return (
    <div className="container">
      <div className="row slider-container">
        <div className="col-lg-6 col-md-6 col-12">
          <p className="heading text-center">
            Use This Slider For Filtering People By{" "}
            <b className="color">Balance</b>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <Range
            min={1000}
            max={4000}
            step={1}
            marks={marks}
            defaultValue={sliderValue}
            tipFormatter={(value) => `${value}`}
            className="cRange"
            onAfterChange={(e) => handleChange(e)}
          />
          <div className="mt-4 w-100">
            <div className="d-inline-block w-50 text-start p-0 m-0 left-btn">           
              <faIcon.FaAngleLeft
                color="primary"
                className="py-0 px-1 me-1 arrow-button color"
                onClick={() =>
                  handleChange([
                    lowerVal > 1000 ? lowerVal - 1 : lowerVal,
                    upperVal,
                  ])
                }
              />           
              <faIcon.FaAngleRight
                className="py-0 px-1 me-1 arrow-button color"
                onClick={() =>
                  handleChange([
                    lowerVal < upperVal - 1 ? lowerVal + 1 : lowerVal,
                    upperVal,
                  ])
                }
              />

            </div>
            <div className="d-inline-block w-50 text-end p-0 m-0 right-btn">          
              <faIcon.FaAngleLeft
                className="py-0 px-1 me-1 arrow-button color"
                onClick={() =>
                  handleChange([
                    lowerVal,
                    upperVal > lowerVal + 1 ? upperVal - 1 : upperVal,
                  ])
                }
              />         
              <faIcon.FaAngleRight
                className="py-0 px-1 arrow-button color"
                onClick={() =>
                  handleChange([
                    lowerVal,
                    upperVal < 4000 ? upperVal + 1 : upperVal,
                  ])
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="low-upper mb-2">
        <h3>
          ${lowerVal} - ${upperVal}
        </h3>
        &nbsp;
        <p>
          {" "}
          (<b className="color">{filteredPeople.length}</b> People Found)
        </p>
      </div>

      <div className="content">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((eachPeople) => {
            return <GridView key={eachPeople._id} props={eachPeople} />;
          })
        ) : (
          <h1 className="color nodata">No People Found</h1>
        )}
      </div>
    </div>
  );
}
