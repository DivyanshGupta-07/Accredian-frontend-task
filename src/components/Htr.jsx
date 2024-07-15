import React from "react";

const HowToRefer = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How to Refer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
            <h3 className="font-semibold text-xl mb-2">1. Fill Your Details</h3>
            <p>Provide your name and email address.</p>
          </div>
          <div className="flex items-center">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-3-3v6"
                />
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
            <h3 className="font-semibold text-xl mb-2">
              2. Provide Referee's Details
            </h3>
            <p>Enter your friend's name and email address.</p>
          </div>
          <div className="flex items-center">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-3-3v6"
                />
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
            <h3 className="font-semibold text-xl mb-2">3. Submit Referral</h3>
            <p>Click on the submit button to send the referral.</p>
          </div>
          <div className="flex items-center">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-3-3v6"
                />
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 w-64">
            <h3 className="font-semibold text-xl mb-2">4. Earn Rewards</h3>
            <p>Get rewarded for every successful referral!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRefer;
