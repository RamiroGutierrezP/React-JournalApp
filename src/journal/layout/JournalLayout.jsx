import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components"
import PropTypes from 'prop-types'

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
        
        <Navbar drawerWidth={ drawerWidth }/>
        
        <Sidebar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar 
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
            />
            { children }
        </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}