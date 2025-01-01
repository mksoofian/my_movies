"use client";
import { useAuth } from "@/app/auth-provider";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  pin: string;
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const { loginUser } = useAuth();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Timer delay for submission loading spinner animation
    setIsLoading(true);
    setTimeout(() => {
      loginUser(data.pin); // Attempts to log in user with pin from input
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-8">
        <div className="flex flex-col justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
          {/* <h1 className="text-xl font-bold mt-1 mb-8">Login</h1> */}
          <div className="flex flex-col">
            <label htmlFor="pin" className="mr-2 mb-1 font-bold">
              Enter your PIN
            </label>
            <input
              type="number"
              // placeholder="Four numbers only"
              className="p-2 text-sm"
              {...register("pin", {
                required: "Field is required",
                // valueAsNumber: true,
                maxLength: {
                  value: 4,
                  message: "must be 4 digits",
                },
                minLength: {
                  value: 4,
                  message: "must be 4 digits",
                },
              })}
            />
            {errors.pin && (
              <span className="text-red-600">{errors.pin.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={
              //   watch("pin") === "" || watch("pin") === undefined ||
              isLoading
            }
            className={` text-white rounded-md mt-4 w-20 py-1 px-2 ${
              watch("pin") === "" || watch("pin") === undefined
                ? "bg-gray-400"
                : "bg-black  hover:bg-gray-700"
            }`}
          >
            {isLoading ? (
              <CircularProgress size="15px" color="info" />
            ) : (
              "submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
