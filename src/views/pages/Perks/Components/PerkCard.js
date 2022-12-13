import PropTypes from "prop-types";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Typography, IconButton, Avatar } from "@mui/material";
import { IconPencil as EditIcon, IconTrash as DeleteIcon } from "@tabler/icons";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonEarningCard from "ui-component/cards/Skeleton/EarningCard";

import Img from "assets/images/download.jpeg";

const CardWrapper = styled(MainCard)(({ theme, data }) => ({
  overflow: "hidden",
  position: "relative",
  height: "100%",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const PerkCard = ({ isLoading, handleEdit, data, dataIndex, handleDelete }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper data={data} elevation={4}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box size="2rem" />

            <Box style={{ display: "flex" }}>
              <IconButton onClick={() => handleEdit(dataIndex)}>
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={
                  () => handleDelete()
                  // data.PACK_ID
                }
              >
                <DeleteIcon color="red" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "150px",
                    margin: "auto",
                  }}
                >
                  <img
                    alt="Remy Sharp"
                    src={Img}
                    style={{
                      textAlign: "center",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "2px solid #ffd77c",
                    }}
                  />
                  {/* <Avatar alt="Remy Sharp" src={Img} /> */}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      ml: 2,
                    }}
                  >
                    Aarya
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

PerkCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PerkCard;
