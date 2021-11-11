import { Label, Input } from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';

export const InputWithLabel = (props) => {
  const classes = useStyles();
  const { labelText, placeholder, inputName, inputValue, handleInputChange, showColon, required } = props;

  return (
    <div className={classes.dialogContentItem}>
      <Label showColon={showColon} required={required} className={classes.label}>
        {labelText}
      </Label>
      <Input
        placeholder={placeholder}
        name={inputName}
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  dialogContentItem: {
    display: 'flex',
    flexDirection: 'column',
    margin: {
      bottom: '1rem',
    },
  },
  label: {
    width: '25rem',
    margin: {
      bottom: '0.3rem',
    },
  },
  input: {
    width: '25rem',
  },
});
