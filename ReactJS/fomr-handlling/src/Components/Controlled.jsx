import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  //   console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      address,
    };

    console.log(data);
  };

  return (
    <form>
      <h1>Controlled Form Handling</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="John Doe"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="john@gmail.com"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="*********"
      />
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="NY, USA"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Controlled;
