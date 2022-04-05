// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { withAuthenticationRequired } from '@auth0/auth0-react';
// import  Loading  from '../components/Loading/loading';

// const ProtectedRoute = ({ component, ...args }) => (
  

//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => <Loading />,
//     })}
//     {...args}
//   />
   
 
// );

// export default ProtectedRoute;


import { withAuthenticationRequired } from "@auth0/auth0-react";
import  Loading  from '../components/Loading/loading';



 const ProtectedRoute = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};
export default ProtectedRoute;