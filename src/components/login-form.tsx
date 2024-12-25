"use client";
import { useState } from "react";

function LoginForm() {
  const [pin, setPin] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (pin == process.env.TEST_PIN) {
      console.log(
        `PIN match! pin ${pin} vs ${process.env.NEXT_PUBLIC_TEST_PIN}`
      );
    } else
      console.log(
        `Incorrect submission: pin "${pin}" vs "${process.env.NEXT_PUBLIC_TEST_PIN}"`
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-8">
        <div className="flex flex-col justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
          {/* <h1 className="text-xl font-bold mt-1 mb-8">Login</h1> */}
          <div className="flex flex-col">
            <label htmlFor="pin" className="mr-2 mb-1 font-bold">
              Enter PIN
            </label>
            <input
              name="pin"
              id="pin"
              type="text"
              className="w-full rounded-sm"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              //   placeholder="four digits"
            />
          </div>
          <button
            type="submit"
            disabled={pin === ""}
            className={` text-white rounded-md mt-4 w-20 py-1 px-2 ${
              pin === "" ? "bg-gray-400" : "bg-black  hover:bg-gray-700"
            }`}
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
