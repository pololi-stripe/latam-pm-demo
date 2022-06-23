import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";

import MexicoPaymentMethods from "./MexicoPaymentMethods";
import BrazilPaymentMethods from "./BrazilPaymentMethods";

function App() {
  const [value, setValue] = React.useState("MX");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%", bgcolor: 'background.paper', mt: 5 }}>
        <Typography variant="h3" component="div" gutterBottom>
          Stripe Demo for LATAM Payment Methods
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={
                  <Typography variant="h4" component="div" gutterBottom>
                    🇲🇽 Mexico
                  </Typography>
                }
                value="MX"
              />
              <Tab
                label={
                  <Typography variant="h4" component="div" gutterBottom>
                    🇧🇷 Brazil
                  </Typography>
                }
                value="BR"
              />
            </TabList>
          </Box>
          <TabPanel value="MX">
            <MexicoPaymentMethods />
          </TabPanel>
          <TabPanel value="BR">
            <BrazilPaymentMethods />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default App;
