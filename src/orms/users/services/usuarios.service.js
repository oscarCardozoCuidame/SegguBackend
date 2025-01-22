const UserRepository = require('../repositories/usuarios.repository');
const { buildImage, deleteImage } = require('../../../utils/imageHandler');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const path = require("path");

const UserService = {
  getAllUsers: async () => {
    try{
      return UserRepository.getAll();
    }catch(err){
      console.log("Error al guardar los datos");
      return err;
    }
  },

  getUserById: async (id) => {
    const user = UserRepository.getById(id);

    const imagePath = path.resolve(`../uploads/images/imageProfile/${user.img_profile_path}`);

    if (!fs.existsSync(imagePath)) {
      throw new Error("El archivo de la imagen no existe en el sistema.");
    }

    const imageBuffer = fs.readFileSync(imagePath);
    user.img_profile_path = imageBuffer.toString("base64");

    return user;
  },

  createUser: async (userData) => {
    const salt = await bcrypt.genSalt(10);
    const privename = userData.username.replace(/\s+/g, '-').toLowerCase();
    userData.password = await bcrypt.hash(userData.password, salt);
    userData.token = await crypto.randomBytes(32).toString('hex');
    
    if(userData.img_profile_path){
      userData.img_profile_path = await buildImage(privename, "imageProfile", userData.img_profile_path);
    }

    return UserRepository.create(userData);
  },

  updateUser: async (id, userData) => {
    const user = await UserRepository.getById(id);
    if (!user) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }
  
    // Verificar y hashear la contraseña si se incluye
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }
  
    // Verificar si hay una nueva imagen
    if (userData.img_profile_path) {
      const privateName = user.username.replace(/\s+/g, '-').toLowerCase();
      
      // Eliminar la imagen anterior si existe
      if (user.img_profile_path) {
        try {
          await deleteImage("imageProfile", user.img_profile_path);
        } catch (error) {
          console.error("Error eliminando imagen anterior: ", error.message);
        }
      }
  
      // Construir y guardar la nueva imagen
      try {
        userData.img_profile_path = await buildImage(privateName, "imageProfile", userData.img_profile_path);
      } catch (error) {
        throw new Error(`Error al guardar la nueva imagen: ${error.message}`);
      }
    }
  
    return UserRepository.update(id, userData);
  },

  deleteUser: async (id) => {
    const user = await UserRepository.findById(id);

    if (user.img_profile_path) {
      try {
        await deleteImage("imageProfile", user.img_profile_path);
      } catch (error) {
        console.error("Error eliminando imagen anterior: ", error.message);
      }
    }

    return UserRepository.delete(id);
  },
};

module.exports = UserService;
