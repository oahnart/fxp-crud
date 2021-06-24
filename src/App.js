import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";

const Student = [
  {
    name: "tran hao",
    age: 20,
    address: "thuong tin ha noi",
    cource: "reactjs",
    date: "4/9/1999",
  },
  {
    name: "tuan anh",
    age: 25,
    address: "ha tinh",
    cource: "angularJS",
    date: "1/6/1996",
  },
];
function App() {
  const [listStudent, setAddStudent] = useState(Student);
  const [_type, _setType] = useState("add");
  const handleAdd = () => {
    _setType("add");
  };

  const handleEdit = (el) => {
    _setType("edit");
  };

  const _handleDeleteItem = (e) => {
    //tao mang moi voi dieu kien phai khac voi gia tri khi click delete
    const listItemTemp = listStudent.filter((el) => el.name !== e.name);
    setAddStudent(listItemTemp);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={_type === "add" ? "/add" : "/edit/:id"}>
            <Add listStudent={listStudent} type={_type} />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
          <Route path="/">
            <table>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Tuổi</th>
                  <th>Địa chỉ</th>
                  <th>Khóa học</th>
                  <th>Ngày sinh</th>
                  <th colSpan="2">
                    <Link to="/add" onClick={handleAdd}>
                      Add
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listStudent.map((el, index) => (
                  <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.address}</td>
                    <td>{el.cource}</td>
                    <td>{el.date}</td>
                    <td>
                      <Link to={`/edit/${el.age}`} onClick={handleEdit}>
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => _handleDeleteItem(el)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
