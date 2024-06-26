import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  const logoutButtonHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-teal-100 hover:text-teal-950 rounded-full"
      onClick={logoutButtonHandler}
    >
      LogoutButton
    </button>
  );
}

export default LogoutButton;
