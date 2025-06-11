import {
    serviceUserLogin, 
    serviceUserRegister
} from "../service/userService.js";

const controllerUserLogin = async (req, res) => {
    try{
        const user = await serviceUserLogin(req.body.email, req.body.password);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const controllerUserRegister = async (req, res) => {
    try{
        const user = await serviceUserRegister(req.body.name, req.body.email, req.body.password);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export {
    controllerUserLogin,
    controllerUserRegister
}