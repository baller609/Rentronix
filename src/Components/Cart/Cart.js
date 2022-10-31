import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
} from "@mui/material";
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./Cart.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  const theme = useTheme();

  return (
    <div className="cartPage">{/* Page for cart */}
      <Box sx={{ flexGrow: 1 }}>{/* Cart details with the products */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Typography variant="h5" component="div" gutterBottom>
                My Cart
              </Typography>

              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsPmlLntKykyK84fLRZORZOPaY_l8lr0Ya_GU-gic6zR3ROMUB77OwR5bsuzp4MndGf0pAnCouxM1Efg_j6KHdIkJQc-7hZRgauM02_RqzA5y33mzPpHhWfw&usqp=CAE"
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                    Apple MacBook Air (MGN63HN/A)
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ display: "flex", alignItems: "left" }}
                    >
                      ₹200
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton>
                      <AddOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ border: "solid", borderRadius: "0px" }}>
                      1
                    </IconButton>
                    <IconButton>
                      <RemoveOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <IconButton style={{ color: "red" }}>
                  <CancelOutlinedIcon />
                </IconButton>
              </Card>

              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRj1_0ELJ74Q2rfZsbAlkhFGLo5vYissCXjgngJcdRPiD_q6WeFVQ6kERCpuJH_zdUXgh1UfFmXt1FtJRjjswYSf8GVod6ou26rQ3zJC97F0A60vFRnc9SicA&usqp=CAE"
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Galaxy F22
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ display: "flex", alignItems: "left" }}
                    >
                      ₹100
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton>
                      <AddOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ border: "solid", borderRadius: "0px" }}>
                      1
                    </IconButton>
                    <IconButton>
                      <RemoveOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>

                <IconButton style={{ color: "red" }}>
                  <CancelOutlinedIcon />
                </IconButton>
              </Card>
            </Item>
            <Button variant="contained" className="cartButton">
              Place Order
            </Button>
          </Grid>
          <Grid item xs={4}>{/* Price summary and total */}
            <Item>
              <Typography variant="h5" component="div" gutterBottom>
                Price Details
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ borderBottom: "none" }}>
                        Price
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="right">
                        284
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ borderBottom: "none" }}>
                        Discount Price
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="right">
                        284
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ borderBottom: "none" }}>
                        Delivery Charge
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="right">
                        284
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ borderBottom: "none" }}>
                        <h2>Total</h2>
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="right">
                        <h2>284</h2>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
