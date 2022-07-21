import React, { useEffect, useRef, useState } from "react";
import { Buffer } from "buffer";
import Select from "react-select";
import DatePicker from "react-date-picker";
import ReactSelect from "../Common/ReactSelect";
import Countries from "../Common/country";
import { options, Social, raising } from "./components/Options";
import { useDispatch, useSelector } from "react-redux";
import { addSchoolDetails } from "./redux/actions";
import { isEmpty } from "lodash";
import moment from "moment";
import SuccessModal from "./components/SuccessModal";

const emailRegex = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

const Informations = () => {
  const [country, setCountry] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [modalShow, setModalShow] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const [image,setImage]=useState("")

  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

  const dispatch = useDispatch();
  const { successMessage } = useSelector((state) => state.schools);

  const handleSubmit = () => {
    console.log(data, "handle sub,mi");
    dispatch(addSchoolDetails(data));
    // setData({});
  };

  useEffect(() => {
    if (successMessage) setModalShow(true);
  }, [successMessage]);

  const onButtonClick = () => {
    setCurrentUrl("");
  };

 const  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const epochConversion = (e) => moment(e).unix();

  const Validation = (value) => {
    const errors = {};
    if (!value.title) errors.title = "School Name is Required..!";
    if (!value.board) errors.board = "Board is Required..!";
    if (!value.categories) errors.categories = " Required..!";
    if (value.email && !emailRegex.test(value.email))
      errors.email = "Enter valid email";
    setError({ ...errors });
    if (isEmpty(errors)) handleSubmit();
  };
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // const handleImgChange = (event) => {
  //   console.log(event);
  //   const fileUploaded = event.target.files[0];
  //   setData({
  //     ...data,
  //     img: fileUploaded,
  //   });
  // };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
    name == "email" && !!isSubmited
      ? !!emailRegex.test(value)
        ? setError({ ...error, [name]: "" })
        : setError({ ...error, [name]: "Enter Valid Email..!" })
      : value
      ? setError({ ...error, [name]: "" })
      : setError({ ...error, [name]: `${name} is Required..!` });
  };

  return (
    <>
     
      {modalShow ? (
        <SuccessModal onClick={setModalShow} />
      ) : (
        <div className="add-campaign-sec">
          <div className="container custom-container">
            <div className="add-campaign-title">
              <h2 className="sub-head">School Informations</h2>
            </div>
            <form action="#">
              <div className="wallet-address-block">
                <div className="form-block">
                  <label htmlFor="" className="form-label">
                    School website link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    name="schoolLink"
                    value={data.schoolLink || ""}
                    onChange={({ target: { name, value } }) =>
                      handleChange(name, value)
                    }
                  />
                </div>
              </div>
              <div className="campaign-form-block">
                <div className="campaign-sub-title">
                  <h3>Details</h3>
                </div>
                <div className="add-form-cover">
                  <div className="row add-form-row gx-md-5">
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Institute Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          name="title"
                          value={data.title || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        />
                        {error.firstname && (
                          <p style={{ color: "red" }}>{error.firstname}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Board
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          name="board"
                          value={data.board || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        />
                        {error.lastname && (
                          <p style={{ color: "red" }}>{error.lastname}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Categories
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          name="categories"
                          value={data.categories || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        />
                        {error.email && (
                          <p style={{ color: "red" }}>{error.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          knownFor
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          name="knownFor"
                          value={data.knownFor || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Location
                        </label>
                        <select
                          type="text"
                          className="form-control"
                          placeholder="State/Province"
                          value={data.location}
                          name="location"
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                            setCountry(e.target.options.selectedIndex - 1);
                          }}
                        >
                          <option value="">Pincode</option>
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
                    <div className="col-md-4 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label"></label>
                        <select
                          type="text"
                          className="form-control"
                          placeholder="State/Province"
                          value={data.state}
                          name="state"
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                          }}
                        >
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
              </div>

              <div className="campaign-form-block campaign-info-block">
                <div className="campaign-sub-title">
                  <h3>Description</h3>
                </div>
                <div className="add-form-cover">
                  <div className="row add-form-row gx-md-5">
                    <div className="col-md-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          ownership
                        </label>
                        <div className="custom-2-box">
                          <Select
                            className="custom-selct-2"
                            options={options}
                            onChange={(value) =>
                              handleChange("ownership", value.label)
                            }
                            value={data.ownership?.label || ""}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          coEd
                        </label>
                        <div className="select-input-block form-control">
                          {/* <input
                          type="text"
                          className="input-left"
                          name="amount"
                          value={data.amount || ''}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        /> */}
                          <div className="custom-select-box">
                            <select
                              className="form-control"
                              aria-label="Default select example"
                              defaultValue=""
                              name="coEd"
                              onChange={({ target: { name, value } }) =>
                                handleChange(name, value)
                              }
                            >
                              <option value="boys">Boys only</option>
                              <option value="girls">Girls only</option>
                              <option value="both">Both</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Admission start Date
                        </label>
                        <div className="datepicker-box">
                          <DatePicker
                            onChange={(e) => handleChange("startDate", e)}
                            value={data.startDate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          End Date
                        </label>
                        <div className="datepicker-box">
                          <DatePicker
                            onChange={(e) => handleChange("endDate", e)}
                            value={data.endDate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Cources
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          aria-describedby=""
                          name="cources"
                          value={data.cources || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          name="desc"
                          value={data.desc || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="add-img-cover">
                    <div className="form-block">
                      <label htmlFor="" className="form-label">
                        Add Image
                        <span>
                          ( Image must me in JPG or PNG format and must not
                          exceed 3 MB)
                        </span>
                      </label>
                    </div>
                    <div className="add-img-wrapper d-flex">
                      <div className="img-preview-block">
                        <button className="img-remove-btn">
                          <img
                            src="../../../assets/img/close-green.svg"
                            alt=""
                          />
                        </button>
                        <img src={image} alt="" />
                      </div>
                      <div className="add-img-btn-block">
                        <button
                          className="add-img-btn"
                          type="button"
                          onClick={handleClick}
                        >
                          <div className="btn-block">
                            <img src="../../../assets/img/add-img.svg" alt="" />
                            <span>Add More</span>
                          </div>
                        </button>
                        <input
                          type="file"
                          filename="schoolImage"
                          ref={hiddenFileInput}
                          defaultValue={data?.img}
                          accept="image/*"
                          onChange={async (event) => {
                            let imageStr = await getBase64(
                              event.target.files[0]

                            )
                            imageStr = imageStr.replace("data:image/png;base64,", "");
                           console.log(imageStr,"url")

                            // console.log(result)
                            // idCardBase64 = result;
                            let buffer = Buffer.from(imageStr, "base64");
                            console.log(buffer);
                            // const base64 = getBase64(event.target.files[0]);
                            // console.log(base64, "base64");
                            setData({
                              ...data,
                              schoolImage: buffer,
                            });
                          }}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row add-form-row gx-md-5">
                    <div className="col-12 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          Annual fees
                        </label>
                        <input
                          type="number"
                          className="text-note form-control"
                          name="annualFees"
                          value={data.annualFees || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row add-form-row gx-md-5">
                    <div className="col-12 add-form-col">
                      <div className="form-block">
                        <label htmlFor="" className="form-label">
                          academicStats
                        </label>
                        <textarea
                          className="text-note form-control"
                          name="academicStats"
                          value={data.academicStats || ""}
                          onChange={({ target: { name, value } }) =>
                            handleChange(name, value)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="add-soc-cover">
                    <div className="row add-form-row gx-md-5">
                      <div className="col-12 add-form-col">
                        <div className="form-block  mb-0">
                          <label htmlFor="" className="form-label">
                            admissionStatus
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4 add-form-col">
                        <div className="form-block">
                          <div className="custom-2-box">
                            <ReactSelect
                              className="custom-selct-2"
                              options={Social}
                              onChange={(e) => {
                                handleChange("admissionStatus", e.status);
                                setCurrentUrl(e.status);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 add-form-col">
                        <div className="form-block form-block-close">
                          <input
                            type="text"
                            ref={inputRef}
                            className="form-control"
                            id=""
                            aria-describedby=""
                            value={currentUrl}
                            onChange={() => {}}
                            disabled
                          />
                          <button
                            className="soc-remove-btn"
                            onClick={onButtonClick}
                            type="button"
                          >
                            <img src="../../../assets/img/close_grey.svg" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add-soc-btn-block">
                      <button className="add-soc-btn">
                        Add{" "}
                        <img src="../../../assets/img/add_small.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-btn-wrapper">
                <button className="form-btn preview-btn">
                  Preview <img src="../../../assets/img/eye.svg" alt="" />
                </button>
                <button
                  className="form-btn save-btn"
                  type="button"
                  onClick={() => {
                    setIsSubmited(true);
                    Validation(data);
                  }}
                >
                  Save and Publish
                  <img src="../../../assets/img/arrw-rgt.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Informations;
