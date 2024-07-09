import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  LinearProgress,
} from "@mui/material";
import DiseaseBadge from "../../../utils/DiseaseBadge";
import StatusBadge from "../../../utils/StatusBadge";
import trash from "../../../assets/icons/other/trash.svg";
import { deletePatient } from "../../../redux/patient/deleteSlice";

export default function DataTable() {
  const [selected, setSelected] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const { data, isLoading } = useSelector((state) => state?.patients);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDeleteSingle = async (e, id) => {
    e.stopPropagation();

    try {
      await dispatch(deletePatient({ id }));
      setDeletedItems((prevDeletedItems) => [...prevDeletedItems, id]);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const filteredPatientsData = data
    ?.filter((data) => !deletedItems.includes(data._id))
    .slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const totalPages = Math.ceil(data?.length / recordsPerPage);

  const handleChangePage = (page) => {
    if (page < 1) {
      setCurrentPage(totalPages);
    } else if (page > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <TableContainer
        component={Paper}
        className="max-h-[50vh] !font-inter"
        sx={{ boxShadow: "none" }}
      >
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < data.length
                  }
                  checked={
                    data?.length > 0 && selected?.length === data?.length
                  }
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell>Diseases</TableCell>
              <TableCell align="left">Previous Appointment</TableCell>
              <TableCell align="left">Next Appointment</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={12} padding="none">
                  <LinearProgress />
                </TableCell>
              </TableRow>
            ) : (
              filteredPatientsData?.map((data) => {
                const isItemSelected = isSelected(data._id);

                return (
                  <TableRow
                    key={data._id}
                    onClick={(event) => handleClick(event, data._id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": `enhanced-table-checkbox-${data._id}`,
                        }}
                      />
                    </TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>
                      <DiseaseBadge data={data.diseases} />
                    </TableCell>
                    <TableCell>{data.previousAppointment}</TableCell>
                    <TableCell>{data.nextAppointment}</TableCell>
                    <TableCell>
                      <StatusBadge data={data.status} />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(e) => handleDeleteSingle(e, data._id)}
                      >
                        <img src={trash} alt="delete" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
        <div className="flex py-[12px] sm:justify-between justify-center sm:gap-0 gap-3 items-center w-full h-full px-[10px] bg-[#fafafa] rounded-bl-[12px] rounded-br-[12px] !shadow-sm border">
          <div
            className="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer bg-white"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <p className="text-[14px] font-semibold">Previous</p>
          </div>

          <div className="sm:flex hidden">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                onClick={() => handleChangePage(index + 1)}
                style={{
                  margin: "0 5px",
                  background: currentPage === index + 1 ? "white" : "",
                }}
                className={`flex items-center rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer w-[40px] h-[40px] justify-center ${
                  currentPage === index + 1 && "border shadow-sm font-semibold"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div
            className="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer bg-white"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <p className="text-[14px] font-semibold">Next</p>
          </div>
        </div>
      </TableContainer>
    </div>
  );
}