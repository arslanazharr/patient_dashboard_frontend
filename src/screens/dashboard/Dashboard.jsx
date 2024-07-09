import { useEffect } from "react";
import Summary from "../../components/Summary";
import Patients from "./patients/Patients";
import { useDispatch } from "react-redux";
import { getPatients } from "../../redux/patient/getSlice";
import { getSummary } from "../../redux/summary/getSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
    dispatch(getSummary());
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-[32px]">
        <div className="col-span-12">
          <h1 className="text-[20px] text-[#051237] font-medium font-inter">
            Mike Jani
          </h1>
          <p className="font-inter text-[#181818]">
            Hi Doctor, Take a look at your patients activities
          </p>
        </div>

        <div className="col-span-12">
          <Summary />
        </div>

        <div className="col-span-12">
          <Patients />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
