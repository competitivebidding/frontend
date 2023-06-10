import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const useNoAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get('accesstoken')) {
      navigate('/LogIn');
    }
  }, [navigate]);
};

export default useNoAuth;