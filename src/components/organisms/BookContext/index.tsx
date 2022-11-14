import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanelComponent from '../../molecules/LibraryTabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TypographyComponent from '../../atoms/Typography';


const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#22C870',
          height: 2,
        }
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.MuiTab-textColorPrimary': {
            textTransform: "capitalize",
            fontSize: '16px',
            width: '250px',
            justifyContent: "flex-start",
            textAlign: 'left'
          },
          '&.Mui-selected': {
            textTransform: "capitalize",
            color: '#22C870',
            fontWeight: 'bold'
          }
        }
      }
    },
  },
});


const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
}

const BookContext: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange} aria-label="Library Tabs"
            variant='fullWidth'
          >
            <Tab label="Synopsis" {...a11yProps(0)} />
            <Tab label="Who is it for?" {...a11yProps(1)} />
            <Tab label="About the author" {...a11yProps(2)} />
          </Tabs>
        </ThemeProvider>

      </Box>

      <TabPanelComponent value={value} index={0}>
        <TypographyComponent>

          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992
          business handbook, Beyond Entrepreneurship for the entrepreneurs,
          visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
        </TypographyComponent>
      </TabPanelComponent>

      <TabPanelComponent value={value} index={1}>

      </TabPanelComponent>

    </Box>
  );
}

export default BookContext;