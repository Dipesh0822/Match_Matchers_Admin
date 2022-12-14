import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { useSelector, useDispatch } from "react-redux";
// import { getAgentTypeList } from 'store/thunk/network/agent.thunk';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const agentsData = [
  {
    id: 1,
    name: "agent 1",
    ggr: 128,
  },
  {
    id: 2,
    name: "agent 2",
    ggr: 128,
  },
  {
    id: 3,
    name: "agent 3",
    ggr: 128,
  },
  {
    id: 4,
    name: "agent 4",
    ggr: 128,
  },
  {
    id: 5,
    name: "agent 5",
    ggr: 128,
  },
];

const PopularGamesCard = ({ isLoading }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const agent = useSelector((state) => state.agent);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // dispatch(getAgentTypeList());
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">Top Agents</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: "pointer",
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem value={0}>ALL</MenuItem>
                      {agent?.agentTypesList?.length > 0 ? (
                        agent?.agentTypesList?.map((item) => (
                          <MenuItem value={item.ROLE_ID}>
                            {item.ROLE_NAME}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No Agent Type Available</MenuItem>
                      )}
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                {agentsData.map((agent) => (
                  <>
                    <Grid container direction="column" key={agent.id}>
                      <Grid item>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              {agent.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                  GGR: {agent.ggr}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: "5px",
                                    backgroundColor:
                                      theme.palette.success.light,
                                    color: theme.palette.success.dark,
                                    ml: 2,
                                  }}
                                >
                                  <ChevronRightOutlinedIcon
                                    fontSize="small"
                                    color="inherit"
                                  />
                                </Avatar>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 1.8 }} />
                  </>
                ))}
              </Grid>
            </Grid>
          </CardContent>
          {/* <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View More
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions> */}
        </MainCard>
      )}
    </>
  );
};

PopularGamesCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularGamesCard;
