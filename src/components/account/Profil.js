import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../../Redux/slice/UserS';

const Profil = () => {
  const { userdata, isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getuser());

},[])


  return (
    <div>
      {userdata && userdata.map((user) => (
<h1>{user.name}</h1>      ))}
    </div>
  );
};

export default Profil;
