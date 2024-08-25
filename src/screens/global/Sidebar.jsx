import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme.js";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddIcon from "@mui/icons-material/Add";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

import "./index.scss";

const currencies = [
  {
    value: '1',
    label: 'Module 1',
  },
  {
    value: '2',
    label: 'Module 2',
  },
  {
    value: '3',
    label: 'Module 3',
  },
  {
    value: '4',
    label: 'Module 4',
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink className="navLink" to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </NavLink>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        background: `${color.primary[400]} !important`,
      }}
    >
      {/* MODAL */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Upload Academic Resource
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
          id="standard-select-currency-native"
          select
          label="Module No"
          defaultValue="1"
          SelectProps={{
            native: true,
          }}
          helperText="Please Select Module No"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

            <TextField id="standard-basic" label="Title" variant="standard" />
            <TextField
              id="standard-basic"
              label="Supportive video link 1"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Supportive video link 2"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Supportive Docs link 1"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Supportive Docs link 2"
              variant="standard"
            />

            <TextField
              id="standard-textarea"
              label="Text Area for Important Topics"
              placeholder="Enter docs main topics"
              multiline
              variant="standard"
            />
            <TextField
              id="standard-textarea"
              label="Text Area for Additional Information"
              placeholder="Enter additional informations"
              multiline
              variant="standard"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Upload
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* SIDEBAR */}
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: color.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={color.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "0px 0px 1px 1px",
                }}
                onClick={handleClickOpen}
              >
                <AddIcon /> {isCollapsed ? "" : "Upload"}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              color={color.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Students"
              to="/students"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Submitted Docs"
              to="/submitted_docs"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={color.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
