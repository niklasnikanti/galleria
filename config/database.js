const db_name = 'gallery';
const db_url = 'mongodb://localhost:27017/';

if (process.env.OPENSHIFT_MONGODB_DB_URL){
  db_url = process.env.OPENSHIFT_MONGODB_DB_URL;
} else if (process.env.MONGO_URL) {
	db_url = process.env.MONGO_URL;
}

module.exports = {
	database: db_url + db_name,
	secret: 'yoursecret'
}