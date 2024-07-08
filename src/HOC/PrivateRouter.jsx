import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

function PrivateRouter({ children }) {
  const isAuthenticated = useSelector((state) => {
    return state.auth.AccessToken;
  });

  const AccessToken = Cookies.get('AccessToken');

  if (!AccessToken) {
    return <Navigate to="/" />;
  }

  return children;
}
PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRouter;
