import { ShellBar, StandardListItem, Avatar } from '@ui5/webcomponents-react';

export const NavBar = () => {
  return (
    <ShellBar
      logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
      menuItems={
        <>
          <StandardListItem data-key="1">Dashboard</StandardListItem>
          <StandardListItem data-key="2">My Account</StandardListItem>
        </>
      }
      notificationsCount="5"
      showNotifications
      showProductSwitch
      primaryTitle="My Account"
      profile={
        <Avatar>
          <img alt="Profile" src="/demo-image-profile.png" />
        </Avatar>
      }
    />
  );
};
