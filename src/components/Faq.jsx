import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Accredian?",
      answer:
        "Accredian is an online platform that offers various educational programs and resources to help learners achieve their goals.",
    },
    {
      question: "How can I refer someone?",
      answer:
        "You can refer someone by clicking the 'Refer & Earn' button on our landing page and filling out the referral form.",
    },
    {
      question: "What programs are available?",
      answer:
        "We offer a range of programs, including professional certifications, workshops, and online courses.",
    },
    {
      question: "Is there a fee for the referral program?",
      answer: "No, participating in our referral program is completely free.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team via the 'Contact Us' section on our website.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-4 px-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </button>
            {activeIndex === index && (
              <p className="py-2 px-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
