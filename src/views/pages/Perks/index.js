import { useState, useEffect } from "react";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import {
  IconCirclePlus as AddIcon,
  IconPencil as UpdateIcon,
} from "@tabler/icons";
import { useSelector } from "react-redux";
import moment from "moment";

// Components
import DataTable from "components/DataTable";
// import NotFoundCard from "components/NotFoundCard";

// import handlePermissions from "functions/handlePermissions";
import MainCard from "ui-component/cards/MainCard";

function Perks() {
  const theme = useTheme();
  const constants = useSelector((state) => state.constants);

  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState(false);

  const [pageLmit, setpageLmit] = useState(10);
  const [pageNo, setPageNo] = useState(0);
  //   const [menuPermissions, setMenuPermissions] = useState([]);
  //   const [agentPermissions, setAgentPermissions] = useState([]);

  useEffect(() => {
    // const { agentPermissions, menuPermissions } = handlePermissions({
    //   url: window.location.href,
    //   isSubMenu: true,
    // });
    // setMenuPermissions(menuPermissions);
    // setAgentPermissions(agentPermissions);
  }, []);

  function handleUpdateModal(idx) {
    // setConstantsIdx(idx);
    // setUpdateModal(!updateModal);
  }

  const columns = [
    {
      name: "dataindex",
      label: "SR NO",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const val = dataIndex + 1 + pageLmit * pageNo;
          return val;
        },
      },
    },
    {
      name: "NAME",
      label: "NAME",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => <Typography>{value}</Typography>,
      },
    },
    {
      name: "VALUE",
      label: "VALUES",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => <Typography>{value}</Typography>,
      },
    },
    {
      name: "UPDATE_DATE",
      label: "LAST UPDATED",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => (
          <Typography>{moment(value).format("DD/MM/YYYY HH:MM A")}</Typography>
        ),
      },
    },
    {
      name: "action",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => (
          <>
            {/* {menuPermissions.ISUPDATE ? ( */}
            <Tooltip title="Update">
              <IconButton
                color="primary"
                onClick={() => {
                  //   dispatch(setDataIndex(dataIndex));
                  handleUpdateModal(dataIndex);
                }}
              >
                <UpdateIcon />
              </IconButton>
            </Tooltip>
            {/* ) : null} */}
          </>
        ),
      },
    },
  ];

  //   const options = {
  //     filter: true,
  //     print: false,
  //     download: false,
  //     search: false,
  //     selectableRows: false,
  //     rowsPerPage: pageLmit,
  //     pagination: true,
  //     rowsPerPageOptions: [10, 20, 30],
  //     serverSide: true,
  //     count: constants.totalRecords,
  //     sortThirdClickReset: true,
  //     jumpToPage: true,
  //     onChangeRowsPerPage: (page) => {
  //       setpageLmit(page);
  //     },
  //     onChangePage: (page) => {
  //       setPageNo(page);
  //     },
  //   };

  return (
    <>
      <Box>
        <MainCard
          title={!isMobileDevice && "Perks List"}
          secondary={
            <Button
              startIcon={<AddIcon />}
              onClick={() => setOpenModal(!openModal)}
              variant="contained"
              color="secondary"
            >
              Add Perk
            </Button>
          }
        >
          <Box>
            <DataTable
              title="Keywords List"
              data={[]}
              columns={columns}
              //   options={options}
            />

            {/* <NotFoundCard msg="Sorry, No data found" /> */}
          </Box>
        </MainCard>
      </Box>
    </>
  );
}

export default Perks;
