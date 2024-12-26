"use client";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  pin: string;
  //   pinExample: string;
};

function LoginForm() {
  const dbPin = process.env.NEXT_PUBLIC_TEST_PIN;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.pin == dbPin) {
      ///// logic for successful attempt
      // login success animation
      // redirect to home
      router.push("/");
    } else console.log(`Incorrect PIN attempt`);
  };

  //   console.log(watch("pin"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-8">
        <div className="flex flex-col justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
          {/* <h1 className="text-xl font-bold mt-1 mb-8">Login</h1> */}
          <div className="flex flex-col">
            <label htmlFor="pin" className="mr-2 mb-1 font-bold">
              Enter PIN
            </label>
            <input {...register("pin", { required: true })} />
            {errors.pin && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            disabled={watch("pin") === "" || watch("pin") === undefined}
            className={` text-white rounded-md mt-4 w-20 py-1 px-2 ${
              watch("pin") === "" || watch("pin") === undefined
                ? "bg-gray-400"
                : "bg-black  hover:bg-gray-700"
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
