import { Menu, MenuItem } from '@mui/material'
import {useState} from 'react'
import {Notification} from "../../components";

function NotificationMenu(props) {
    const {notifications, handleCloseNotificationMenu, anchorNotification} = props;
  return (
    <Menu
        anchorEl={anchorNotification}
        open={Boolean(anchorNotification)}
        onClose={handleCloseNotificationMenu}
        className='max-h-[75%]'
    >
        {notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleCloseNotificationMenu}>
              <Notification data={notification} ></Notification>
            </MenuItem>
        ))}
    </Menu>
  )
}

export default NotificationMenu