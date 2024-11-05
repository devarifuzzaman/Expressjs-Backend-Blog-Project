import path from "node:path";

export const MONGODB_CONNECTION = "";


// JWT config
export const JWT_SECRET = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRED = 60 * 60 * 24 * 30;

// Email config
export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; //15 Min
export const REQUEST_LIMIT_NUMBER = 3000; //3000 Request Per 15 Min

export const WEB_CACHE = false;
export const PORT = 5000;

export function UPLOAD_FOLDER(fileName){
	return path.resolve(process.cwd(), 'storage', fileName);
}