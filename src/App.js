import Navbar from './components/Navbar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import {Box, Stack} from '@mui/material';

function App () {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </Stack>

    </Box>
  );
}

export default App;
