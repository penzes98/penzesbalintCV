import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Schools",
        icon: <SchoolIcon />,
        path: "/schools"
    },
    {
        title: "Experiences",
        icon: <WorkIcon />,
        path: "/experiences"
    },
    {
        title: "About Me",
        icon: <InfoIcon />,
        path: "/about-me"
    },

]

