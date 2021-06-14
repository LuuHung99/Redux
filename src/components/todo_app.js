import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";

const getLocalTIme = () => {
  let todo = localStorage.getItem("todo");
  console.log(todo);
  if (todo) {
    return JSON.parse(localStorage.getItem("todo"));
    
  } else return [];
  
};

function TodoApp(props) {
  const [data, setData] = useState(getLocalTIme());
  const [value, setValue] = useState("");
  const [text, setText] = useState("Add");
  const [isUpdate, setisUpdate] = useState(false);
  const [index, setIndex] = useState();
  const [mess, setMess] = useState("");

   
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);

  const handleAddTodo = (todo) => {
    if (isUpdate === false) {
      const dataNew = {
        title: todo,
        id: uuidv4(),
      };
      const newData = data.concat(dataNew);
      setData(newData);
      setValue("");
    } else {
      if(data) {
        if (value !== data[index].title) {
          data[index].title = value;
        }
      }
      setText("Add");
      setValue("");
      setisUpdate(false);
    }
  };

  const handleUpdate = (update) => {
    console.log(update);
    setValue(update.title);
    setText("Update");
    setIndex(update.id - 1);
    setisUpdate(true);
  };

  const handleDelete = (seleted) => {
    console.log(seleted);
    const deleteItem = data.filter((e) => e.id !== seleted);
    setData(deleteItem);
    // setMess("Delete Item successfully");
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
        {mess}
      </div>
      <Row style={{ textAlign: "center" }}>
        <Col span={4} style={{ margin: " 0 auto", display: "flex" }}>
          <Input
            style={{ height: "32px", borderColor: "green" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button type="primary" onClick={() => handleAddTodo(value)}>
            {text}
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 20, fontSize: 18 }}>
          {data.length > 0 ? <div>{data.length} Todos </div> : null}
        </Col>
        {data.length > 0 ? (
          data.map((item, index) => (
            <Col
              span={24}
              style={{
                height: "auto",
                padding: "0 500px",
                marginBottom: 10,
                marginTop: 20,
                color: "white",
                cursor: "pointer",
              }}
              key={index}
            >
              <div
                style={{ backgroundColor: "orange", padding: 12, fontSize: 18 }}
              >
                {item.title}
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: 20,
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: -20,
                  }}
                >
                  <EditOutlined
                    style={{ color: "blue" }}
                    onClick={() => handleUpdate(item)}
                  />
                  <DeleteOutlined
                    style={{ color: "red", marginLeft: 10 }}
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            </Col>
          ))
        ) : (
          <h2 style={{ margin: "0 auto", color: "red" }}>No item</h2>
        )}
      </Row>
    </div>
  );
}

export default TodoApp;
