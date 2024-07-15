import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import Htr from "../components/Htr";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleOpen = () => {
    const isLoggedIn = Cookies.get("loggedIn");
    if (isLoggedIn) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };
  const handleClose = () => {
    setOpen(false);
    setForm({
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://accredian-backend-task-yq5k.onrender.com/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit referral");
      }

      alert("Referral submitted successfully!");
      handleClose();
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("An error occurred while submitting the referral.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtLZx6uac8QQv0DpZZO9m0z2nkuk67cmnM4pPGIp740g9YcPQGXKqVPRokmaXGQn6oWClLOY6EiDsTQvwVTXRiVLiaXmBpfRr8J9BM6lb2Uij9oO8nNKkcLb36Ijh5tXFAfutAGNdAXlhUsm9g1z8mdg6ZmpDIc-HKINnQmqVyghA0eNFGnRZjDEmG5lwKjG-6W9bWuUvaW8PF5UFSYWTFfKCJSrOGMAVs4FLGqejMwMr67poz7ymFbXJKCgasvcdiRZFMEYErLET2vsO592FjPd8oc9w4kl~OQBqWmWXfXCAqZOeUhV~Yt9PReTqrrwHP8J8rHRqfmiHQMc6X8kfw__"
          alt="Refer and Earn"
          className="w-90 max-w-md mb-6 rounded shadow-lg"
        />
        <p className="text-center text-lg text-gray-700">
          Refer and earn rewards for each friend you refer who signs up for our
          programs! NOTE- you can refer to one user only !
        </p>
        <button
          onClick={handleOpen}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 font-bold"
        >
          Refer Now
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Refer a Course</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="referrerName"
                  value={form.referrerName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="referrerEmail"
                  value={form.referrerEmail}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="refereeName"
                  value={form.refereeName}
                  onChange={handleChange}
                  placeholder="Friend's Name"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="refereeEmail"
                  value={form.refereeEmail}
                  onChange={handleChange}
                  placeholder="Friend's Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <Htr />
      <Faq />
      <Footer />
    </>
  );
};

export default Homepage;
