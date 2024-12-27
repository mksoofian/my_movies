"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  pin: string;
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
      toast.success(`Welcome Mike`); // Make user dynamic
      router.push("/");
    } else toast.error(`Incorrect PIN attempt`);
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
