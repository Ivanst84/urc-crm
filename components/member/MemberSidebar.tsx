import React, { useState } from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material';

export default function MemberSidebar() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-blue-600 text-white transition-all duration-300 ${
        open ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <List component="nav">
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <AccountCircle style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Ver Miembro" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <Link href="/users/member1">
                <ListItemText primary="Miembro 1" />
              </Link>
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <Link href="/users/member2">
                <ListItemText primary="Miembro 2" />
              </Link>
            </ListItem>
            {/* Agrega más opciones aquí */}
          </List>
        </Collapse>
        {/* Agrega más opciones aquí */}
      </List>
    </div>
  );
}