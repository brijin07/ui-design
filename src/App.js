import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';


function App() {
  return (
    <div className="app">
     
      <div className='notification'>  <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton></div>
      
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
