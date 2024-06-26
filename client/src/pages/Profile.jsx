const Profile = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          id="username"
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="border p-3 rounded-xl"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="border p-3 rounded-xl"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
