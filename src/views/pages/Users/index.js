import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
import {
  IconCirclePlus as AddIcon,
  IconPencil as UpdateIcon,
} from "@tabler/icons";
import { useState } from "react";
import Modal from "components/Modal";
import { useDispatch } from "react-redux";
import CreateUser from "./Components/CreateUser";
import DataTable from "components/DataTable";
import moment from "moment/moment";

function UsersList() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageLmit, setpageLmit] = useState(10);
  const [pageNo, setPageNo] = useState(0);
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
      name: "email",
      label: "EMAIL",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => <Typography>{value}</Typography>,
      },
    },
    {
      name: "coin",
      label: "COIN",
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
      label: "ACTIONS",
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
                  // handleUpdateModal(dataIndex);
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
  return (
    <Box>
      <MainCard title="Users">
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
  );
}
export default UsersList;
