import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="Admin" subtitle="Teacher Admin Panel" />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: `${colors.primary[900]}`,
            },
          }}
        >
          <StatBox
            title="12"
            subtitle="Uploaded Docs"
            progress="0.75"
            increase="+14%"
            icon={
              <FolderOpenIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: `${colors.primary[900]}`,
            },
          }}
        >
          <StatBox
            title="Review"
            subtitle="Ai content"
            progress="0.50"
            increase="+21%"
            icon={
              <AssessmentIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: `${colors.primary[900]}`,
            },
          }}
        >
          <StatBox
            title="262"
            subtitle="Students"
            progress="0.30"
            increase="+5%"
            icon={
              <PeopleAltIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: `${colors.primary[900]}`,
            },
          }}
        >
          <StatBox
            title="13"
            subtitle="Submited Docs"
            progress="0.80"
            increase="+43%"
            icon={
              <AssignmentTurnedInIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
