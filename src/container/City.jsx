import React from "react";

function City(props) {
  console.log(props.cn);

  return (
    <div>
      <h4>
        My City is:{" "}
        {props.cn === "India"
          ? "Surat"
          : props.cn === "Canada"
            ? "Toronto"
            : props.cn === "USA"
              ? "New York"
              : props.cn === "UAE"
                ? "Abu Dhabi"
                : "nothing to show"}
      </h4>
    </div>
  );
}

export default City;
