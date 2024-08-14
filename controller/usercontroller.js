import userservice from "../service/userservice.js"



const userController = {
    register: async (req, res, next) => {
        try {
          const registerResult = await userservice.register(req.body);
          res.json({
            message: "Successfully registered",
            data: registerResult,
          });  
        } catch (error) {
        console.error(error);
          error.message = error.error;
          error.statuscode = 400;
          console.log(error);
          next(error);
        }
    },
  
}



export default userController;