import { Box,useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DataTable from "../../components/DataTable";


export default function SubmittedDocs() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" >
      <Header title="Submitted Docs" subtitle="Submitted doc" />
      <Box sx={{ height:"75vh", width: "100%" ,"& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },}}>
      <DataTable/>
      </Box>
    </Box>
  );
}
