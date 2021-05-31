import * as React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";

import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const drawerWidth = 240;

const MainLayout: React.FC<any> = ({ children }) => {
  const users: any =
    typeof window !== "undefined" && localStorage.getItem("user");
  const menuItems = [
    {
      id: 1,
      name: "Моя страница",
      link: `/users/${JSON.parse(users).id}`,
      icon: <AccountCircleIcon />,
    },
    {
      id: 2,
      name: "Лента",
      link: "/",
      icon: <FiberNewIcon />,
    },
    {
      id: 3,
      name: "Сообщения",
      link: "/messages",
      icon: <MessageIcon />,
    },
    {
      id: 4,
      name: "Друзья",
      link: "/friends",
      icon: <AccountCircleIcon />,
    },
    {
      id: 5,
      name: "Сообщества",
      link: "/groups",
      icon: <PeopleIcon />,
    },
  ];

  return (
    <>
      <Head>
        <title>{"SocialHub - социальная сеть"}</title>
        <meta
          name='description'
          content={`Социальная сеть. Заводи новых друзей по всему миру.`}
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content={"Музыка, треки, артисты, общения, друзья, знакомства"}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Navbar />

        <Drawer
          variant='permanent'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.id}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link href={item.link}>
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItem>
              ))}
            </List>

            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};
export default MainLayout;
