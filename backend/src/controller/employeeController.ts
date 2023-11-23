import { Request,Response } from "express"
import { deleteEmployee, getAllEmployees, postEmployee } from "../service/employeeService";

export const saveEmployee=async(req:Request,res:Response)=>{
    const {name ,department ,salary}=req.body
    // console.log(req.body)
   const data= await postEmployee(name, department, salary)
   res.send({success:true, message:"Data saved successfully"});
}

export const retriveAllEmployees=async(req:Request,res:Response)=>{
const result=await getAllEmployees()
res.send({success:true,message:"Data retrived Successfully",data:result})
}
export const removeEmployee=async(req:Request,res:Response)=>{
    const id=req.params.id
    await deleteEmployee(id);
   res.send({success:true,message:"Deleted successfully"})
}