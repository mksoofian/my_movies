function LoginForm() {
  return (
    <div className="my-8">
      <div className="flex flex-col justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mt-1 mb-4">Login</h1>
        <div className="flex">
          <label htmlFor="pin" className="mr-2">
            PIN:
          </label>
          <input
            name="pin"
            id="pin"
            type="number"
            min={4}
            max={4}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
