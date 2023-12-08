import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Swal from "sweetalert2";

function Forms({ submit, setSubmit }) {
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    url: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (Object.values(data).some((val) => val === "")) {
      setErr("values error");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Input field cannot be left empty.! `,
      });
      return;
    }
    if (!data.url.startsWith("https://")) {
      setErr("img error");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Image type must be url.!",
      });
      return;
    }
    if (data.password.length < 8) {
      setErr("img error");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Password must be at least 8 characters.",
      });
      return;
    }
    const updateUsername = data.username.trim();
    console.log(updateUsername.length);
    if (updateUsername.length <= 3) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Username must be at least 3 characters.",
      });
      return;
    }

    setSubmit([...submit, data]);
    setData({
      ...data,
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      url: "",
    });
  };

  ///change icon
  const [showpass, setShowpass] = useState(false);

  const changeIcon = () => {
    setShowpass(!showpass);
  };

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Image Url"
            name="url"
            value={data.url}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Recipient's username"
              type={showpass ? "text" : "password"}
              value={data.password}
              onChange={handleChange}
              name="password"
            />
            <Button onClick={changeIcon}>
              {showpass ? <FaEyeSlash /> : <IoEyeSharp />}
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mx-auto d-flex"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Forms;
