import { FlexBox, FlexBoxJustifyContent, ThemeProvider } from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import './App.css';
import { NavBar } from './common/components/NavBar';
import { ProfileDetails } from './features/profile/ProfileDetails';
import { ProfileHeader } from './features/profile/ProfileHeader';
import { ProfileSidebar } from './features/profile/ProfileSidebar';

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <ProfileHeader />
        <FlexBox className={classes.container}>
          <FlexBox justifyContent={FlexBoxJustifyContent.Center} className={classes.sidebar}>
            <ProfileSidebar />
          </FlexBox>
          <FlexBox className={classes.details}>
            <ProfileDetails />
          </FlexBox>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
}

const useStyles = createUseStyles({
  container: {
    height: 'calc(100vh - 10rem)', // to compensate headers and bottom margin
  },
  sidebar: {
    flex: '1',
    margin: {
      left: '2rem',
      right: '1rem',
    },
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    boxShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042),
    0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07)`,
  },
  details: {
    flex: '3',
    marginRight: '1rem',
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    boxShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042),
    0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07)`,
  },
});

export default App;
