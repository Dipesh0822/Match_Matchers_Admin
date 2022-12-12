import { Box, Button, useTheme, useMediaQuery, Grid } from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
import { IconCirclePlus as AddIcon } from "@tabler/icons";
import { useState } from "react";
import Modal from "components/Modal";
import { useDispatch } from "react-redux";
import NotFoundCard from "components/NotFoundCard";
import CreateBoosts from "./Components/CreateBoosts";
import BoostsCard from "./Components/BoostsCard";

function BootsList() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <MainCard
        title="Boosts"
        secondary={
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            sx={{ mx: 3 }}
            onClick={() => setOpenModal(!openModal)}
            id="add-Boosts"
          >
            Add Boosts
          </Button>
        }
      >
        <Box>
          {/* <Grid container spacing={4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <BoostsCard
              data={pack_info}
              dataIndex={index}
              handleEdit={handleUpdateModal}
              handleDelete={handleDeleteDialog}
              ISDELETE={menuPermissions.ISDELETE}
              ISUPDATE={menuPermissions.ISUPDATE}
              />
            </Grid>
          </Grid> */}

          <NotFoundCard msg="Sorry, No data found" />
        </Box>
      </MainCard>
      <Modal
        title="Add New Boosts"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <CreateBoosts
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
export default BootsList;
