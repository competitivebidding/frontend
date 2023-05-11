import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useNoAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('accesstoken')) {
      navigate('/LogIn');
    }
  }, [navigate]);
};

export default useNoAuth;