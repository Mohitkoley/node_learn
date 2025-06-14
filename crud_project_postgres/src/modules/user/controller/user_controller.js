import 
    UserService
 from "../service/user_service.js";

class UserController {
    static async userRegister(req, res) {
        const {name, email, password} = req.body;
        try {
            const user = await UserService.registerUser(name, email, password);
            res.status(201).json({
                message: "User created successfully",
                user: user
            });
        } catch (error) {
            res.status(error.statusCode || 400).json({
                message: error.message,
                error: error.name || 'Error'
            });
        }
    }

    static async userLogin(req, res) {
        const {email, password} = req.body;
        try {
            const user = await UserService.loginUser(email, password);
            res.status(201).json({
                message: "User logged in successfully",
                user: user
            });
        } catch (error) {
            res.status(error.statusCode || 400).json({
                message: error.message,
                error: error.name || 'Error'
            });
        }
    }
}

export default UserController;
