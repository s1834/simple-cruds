"use client";

import React, { useState } from "react";

export default function DetailsForm() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Full name: ", fullname);
    console.log("Phone: ", phone);
    console.log("Email: ", email);
    console.log("hobbies: ", hobbies);

    const res = await fetch("api/detail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phone,
        email,
        hobbies,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setFullname("");
      setPhone("");
      setEmail("");
      setHobbies("");
    }
    console.log(error);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-top flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            id="phone"
            placeholder="0123456789"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="hobbies">Your Hobbies</label>
          <textarea
            onChange={(e) => setHobbies(e.target.value)}
            value={hobbies}
            className="h-32"
            id="hobbies"
            placeholder="movies, dancing, cricket, etc."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Save
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
