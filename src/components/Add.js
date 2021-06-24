import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { withRouter } from "react-router-dom";

const Add = (props) => {
  const [_listStudent, _setListStudent] = useState(props.listStudent);
  console.log(_listStudent);
  console.log("type", props);
  const { getFieldDecorator } = props.form;
  const itemEdit = _listStudent.filter((el) => el.age == props.match.params.id);
  const getItemEdit = itemEdit[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        const data = {
          name: values.name,
          age: values.age,
          address: values.address,
          cource: values.cource,
          date: values.date,
        };
        if (props.match.path === "/add") {
          _setListStudent([data, ..._listStudent]);
        } else {
          //vi tri
          const indexSelectedEdit = _listStudent.findIndex(
            (el) => el.age === getItemEdit.age
          );
          const listItemTemp = [..._listStudent];
          listItemTemp[indexSelectedEdit] = data;
          _setListStudent([...listItemTemp]);
          console.log("listItemTemp", listItemTemp[indexSelectedEdit]);
        }
      }
    });
  };
  console.log("Received values of form: ", _listStudent);
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator(
          "name",
          { initialValue: props.match.path === "/add" ? "" : getItemEdit.name },
          {
            rules: [{ required: true, message: "Please input your name!" }],
          }
        )(<Input placeholder="Name" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "age",
          { initialValue: props.match.path === "/add" ? "" : getItemEdit.age },
          {
            rules: [{ required: true, message: "Please input your age!" }],
          }
        )(<Input type="number" placeholder="Age" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "address",
          {
            initialValue:
              props.match.path === "/add" ? "" : getItemEdit.address,
          },
          {
            rules: [{ required: true, message: "Please input your address!" }],
          }
        )(<Input placeholder="Address" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "cource",
          {
            initialValue: props.match.path === "/add" ? "" : getItemEdit.cource,
          },
          {
            rules: [{ required: true, message: "Please input your cource!" }],
          }
        )(<Input placeholder="Cource" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator(
          "date",
          { initialValue: props.match.path === "/add" ? "" : getItemEdit.date },
          {
            rules: [{ required: true, message: "Please input your date!" }],
          }
        )(<Input type="text" placeholder="Date" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Form.create({ name: "horizontal_login" })(Add));
