const express =require("express")
const router= express.Router()
const roleController=require("../controllers/roleController")



router.get("/",roleController.getAllRoles)
router.post("/",roleController.createNewRol)


module.exports=router