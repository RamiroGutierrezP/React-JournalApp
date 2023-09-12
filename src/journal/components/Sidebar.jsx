import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux"

export const Sidebar = ({ drawerWidth = 240}) => {

    const { displayName } = useSelector( state => state.auth )
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            // aria-label='mailbox folders'
        >
            <Drawer
                variant='permanent' // temporary if we want to hide it
                open
                sx={{
                    display: { xs:'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div' >
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Home', 'Profile', 'About', 'Hi'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container direction='column'>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Texto de ejemplo'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}

Sidebar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}