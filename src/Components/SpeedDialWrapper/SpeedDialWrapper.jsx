
import CottageIcon from '@mui/icons-material/Cottage';
import CodeIcon from '@mui/icons-material/Code';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoIcon from '@mui/icons-material/Info';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const SpeedDialWrapper = (props) => {
  const { WrappedComponent } = props; 
  const history = useHistory();

  // speeddial puts items in a confusing direction....reverse them
  const options = [
    {url: '/', name: 'home', icon: <CottageIcon sx={{color: 'secondary.main'}}/>},
    {url: '/about', name: 'about', icon: <InfoIcon sx={{color: 'secondary.main'}}/>}, 
    {url: '/projects', name: 'projects', icon: <CodeIcon sx={{color: 'secondary.main'}}/>}, 
    // {url: '/contact', name: 'contact', icon: <MailOutlineIcon sx={{color: 'secondary.main'}}/>}, when this is ready add back
  ].reverse();



  return (
    <>
      <WrappedComponent/>
      <SpeedDial
        ariaLabel="speeddial navigation"
        FabProps={{size: 'large'}}
        sx={{ position: 'absolute', bottom: 16, right: 16}}
        icon={<AddIcon sx={{color: 'secondary.main'}}/>}
      >
        {options.map((option) => (
            <SpeedDialAction
                FabProps={{
                    size: 'large',
                    sx: { 
                    backgroundColor: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                  }
                }}
                key={option.name}
                icon={option.icon}
                tooltipTitle={option.name}
                onClick={() => history.push(option.url)}
            />
        ))}
      </SpeedDial>
    </>
  );
}

export default SpeedDialWrapper;