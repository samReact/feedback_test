import React, { useState, useContext, useEffect } from "react";
import validator from "validator";
import moment from "moment";

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
  const [ready, setReady] = useState(false);
  const [errors, setErrors] = useState([]);
  const [errorEmailFormat, setErrorEmailFormat] = useState(false);

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
    let date = moment().format("MMM D, YYYY.");

    const updatedData = [...state.data];
    let handleRating = () => {
      if (form.rate === 5) {
        updatedData[0]++;
      }
      if (form.rate === 4) {
        updatedData[1]++;
      }
      if (form.rate === 3) {
        updatedData[2]++;
      }
      if (form.rate === 2) {
        updatedData[3]++;
      }
      if (form.rate === 1) {
        updatedData[4]++;
      }
    };
    const id = state.comments.length;
    const updatedForm = { id, ...form, date };
    const comments = [...state.comments, updatedForm];
    handleRating();
    dispatch({ type: ADD_COMMENT, payload: { comments, data: updatedData } });
    setForm(initialForm);
    setReady(false);
  };

  const verification = (e) => {
    let updatedErrors = [...errors];
    if (e.target.name === "email" && form.email.length > 0) {
      if (!validator.isEmail(form.email)) {
        updatedErrors.push(e.target.name);
        setErrors(updatedErrors);
        return setErrorEmailFormat(true);
      }
    }
    if (validator.isEmpty(e.target.value)) {
      updatedErrors.push(e.target.name);
      return setErrors(updatedErrors);
    }
  };

  const handleFocus = (e) => {
    let updatedErrors = [...errors];
    updatedErrors = updatedErrors.filter((error) => error !== e.target.name);
    setErrors(updatedErrors);
  };

  useEffect(() => {
    if (
      !validator.isEmpty(form.name) &&
      !validator.isEmpty(form.email) &&
      !validator.isEmpty(form.comment) &&
      validator.isEmail(form.email) &&
      form.rate !== undefined
    ) {
      return setReady(true);
    }
    setReady(false);
  }, [form]);

  return (
    <form className="form">
      <Input
        placeholder="name"
        value={form.name}
        type="text"
        name="name"
        onChange={handleChange}
        errorMessage="Last name is required"
        error={errors.find((error) => error === "name")}
        onBlur={verification}
        onFocus={handleFocus}
      />
      <Input
        placeholder="email"
        value={form.email}
        type="email"
        name="email"
        errorMessage={
          errorEmailFormat
            ? "Valid email address is required"
            : "Email is required"
        }
        onChange={handleChange}
        error={errors.find((error) => error === "email")}
        onBlur={verification}
        onFocus={handleFocus}
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
        errorMessage="Comment is required"
        error={errors.find((error) => error === "comment")}
        onBlur={verification}
        onFocus={handleFocus}
      />
      <Button title="Send comment" onClick={handleSubmit} disabled={!ready} />
    </form>
  );
};

export default Form;
