import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [photoURL, setURL] = useState(user.photoURL);
  const [success, setSuccess] = useState("");

  const handleUpdateProfile = () => {
    if (!user) return;

    updateProfile(user, { displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        setSuccess("✅ Your profile has been successfully updated!");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("Error ❌ your profile could not be updated.");
      });
  };
  return (
    <div className="max-w-11/12 mx-auto">
      <nav className="sticky top-0 z-50">
        <Navbar></Navbar>
      </nav>
      <main>
        <h1 className="text-3xl text-center text-base-300 font-bold my-10">
          Your Profile
        </h1>

        <div className="w-11/12 lg:w-1/2 mx-auto my-10 p-10 bg-base-200 rounded">
          <div className="flex flex-col ">
            <img
              src={photoURL}
              alt={displayName}
              className="w-30 h-30 rounded-full mx-auto mb-4"
            />
            <label className="label mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input w-full mb-3"
            />
            <label className="label mb-2">Photo URL</label>
            <input
              type="url"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setURL(e.target.value)}
              className="input w-full mb-3"
            />
            <label className="label mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input w-full mb-3"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            className="btn btn-primary w-full my-4"
          >
            Save Updates
          </button>

          {success && (
            <p className="text-center my-4 text-base-300 bg-white p-2 rounded-full">
              {success}
            </p>
          )}
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default MyProfile;
