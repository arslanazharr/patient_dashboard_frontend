/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import SubdirectoryArrowLeftOutlinedIcon from "@mui/icons-material/SubdirectoryArrowLeftOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StatusBadge = (props) => {
  const { data } = props;

  const containsAttend = data.includes("attend");
  const containsMissed = data.includes("missed");
  const containsCancelled = data.includes("cancelled");
  const containsNoAppointment = data.includes("no_appointment");

  return (
    <>
      {containsAttend && (
        <Chip
          icon={<CheckOutlinedIcon className="!text-[16px]" />}
          label="Attend"
          variant="outlined"
          color="success"
        />
      )}
      {containsMissed && (
        <Chip
          icon={<SubdirectoryArrowLeftOutlinedIcon className="!text-[16px]" />}
          label="Missed"
          variant="outlined"
          color="secondary"
        />
      )}
      {containsCancelled && (
        <Chip
          icon={<CloseOutlinedIcon className="!text-[16px]" />}
          label="Cancelled"
          variant="outlined"
          color="error"
        />
      )}
      {containsNoAppointment && (
        <Chip
          icon={<RemoveCircleOutlineOutlinedIcon className="!text-[16px]" />}
          label="No Appointment"
          variant="outlined"
          color="warning"
        />
      )}
    </>
  );
};

export default StatusBadge;
