import React, { useState, useContext } from "react";
import Input from "../components/Input";
import StarGroup from "./StarGroup";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { DispatchContext, StateContext } from "../App";
import { ADD_COMMENT } from "../store/actions.constants";

const Form = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const initialForm = {
    name: "",
    email: "",
    rate: undefined,
    comment: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleActiveTab = (i) => {
    if (form.rate === 1 && i === 0) {
      return setForm({ ...form, rate: undefined });
    }
    setForm({ ...form, rate: i + 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = state.comments.length;
    const updatedFom = { id, ...form };
    const payload = [...state.comments, updatedFom];
    dispatch({ type: ADD_COMMENT, payload });
    setForm(initialForm);
  };
  console.log(form.rate);
  return (
    <form className="form">
      <Input
        placeholder="name"
        value={form.name}
        type="text"
        name="name"
        onChange={handleChange}
      />
      <Input
        placeholder="email"
        value={form.email}
        type="email"
        name="email"
        onChange={handleChange}
      />
      <StarGroup
        size={30}
        toggleActiveTab={toggleActiveTab}
        rating={form.rate}
      />
      <TextArea
        placeholder="Please tell us your feedback"
        value={form.comment}
        name="comment"
        onChange={handleChange}
      />
      <Button title="Send comment" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
