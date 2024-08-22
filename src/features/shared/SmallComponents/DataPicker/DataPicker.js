import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ label, width }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker  sx={{width: width, bottom: "14px", '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderLeft: 'none', 
            borderRight: 'none', 
            borderTop: 'none',
          },
        },}} label={label}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}