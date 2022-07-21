import React, { useEffect } from 'react';
import RelatedProjects from './components/RelatedProjects';
import Technology from './components/Technology';

import '../../assets/css/support-details.css';
import '../../assets/css/support-details.css';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from './redux/actions';

const Supporter = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector(({ supporter }) => supporter);
  useEffect(() => {
    dispatch(getProject());
  }, []);
  return (
    <>
      {loader ? (
        <div className=" d-flex justify-content-center m-2">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <>
          <Technology />
          <RelatedProjects />
        </>
      )}
    </>
  );
};

export default Supporter;
