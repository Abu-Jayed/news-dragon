import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <div className='text-danger fs-1 text-center mt-2'>Loading</div>
  }

  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default PrivateRoute;