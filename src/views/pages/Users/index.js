import { Box, Button, useTheme, useMediaQuery, Grid } from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
import { IconCirclePlus as AddIcon } from "@tabler/icons";
import { useState } from "react";
import Modal from "components/Modal";
import { useDispatch } from "react-redux";
import CreateUser from "./Components/CreateUser";
import NotFoundCard from "components/NotFoundCard";
import UserCard from "./Components/UserCard";

function UsersList() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <MainCard
        title="Users"
        secondary={
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            sx={{ mx: 3 }}
            onClick={() => setOpenModal(!openModal)}
            id="add-Users"
          >
            Add User
          </Button>
        }
      >
        <Box>
          <Grid container spacing={4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <UserCard
              // data={pack_info}
              // dataIndex={index}
              // handleEdit={handleUpdateModal}
              // handleDelete={handleDeleteDialog}
              // ISDELETE={menuPermissions.ISDELETE}
              // ISUPDATE={menuPermissions.ISUPDATE}
              />
            </Grid>
          </Grid>

          <NotFoundCard msg="Sorry, No data found" />
        </Box>
      </MainCard>
      <Modal
        title="Add New User"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <CreateUser
          dispatch={dispatch}
          isMobileDevice={isMobileDevice}
          openModal={openModal}
          setOpenModal={setOpenModal}
          theme={theme}
        />
      </Modal>
    </Box>
  );
}
export default UsersList;
