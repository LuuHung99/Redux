import React,  {useState} from "react";
import { connect } from "react-redux";

function Color(props) {

  const [value, setValue] = useState("");
  const [color, changeColor] = useState(props.changeColor);

  const handleChangeColor = (color) => {
    changeColor(color);
    setValue("")
  }
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        hello
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={() => handleChangeColor(value)}>CHange color</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    changeColor: state.colors,
  };
};

export default connect(mapStateToProps, {})(Color);
