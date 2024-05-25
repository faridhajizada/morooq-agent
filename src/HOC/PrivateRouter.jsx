import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

function PrivateRouter({ children }) {
  const isAuthenticated = useSelector((state) => {
    return state.auth.AccessToken;
  });
  console.log('🚀 ~ isAuthenticated ~  isAuthenticated:', isAuthenticated);

  const AccessToken = Cookies.get('AccessToken');
  console.log('🚀 ~ PrivateRouter ~  AccessToken:', AccessToken);

  if (!AccessToken) {
    return <Navigate to="/" />;
  }

  return children;
}
PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRouter;
