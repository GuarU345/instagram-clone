export default function LoginForm() {
  return (
    <form className="[&>input]:my-2">
      <input
        type="text"
        name="username"
        placeholder="Phone number, username or email"
        className="placeholder:text-xs placeholder:font-medium placeholder:text-gray-400 block bg-gray-50 border w-9/12 mx-auto py-2 px-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="placeholder:text-xs placeholder:font-medium placeholder:text-gray-400 block bg-gray-50 border w-9/12 mx-auto py-2 px-2 rounded"
      />
      <button className="block w-9/12 text-center bg-sky-400 mx-auto rounded text-white font-semibold p-1 my-4">
        Log in
      </button>
    </form>
  );
}
