import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './../../redux/features/auth/authSlice';
import Cookies from 'js-cookie';

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove('AccessToken');
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
