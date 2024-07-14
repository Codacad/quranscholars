import { useState, useContext } from "react";
import "../css/Admission.css";
import { FaSpinner } from "react-icons/fa";
const Admission = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [parentsContactNumber, setParentsContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [classTime, setClassTime] = useState("07:00");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddressCheck, setPermanentAddressCheck] = useState(false);
  const [permanentAddress, setPermanentAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handleCheckPermanentAddress = async () => {
    setPermanentAddressCheck((pre) => !pre);
    if (permanentAddressCheck) {
      setPermanentAddress("");
    } else {
      setPermanentAddress(currentAddress);
    }
    console.log(permanentAddressCheck);
  };

  const handleAdmissionSubmit = async (e) => {
    e.preventDefault();
    const admissionData = {
      fullName,
      email,
      contactNumber,
      parentsContactNumber,
      dob,
      classTime,
      currentAddress,
      permanentAddress,
      zipCode,
      city,
      state,
      country,
      gender,
      selectedCourses,
    };

    console.log(admissionData);
  };

  const handleSelectedCourses = async (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);

    if (checked) {
      setSelectedCourses((preCourse) => [...preCourse, value]);
    } else {
      setSelectedCourses((prevCourses) =>
        prevCourses.filter((course) => course !== value)
      );
    }
  };
  return (
    <>
      <div className="admission flex flex-col items-center max-md:px-4 my-8 min-h-screen sm:w-[50%] w-[100%] m-auto">
        <div className="header border-b py-4 w-full border-gray-200 mb-4">
          <h1 className="font-bold md:text-4xl text-xl text-primary mb-2">
            CLASS ADMISSION FORM
          </h1>
          <h3 className="text-md max-sm:text-sm text-gray-400">
            Enter your admission information below
          </h3>
        </div>
        <form className="form grid grid-cols-2 max-sm:flex flex-col gap-4 w-full">
          <div className="input-group flex flex-col">
            <label htmlFor="fullname">
              Fullname<sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="fullname"
              id="fullname"
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="email">
              Email<sup className="text-red-500">*</sup>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
              id="email"
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="phone-number">
              Contact Number{" "}
              <span className="text-[10px]">
                (WhatsApp Number is preferred)
              </span>
              <sup className="text-red-500">*</sup>
            </label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="phone-number"
              id="phone-number"
            />
          </div>
          <div className="input-group flex flex-col justify-end">
            <label htmlFor="parents-phone-number">
              Parents Contact Number<sup className="text-red-500">*</sup>
            </label>
            <input
              type="tel"
              value={parentsContactNumber}
              onChange={(e) => setParentsContactNumber(e.target.value)}
              className="parents-phone-number"
              id="parents-phone-number"
            />
          </div>
          <div className="input-group relative flex flex-col max-md:grid-cols-1">
            <label htmlFor="dob">
              DOB<sup className="text-red-500">*</sup>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="dob"
              id="dob"
            />
          </div>
          <div className="input-group flex flex-col max-md:grid-cols-1">
            <label htmlFor="class-time">
              Choose your preferable class time
            </label>
            <input
              type="time"
              id="class-time"
              className="class-time"
              value={classTime}
              onChange={(e) => setClassTime(e.target.value)}
            />
          </div>
          <div className="input-group flex flex-col col-span-2">
            <label htmlFor="current-address">
              Current Address<sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              id="current-address"
              className="current-address"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
          </div>
          <div className="input-group select-address flex col-span-2 leading-6">
            <input
              type="checkbox"
              id="check-address"
              className="check-address mr-2"
              checked={permanentAddressCheck}
              onChange={() => handleCheckPermanentAddress()}
            />
            <label htmlFor="check-address">
              Is your permanent address same ad current address?
            </label>
          </div>
          <div className="input-group flex flex-col col-span-2">
            <label htmlFor="permanent-address">Permanent Address</label>
            <input
              type="text"
              id="permanent-address"
              className="permanent-address"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
            />
          </div>
          <div className="city-state-country grid grid-cols-2 max-sm:flex flex-col gap-4 col-span-2">
            <div className="input-group flex flex-col">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="text"
                id="zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="zipcode"
              />
            </div>
            <div className="input-group flex flex-col">
              <label htmlFor="city">
                City<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                id="city"
                className="city"
              />
            </div>
            <div className="input-group flex flex-col">
              <label htmlFor="state">
                State<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                id="state"
                className="state"
              />
            </div>
            <div className="input-group flex flex-col">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                className="country"
              />
            </div>
          </div>
          <div className="gender border mt-2 relative border-gray-300 p-4 rounded-md col-span-2">
            <h2 className="absolute -top-3 bg-white left-3">
              Gender<sup className="text-red-500">*</sup>
            </h2>
            <div className="mt-3 input-groups text-sm flex flex-col gap-2">
              <div className="input-group flex items-center">
                <input
                  type="radio"
                  value={"male"}
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  id="male"
                  name="gender"
                  className="male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="input-group flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="female"
                  value={"female"}
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="courses relative mt-2 col-span-2">
            <h2 className="absolute -top-3 bg-white left-3">
              Choose Course (s)<sup className="text-red-500">*</sup>
            </h2>
            <div className="grid input-groups grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 p-4 mt-3 gap-4 text-sm">
              <div className="input-group">
                <input
                  type="checkbox"
                  className="quran-with-tajweed"
                  id="quran-with-tajweed"
                  value={"Quran with Tajweed"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="quran-with-tajweed" className="w-full">
                  Quran with Tajweed
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="madani-qaida"
                  id="madani-qaida"
                  value={"Madani Qaida"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="madani-qaida" className="w-full">
                  Madani Qaida
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="farz-uloom"
                  id="farz-uloom"
                  value={"Farz Uloom"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="farz-uloom" className="w-full">
                  Farz Uloom
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  value={"Hadith"}
                  onChange={handleSelectedCourses}
                  className="dadith"
                  id="hadith"
                />
                <label htmlFor="hadith" className="w-full">
                  Hadith
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  value={"Tafseer"}
                  onChange={handleSelectedCourses}
                  className="tafseer"
                  id="tafseer"
                />
                <label htmlFor="tafseer" className="w-full">
                  Tafseer
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="fiqh-hanafi"
                  id="fiqh-hanafi"
                  value={"Fiqh (Hanafi)"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="fiqh-hanafi" className="w-full">
                  Fiqh (Hanafi)
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  value={"Urdu"}
                  onChange={handleSelectedCourses}
                  className="urdu"
                  id="urdu"
                />
                <label htmlFor="urdu" className="w-full">
                  Urdu
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="prophets-stories"
                  id="prophets-stories"
                  value={"Prophet's Stories"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="prophets-stories" className="w-full">
                  {"Prophet's Stories"}
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="masnoon-duayen"
                  id="masnoon-duayen"
                  value={"Masnoon Duayen"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="masnoon-duayen" className="w-full">
                  Masnoon Duayen
                </label>
              </div>
              <div className="input-group flex">
                <input
                  type="checkbox"
                  className="sarf-and-nahv"
                  id="sarf-and-nahv"
                  value={"Sarf & Nahv"}
                  onChange={handleSelectedCourses}
                />
                <label htmlFor="sarf-and-nahv" className="w-full">
                  Sarf & Nahv
                </label>
              </div>
            </div>
          </div>
          <div className="action flex justify-end w-[100%] col-span-2 p-4">
            <button
              onClick={handleAdmissionSubmit}
              className="submit-addmission flex items-center justify-center gap-4 w-36 p-3 rounded-md bg-primary text-white"
            >
              <FaSpinner className="transition-transform animate-spin" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admission;
