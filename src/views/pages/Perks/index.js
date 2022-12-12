import { useState, useEffect } from "react";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Tooltip,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import {
  IconCirclePlus as AddIcon,
  IconPencil as UpdateIcon,
} from "@tabler/icons";
import { useDispatch, useSelector } from "react-redux";
import Modal from "components/Modal";
import moment from "moment";

// Components
import DataTable from "components/DataTable";
// import NotFoundCard from "components/NotFoundCard";

// import handlePermissions from "functions/handlePermissions";
import MainCard from "ui-component/cards/MainCard";
import CreatePerk from "./Components/CreatePerk";
import PerkCard from "./Components/PerkCard";

function Perks() {
  const theme = useTheme();

  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState(false);

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

  const dispatch = useDispatch();

  return (
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
          <Grid container spacing={4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <PerkCard
              // data={pack_info}
              // dataIndex={index}
              // handleEdit={handleUpdateModal}
              // handleDelete={handleDeleteDialog}
              // ISDELETE={menuPermissions.ISDELETE}
              // ISUPDATE={menuPermissions.ISUPDATE}
              />
            </Grid>
          </Grid>
        </Box>
      </MainCard>
      <Modal
        title="Add New Perk"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <CreatePerk
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

export default Perks;
