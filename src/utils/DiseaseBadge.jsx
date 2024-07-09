/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip";

const DiseaseBadge = (props) => {
  const { data } = props;

  const containsBP = data.includes("bp");
  const containsSugar = data.includes("sugar");
  const containsBreathingProblem = data.includes("breathing_problem");
  const containsCancer = data.includes("cancer");
  const containsArthritis = data.includes("arthritis");
  const containsHypertension = data.includes("hypertension");
  const containsDiabetes = data.includes("diabetes");
  const containsAsthma = data.includes("asthma");

  return (
    <div className="flex md:flex-row flex-col gap-2">
      {containsBP && (
        <Chip
          label="BP"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(255, 87, 34, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(255, 87, 34, 0.2)",
          }}
        />
      )}
      {containsSugar && (
        <Chip
          label="Sugar"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(76, 175, 80, 0.2)",
          }}
        />
      )}
      {containsBreathingProblem && (
        <Chip
          label="Breathing Problem"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(33, 150, 243, 0.2)",
          }}
        />
      )}
      {containsCancer && (
        <Chip
          label="Cancer"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(233, 30, 99, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(233, 30, 99, 0.2)",
          }}
        />
      )}
      {containsArthritis && (
        <Chip
          label="Arthritis"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(103, 58, 183, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(103, 58, 183, 0.2)",
          }}
        />
      )}
      {containsHypertension && (
        <Chip
          label="Hypertension"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(255, 193, 7, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(255, 193, 7, 0.2)",
          }}
        />
      )}
      {containsDiabetes && (
        <Chip
          label="Diabetes"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(255, 152, 0, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(255, 152, 0, 0.2)",
          }}
        />
      )}
      {containsAsthma && (
        <Chip
          label="Asthma"
          variant="outlined"
          sx={{
            backgroundColor: "rgba(156, 39, 176, 0.2)",
            color: "#555555",
            border: "0.5px solid rgba(156, 39, 176, 0.2)",
          }}
        />
      )}
    </div>
  );
};

export default DiseaseBadge;
