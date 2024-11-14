import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ chidlren, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    //detailed explanation at the end
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    //agar dono condition false hai matlab user authenticated bhi hai aur current route ke 
    //liye bhi authentication chaiye matlab everything is fine toh children yaani page show kardo 
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{chidlren}</>;
};

export default Protected;
// Step-by-Step Breakdown of the if Conditions:
// First Condition: if (authentication && authStatus !== authentication):

// This condition checks if authentication is true (meaning you want the user to be authenticated on this page).
// Then, it checks if authStatus is not equal to authentication (i.e., the user's authentication status is different from the required status).
// What happens here?
// If the authentication prop is true (meaning the page requires authentication) and the authStatus is false (meaning the user is not logged in), the user will be redirected to the login page (/login).


// Second Condition: else if (!authentication && authStatus !== authentication):
//ye conditon tab occur hogi when user is trying to access login or signup page jabki wo already logged in hai toh usse home bejo simple.....
// This condition checks if authentication is false (meaning you do not want the user to be authenticated on this page).
// It then checks if authStatus is not equal to authentication (i.e., the user's authentication status is different from the required status).
// What happens here?
// If authentication is false (i.e., the page is for unauthenticated users) and authStatus is true (meaning the user is logged in), the user will be redirected to the home page (/).



// setLoader(false):
// After checking the conditions, setLoader(false) is called to stop showing the loading message ("Loading..."), and the actual children content is displayed (<>{children}</>).
// This ensures the page doesn't show a loading state once the authentication check is complete.