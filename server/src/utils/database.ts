import mongoose from 'mongoose';

declare global {
  var mongoose: any;
}

const URI: string =
  'mongodb+srv://admin:6FOoAD26AEOLkQnB@cluster0.lqlmuvw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set('strictQuery', false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
