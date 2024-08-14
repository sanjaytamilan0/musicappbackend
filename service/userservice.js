import usermodel from "../model/usermodel.js";

const userservice = {
    register: async (data) => {
      console.log("ram", data);
      const {
        username,
        email,
        phone_number,                                         
      } = data;
      try {
        const existingUser = await usermodel.findOne({
          email,
        });
        console.log(existingUser);
        if (existingUser) {
          throw {
            error: "User with this email already exists.",
          };
        }
        const newUser = await usermodel.create({
         username,
         email, 
         phone_number,
        });
        console.log("user",newUser);
        
        return newUser;
      } catch (error) {
        // console.error("Error registering user:", error);
        throw error;
      }
    },



  
}

export default userservice;