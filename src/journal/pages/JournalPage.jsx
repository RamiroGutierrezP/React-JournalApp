
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
// import { NoteView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          bgcolor: 'error.main',
          ':hover': {
            bgcolor: 'error.main',
            opacity: 0.9,
          },
          position: 'fixed',
          bottom: 50,
          right: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
    
  )
}
