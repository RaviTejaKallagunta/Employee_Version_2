import express from 'express'
import { removeEmployee, retriveAllEmployees, saveEmployee } from '../controller/employeeController';
const router=express.Router();

router.post('/save-employee',saveEmployee)
router.get('/get-employees',retriveAllEmployees)
router.delete('/delete-employee/:id',removeEmployee)
export default router