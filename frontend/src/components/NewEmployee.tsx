import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { employeeType } from '../types/employeeType';

export const NewEmployee=({ onEmployeeAdded }: { onEmployeeAdded: () => void })=>{

    const [employee,setEmployee]=useState<employeeType>({ name : '', department : '', salary : 0 });

    const { name, department, salary } = employee;

    const handleChange=(change:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setEmployee({...employee,[change.target.name]:change.target.value})
    }

    const handleSelectChange=(change:SelectChangeEvent)=>{
        setEmployee({...employee,[change.target.name]:change.target.value})
    }

        const post = async(event:React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
        event.preventDefault();
        await axios.post('http://localhost:9999/save-employee',employee);
        onEmployeeAdded();

    }


    return(
        <>
        <br />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField id="name-input" label="Name" variant="outlined" type='text' name='name' value={name} onChange={(change)=>handleChange(change)} />
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="department-select-label">Department</InputLabel>
                                <Select
                                labelId="deparment-select-label"
                                id="deparment-select"
                                value={department}
                                label="Department"
                                name='department'
                                onChange={(change)=>handleSelectChange(change)}
                                >
                                    <MenuItem value={'manager'}>Manager</MenuItem>
                                    <MenuItem value={'developer'}>Developer</MenuItem>
                                    <MenuItem value={'tester'}>Tester</MenuItem>
                                </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="salary-input" label="Salary" variant="outlined" type='number' name='salary' value={salary} onChange={handleChange} />
                </Grid>
                <Grid item xs={1}>
                    <Stack spacing={2} direction="row">
                        <AddCircleRoundedIcon onClick={(event)=>post(event)} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}