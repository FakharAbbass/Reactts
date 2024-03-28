import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ToggleBtn() {

    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };

   
  return (
    <ToggleButtonGroup
    color='primary'
    size='small'
    value={alignment}
    exclusive
    onChange={handleAlignment}
    // aria-label="text alignment"
  >
    <ToggleButton value="uk"  style={{textTransform: 'none'}}  sx={{
      "&.MuiToggleButtonGroup-grouped": {
        borderRadius: "4px !important",
      
        border: "none"
      }
    }}>
    uk
    </ToggleButton>
    <ToggleButton value="en"  style={{textTransform: 'none'}} sx={{
      "&.MuiToggleButtonGroup-grouped": {
        borderRadius: "4px !important",
      
        border: "none"
      }
    }}>
    en
    </ToggleButton>
   
  </ToggleButtonGroup>
  )
}

export default ToggleBtn
