import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { ContactDetails } from './ContactDetails';
import { PersonalInformation } from './PersonalInformation';

export const ProfileDetails = () => {
  const classes = useStyles();
  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.content}>
      <PersonalInformation />
      <ContactDetails />
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  content: {
    flex: '1',
    padding: '2rem',
  },
});
