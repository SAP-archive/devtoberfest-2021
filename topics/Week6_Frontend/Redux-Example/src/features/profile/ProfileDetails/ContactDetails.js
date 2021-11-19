import '@ui5/webcomponents-icons/dist/edit';
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Label,
  Title,
  TitleLevel
} from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { formatPhoneNumber, formatSingleLineAddress } from '../../utils/formatDetails';
import ContactEditDialog from './ContactEditDialog';

// TODO: Move to Redux
const data = {
  phoneNumber: '(815) 812-3456',
  workNumber: '(800) 246-7890',
  street: '744 Greenville Lane',
  apt: 'Apt G',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94100',
};

export const ContactDetails = () => {
  const classes = useStyles();
  const dialogRef = useRef(null);

  // React state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // TODO: Move to Redux state
  const [contactDetails, setContactDetails] = useState(data);
  const phoneNumber = contactDetails.phoneNumber;
  const workNumber = contactDetails.workNumber;
  const address = contactDetails;

  // TODO: Move to ContactEditDialog when Redux is added
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  // opens dialog
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
    dialogRef.current.show();
  };

  // ideally would handle reverting of state but for simplicity, just closes the dialog
  const handleDialogCancel = () => {
    dialogRef.current.close();
    setIsDialogOpen(false);
  };

  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.header}>
        <Title level={TitleLevel.H3} className={classes.title}>
          Contact Information
        </Title>
        <Button icon="edit" design={ButtonDesign.Transparent} onClick={handleDialogOpen} />
      </FlexBox>
      <FlexBox direction={FlexBoxDirection.Column} className={classes.content}>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Phone Number
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            {formatPhoneNumber(phoneNumber)}
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Work Phone
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            {formatPhoneNumber(workNumber)}
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Home Address
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            {formatSingleLineAddress(address)}
          </Title>
        </FlexBox>
      </FlexBox>
      {isDialogOpen && (
        <ContactEditDialog
          ref={dialogRef}
          setIsDialogOpen={setIsDialogOpen}
          handleDialogCancel={handleDialogCancel}
          handleInputChange={handleInputChange}
          {...contactDetails}
        />
      )}
    </>
  );
};

const useStyles = createUseStyles({
  header: {
    borderBottomWidth: ThemingParameters.sapList_BorderWidth,
    borderBottomColor: ThemingParameters.sapList_BorderColor,
    borderBottomStyle: 'solid',
    paddingBottom: '1rem',
  },
  content: {
    marginTop: '1.5rem',
  },
  contentItem: {
    padding: '1rem 0',
  },
  contentItemLabel: {
    flex: 1,
  },
  contentItemTitle: {
    flex: 6,
  },
});
