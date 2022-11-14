import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanelComponent from '../../molecules/LibraryTabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BookModel, LibraryModel } from '../../../models/models';
import BookGridComponent from '../BookGrid';
import { Status } from '../../../utility/blinkEnums';

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
  libraryBooks: LibraryModel[]
  bookAction: (id: number, status?: string) => void
}

const LibraryTabs: React.FC<Props> = ({ libraryBooks, bookAction, ...others }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const readingBooks = libraryBooks.filter(
    libraryBook => libraryBook.status === Status.READING
  ).map(book => book.book);

  const finishedBooks = libraryBooks.filter(
    libraryBook => libraryBook.status === Status.FINISHED
  ).map(libraryBook => libraryBook.book);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange} aria-label="Library Tabs"
          >
            <Tab label="Currently Reading" {...a11yProps(0)}
            />
            <Tab label="Finished" {...a11yProps(1)} />
          </Tabs>
        </ThemeProvider>

      </Box>

      <TabPanelComponent value={value} index={0}>
        <BookGridComponent
          books={readingBooks}
          bookAction={bookAction}
          meta={{ type: 'library', status: Status.READING }}
        />
      </TabPanelComponent>

      <TabPanelComponent value={value} index={1}>
        <BookGridComponent
          books={finishedBooks}
          bookAction={bookAction}
          meta={{ type: 'library', status: Status.FINISHED }}
        />
      </TabPanelComponent>

    </Box>
  );
}

export default LibraryTabs;