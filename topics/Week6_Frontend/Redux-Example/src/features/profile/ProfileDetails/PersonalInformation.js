import '@ui5/webcomponents-icons/dist/edit';
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Label,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { createUseStyles } from 'react-jss';

export const PersonalInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.header}>
        <Title level={TitleLevel.H1}>Personal Information</Title>
        <Button icon="edit" design={ButtonDesign.Transparent} />
      </FlexBox>
      <FlexBox direction={FlexBoxDirection.Column} className={classes.content}>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            First Name
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            Amanda
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Middle Name
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            Katrina
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Last Name
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            Smith
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Role
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            Product Manager
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Unique ID
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            SM00891
          </Title>
        </FlexBox>
        <FlexBox className={classes.contentItem}>
          <Label showColon className={classes.contentItemLabel}>
            Email
          </Label>
          <Title level={TitleLevel.H6} className={classes.contentItemTitle}>
            amanda.smith999@example.com
          </Title>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    marginBottom: '2rem',
  },
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
