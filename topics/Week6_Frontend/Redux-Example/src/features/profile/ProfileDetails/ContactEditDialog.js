import '@ui5/webcomponents-icons/dist/edit';
import {
  Button,
  ButtonDesign,
  Dialog,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { InputWithLabel } from '../../../common/components/InputWithLabel';
import { formatPhoneNumber } from '../../utils/formatDetails';

const ContactEditDialog = (props, ref) => {
  const classes = useStyles();
  const { setIsDialogOpen } = props;
  const { handleDialogCancel } = props;

  // TODO: Add redux here
  const { phoneNumber, workNumber, street, apt, city, state, zipCode } = props;
  const { handleInputChange } = props;

  // dialog button bar handlers
  const handleDialogClose = () => {
    ref.current.close();
    setIsDialogOpen(false);
  };

  const handleDialogSave = () => {
    // Ideally, we should call API here and
    // render the view component with new API call after any change
    handleDialogClose();
  };

  return (
    <Dialog
      ref={ref}
      footer={
        <FlexBox
          alignItems={FlexBoxAlignItems.Center}
          justifyContent={FlexBoxJustifyContent.End}
          className={classes.dialogFooter}>
          <Button design={ButtonDesign.Emphasized} onClick={handleDialogSave}>
            {`Save`}
          </Button>
          <Button design={ButtonDesign.Transparent} onClick={handleDialogCancel}>
            {`Cancel`}
          </Button>
        </FlexBox>
      }
      headerText="Edit Contact Details">
      <div className={classes.dialogContent}>
        <InputWithLabel
          labelText="Phone Number"
          placeholder="Please Enter Phone Number"
          inputName="phoneNumber"
          inputValue={formatPhoneNumber(phoneNumber)}
          handleInputChange={handleInputChange}
          showColon
          required
        />
        <InputWithLabel
          labelText="Work Phone"
          placeholder="Please Enter Work Phone"
          inputName="workNumber"
          inputValue={formatPhoneNumber(workNumber)}
          handleInputChange={handleInputChange}
          showColon
        />
        <InputWithLabel
          labelText="Street Address"
          placeholder="Please Enter your street address"
          inputName="street"
          inputValue={street}
          handleInputChange={handleInputChange}
          showColon
          required
        />
        <InputWithLabel
          labelText="Apt, Suite, Unit, Building"
          placeholder="Please Enter Secondary Address"
          inputName="apt"
          inputValue={apt}
          handleInputChange={handleInputChange}
          showColon
        />
        <InputWithLabel
          labelText="City"
          placeholder="Please Enter City"
          inputName="city"
          inputValue={city}
          handleInputChange={handleInputChange}
          showColon
          required
        />
        <InputWithLabel
          labelText="State"
          placeholder="Please Enter State"
          inputName="state"
          inputValue={state}
          handleInputChange={handleInputChange}
          showColon
          required
        />
        <InputWithLabel
          labelText="Zip Code"
          placeholder="Please Enter Zip Code"
          inputName="zipCode"
          inputValue={zipCode}
          handleInputChange={handleInputChange}
          showColon
          required
        />
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  dialogContent: {
    padding: '1rem',
  },
  dialogFooter: {
    flex: '1',
    height: '3rem',
    marginRight: '1rem',
    gap: '0.5rem',
  },
});

// wrapping the Dialog component with forwardRef as ref is sent from parent
// this is needed as the data being sent from the parent needs to be updated on cancel
const forwardedRef = forwardRef(ContactEditDialog);
export default forwardedRef;
