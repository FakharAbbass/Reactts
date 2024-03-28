import React, { useEffect } from 'react'
import { Switch } from '@mui/material'
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const SwitchBtn = () => {
  useEffect(() => {
    //Runs only on the first render
  }, []);

    const [mode, setMode] = useState(false);

    const handleChange = ()=>{
      if(mode){
        setMode(false);
      }else{
        setMode(true);
      }
    }
    const darkTheme = createTheme({
      palette: {
        mode: mode ?"dark":"light",
      },
     
    });
  return (
  <ThemeProvider theme={darkTheme}>

    
      <div>
      <Switch
      checked = {mode}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }

    
    }
    />
    </div>
  </ThemeProvider>
  )
}

export default SwitchBtn
