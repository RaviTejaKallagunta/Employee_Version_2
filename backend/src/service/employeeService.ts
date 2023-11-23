import Employee from "../model/employeeModel"

export const postEmployee=(name:string,department:string,salary:Number)=>{
const info= new Employee({name,department,salary})
return info.save()
}

export const getAllEmployees=()=>{
    return Employee.find({})
}
export const deleteEmployee=(id:string)=>{
return Employee.deleteOne({_id:id})
}