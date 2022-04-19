import '@ui5/webcomponents-icons/dist/action-settings';
import '@ui5/webcomponents-icons/dist/employee';
import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/post';
import {
  Avatar,
  AvatarColorScheme,
  AvatarShape,
  AvatarSize,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Icon,
  List,
  ListSeparators,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { createUseStyles } from 'react-jss';

export const ProfileSidebar = () => {
  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.Center} className={classes.content}>
      <Avatar
        colorScheme={AvatarColorScheme.Accent6}
        shape={AvatarShape.Circle}
        size={AvatarSize.XL}
        className={classes.avatar}>
        <img alt="Profile" src="/demo-image-profile.png" />
      </Avatar>
      <Title level={TitleLevel.H3} className={classes.title}>
        <strong>Amanda Smith</strong>
      </Title>
      <List separators={ListSeparators.None} className={classes.list}>
        <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.listItemContainer}>
          <Icon name="home" className={classes.listItemIcon} />
          <div className={classes.listItemText}>Dashboard</div>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.listItemContainer}>
          <Icon name="employee" className={classes.listItemIcon} />
          <div className={classes.listItemText}>Personal Information</div>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.listItemContainer}>
          <Icon name="post" className={classes.listItemIcon} />
          <div className={classes.listItemText}>Messages</div>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.listItemContainer}>
          <Icon name="action-settings" className={classes.listItemIcon} />
          <div className={classes.listItemText}>Settings</div>
        </FlexBox>
      </List>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  content: {
    width: '100%',
  },
  avatar: {
    margin: '3rem 0 2rem',
  },
  title: {
    marginBottom: '5rem',
  },
  list: {
    display: 'flex',
  },
  listItemContainer: {
    padding: '1rem',
    cursor: 'pointer',
    height: '2rem',
    '&:hover': {
      backgroundColor: ThemingParameters.sapBackgroundColor,
    },
  },
  listItemIcon: {
    margin: {
      left: '3rem',
      right: '2rem',
    },
    height: '2rem',
    width: '2rem',
    color: ThemingParameters.sapBrandColor,
  },
  listItemText: {
    width: '100%',
    paddingBottom: '0.5rem',
  },
});
