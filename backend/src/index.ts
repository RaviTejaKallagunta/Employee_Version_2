import express from 'express'
import cors from 'cors'
import connection from './model/database.ts'
import router from './router/routes.ts'
const exp=express() 
exp.use(cors())
exp.use(express.json())
exp.use('/',router)
connection(); 

const PORT=9999;
exp.listen(PORT,()=>console.log(`Server started running on PORT ${PORT}`))