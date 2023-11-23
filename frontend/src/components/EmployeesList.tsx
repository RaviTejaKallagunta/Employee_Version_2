import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { employeeGet } from '../types/employeeType';

export const EmployeeList=({ onEmployeeDeleted }: { onEmployeeDeleted: () => void }) => {

  const [allEmployees,setAllEmployees]=useState<employeeGet[]>([]);

  const getDetails=async()=>{
   const res= await axios.get('http://localhost:9999/get-employees');
   setAllEmployees(res.data.data);
  }

  useEffect(()=>{
    getDetails();
  },[])

  const deleteEmployee=async(_id:string)=>{
    await axios.delete(`http://localhost:9999/delete-employee/${_id}`)
    onEmployeeDeleted();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="employee table">
        <TableHead>
          <TableRow>          
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Department</b></TableCell>
            <TableCell align="center"><b>Salary</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          {allEmployees.map((element,index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="element" align="center">{element.name}</TableCell>
              <TableCell align="center">{element.department}</TableCell>
              <TableCell align="center">{element.salary}</TableCell>
              <TableCell align="center"><Grid item xs={8}>
              <DeleteForeverTwoToneIcon onClick={()=>deleteEmployee(element._id)}/>
              </Grid></TableCell>
            </TableRow>      
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
