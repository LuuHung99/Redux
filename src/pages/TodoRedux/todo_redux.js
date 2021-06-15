import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions/index";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";

function TodoRedux(props) {
  const dispatch = useDispatch();
  const dataTodo = useSelector((state) => state.todo.dataTodo);
  const [value, setValue] = useState("");
  const [data, setData] = useState(dataTodo);
  
  const handAddTodo = (todo) => {
     console.log(todo);
   const dataNew = dispatch(
      actions.addTodo({
        id: uuidv4(),
        title: todo,
      })
    );
    const Newdata = data.concat(dataNew);
    setData(Newdata);
    console.log(data);
    setValue("");
  };
 
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          paddingTop: 100,
          marginBottom: 20,
          color: "red",
          fontSize: 16,
        }}
      >
        Update thanh cong
      </div>
      <Row style={{ textAlign: "center" }}>
        <Col span={4} style={{ margin: " 0 auto", display: "flex" }}>
          <Input
            style={{ height: "32px", borderColor: "green" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="primary" onClick={() => handAddTodo(value)}>
            Add
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 20, fontSize: 18 }}>
          <div>{data.length} Todos </div>
        </Col>
        {data.data > 0 ?   (
          <Col
            span={24}
            className="todo"
            style={{
              height: "auto",
              padding: "0 500px",
              marginBottom: 10,
              marginTop: 20,
              color: "white",
              cursor: "pointer",
            }}
          >
            <div
              style={{ backgroundColor: "orange", padding: 12, fontSize: 18 }}
            >
                {data.title}
              <div
                style={{
                  cursor: "pointer",
                  fontSize: 20,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: -20,
                }}

              >
                <EditOutlined style={{ color: "blue" }} />
                <DeleteOutlined style={{ color: "red", marginLeft: 10 }} />
              </div>
            </div>
          </Col>
        ) : (
          <h2 style={{ margin: "0 auto", color: "red" }}>No item</h2>
        )}
      </Row>
    </div>
  );
}

export default TodoRedux;
