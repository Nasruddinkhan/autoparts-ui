import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const ComboBox = (props) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.top100Films}
      sx={{ width: "100%" , padding: "1rem"}}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  )
}

export default ComboBox