import Topbar from "./screens/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./screens/dashboard/Dashboard";
import Sidebar from "./screens/global/Sidebar";
import Students from "./screens/students/Students";
import SubmittedDocs from "./screens/submittedDocs/SubmittedDocs";
import Student from "./screens/student/Student";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />}></Route>
              <Route path="/submitted_docs" element={<SubmittedDocs />} />
              <Route path="/student" element={<Student />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
