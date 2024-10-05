

const {default: mongoose}=require("mongoose");


const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

mongoose.connect(uri, {
  dbName: dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully!');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
