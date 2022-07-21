import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import countries from '../../Common/country';
import Countries from '../../Common/country';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { resetMessages, Supporter } from '../redux/actions';
import payment from '../../../assets/img/paymentSuccess.svg';

const emailRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const ModalPayment = (props) => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

  const { successMessage } = useSelector((state) => state?.supporter);
  useEffect(() => {
    if (successMessage) {
      setModalShow3(true);
      setData({});
      dispatch(resetMessages());
    }
  }, [successMessage]);
  const Validation = (value) => {
    const errors = {};
    if (!value.first_name) errors.first_name = 'First Name is Required..!';
    if (!value.last_name) errors.last_name = 'Last Name is Required..!';
    if (!value.email) errors.email = 'Email is Required..!';
    if (value.email && !emailRegex.test(value.email))
      errors.email = 'Enter valid email';
    setError({ ...errors });
    if (isEmpty(errors)) {
      setModalShow2(true);
      setModalShow(false);
      setIsSubmited(false);
    }
  };
  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
    name === 'email' && !!isSubmited
      ? !!emailRegex.test(value)
        ? setError({ ...error, [name]: '' })
        : setError({ ...error, [name]: 'Enter Valid Email..!' })
      : value
      ? setError({ ...error, [name]: '' })
      : setError({ ...error, [name]: `${name} is required` });
  };
  const handleSubmit = () => {
    dispatch(Supporter(data));
  };

  return (
    <>
      <button
        className="btn-1"
        variant="primary"
        onClick={() => setModalShow(true)}>
        Donate
      </button>
      <Modal
        show={modalShow}
        size="xl"
        centered
        className="paymentModal"
        id="paymentModal">
        <ModalHeader>
          <h2 className="modal-title" id="paymentModalLabel">
            Please tell us about yourself
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setData({});
              setModalShow(false);
            }}
          />
        </ModalHeader>
        <ModalBody>
          <form action="#">
            <div className="about-yourself">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-block">
                    <label htmlFor="" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="first_name"
                      defaultValue={data.first_name}
                      onChange={({ target: { name, value } }) =>
                        handleChange(name, value)
                      }
                    />
                    {error.first_name && (
                      <p style={{ color: 'red' }}>{error.first_name}</p>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-block ms-lg-auto">
                    <label htmlFor="" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_name"
                      defaultValue={data.last_name}
                      onChange={({ target: { name, value } }) =>
                        handleChange(name, value)
                      }
                    />
                    {error.last_name && (
                      <p style={{ color: 'red' }}>{error.last_name}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-block">
                    <label htmlFor="" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      defaultValue={data.email}
                      name="email"
                      onChange={({ target: { name, value } }) =>
                        handleChange(name, value)
                      }
                    />
                    {error.email && (
                      <p style={{ color: 'red' }}>{error.email}</p>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-block  ms-lg-auto">
                    <label htmlFor="" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      defaultValue={data.phone}
                      onChange={({ target: { name, value } }) =>
                        handleChange(name, value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-block">
                    <label htmlFor="" className="form-label">
                      Country
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="State/Province"
                      name="location"
                      value={countries[country]?.country}
                      onChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                        setCountry(e.target.options.selectedIndex - 1);
                      }}>
                      <option value="">Select Country</option>
                      {Countries.map((country, index) => {
                        return (
                          <option key={index} value={country.country}>
                            {country.country}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-block  ms-lg-auto">
                    <label htmlFor="" className="form-label">
                      State/Providence
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="State/Province"
                      value={data.state}
                      name="state"
                      onChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                      }}>
                      <option value="" disabled>
                        State/Providence
                      </option>
                      {Countries[country]?.states.map((state, index) => {
                        return (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-1 btn-back" disabled>
            <span>Back</span>
            <img src="../../../assets/img/arrw-rgt.svg" alt="" />
          </button>
          <button
            type="button"
            className="btn btn-1"
            onClick={() => {
              Validation(data);
              setIsSubmited(true);
            }}>
            Next <img src="../../../assets/img/arrw-rgt.svg" alt="" />
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        show={modalShow2}
        size="xl"
        centered
        className="paymentModal"
        id="paymentModal">
        <ModalHeader>
          <h2 className="modal-title" id="paymentModalLabel">
            Choose Payment Method
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setModalShow2(false)}
          />
        </ModalHeader>
        <ModalBody>
          <form action="#">
            <div id="paymentMethod">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-block">
                    <label htmlFor="" className="form-label">
                      Currency
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Currency"
                      defaultValue="ETH"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-block ms-lg-auto">
                    <label htmlFor="" className="form-label">
                      Donating Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Donating Amount"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="disclaimer">
                    <h3>Disclaimers :</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-1 btn-back"
            onClick={() => {
              Validation(data);
              setModalShow2(false);
              setModalShow(true);
            }}>
            <span>Back</span>
            <img src="../../../assets/img/arrw-rgt.svg" alt="" />
          </button>
          <button
            type="button"
            className="btn btn-1 proceed ms-md-auto"
            onClick={() => {
              handleSubmit();
              setModalShow2(false);
            }}>
            Proceed to Payment{' '}
            <img src="../../../assets/img/arrw-rgt.svg" alt="" />
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        show={modalShow3}
        className="paymentModal paymentSuccess"
        id="paymentSuccessModal"
        size="l">
        <ModalHeader>
          <button
            onClick={() => setModalShow3(false)}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </ModalHeader>
        <ModalBody>
          <div className="success-contents d-flex flex-column justify-content-center align-items-center">
            <img src={payment} className="mx-auto" alt="" />

            <h3>Great! your payment was successful</h3>
            <p>you can now continue using Decrowd</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-1 btn-ok"
            onClick={() => setModalShow3(false)}>
            OK
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalPayment;
