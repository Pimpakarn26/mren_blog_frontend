import React, { useContext, useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const [user, setUser] = useState(null);
  const { user: savedUser, logout } = useAuthContext();

  useEffect(() => {
    setUser(savedUser);
  }, [savedUser]);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Do you want to do logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout",
          text: "Logout successfully!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="navbar bg-blue-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          SE NPRU BLOG
        </a>
      </div>
      <div className="flex-none space-x-4">
        <ul className="menu menu-horizontal px-4">
          {/* ปุ่ม Create New Post จะโชว์เฉพาะเมื่อผู้ใช้ล็อกอิน */}
          {user && (
            <li>
              <a href="create/:id" className="btn btn-outline btn-success">
                Create New Post
              </a>
            </li>
          )}
          {!user ? (
            <>
              <li>
                <a href="/login" className="btn btn-outline btn-primary">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="btn btn-outline btn-secondary">
                  Register
                </a>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error"
              >
                Logout ({user.username})
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
