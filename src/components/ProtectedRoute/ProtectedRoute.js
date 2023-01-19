import React from 'react';
import { Navigate } from "react-router-dom";
import './ProtectedRoute.css';

function ProtectedRoute ({ element: Component, ...props  }) {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
)}

export default ProtectedRoute; 