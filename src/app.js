import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()
app.use(cors({origin :process.env.CORS_ORIGIN,credentials: true}))
/*Default roop se, browser kisi bhi frontend ko kisi dusre domain ke backend se data nikalne nahi deta.

Is line se aap Express ko bol rahe ho: "Sirf usi website ko mera data access karne dena jiska URL .env file ke CORS_ORIGIN mein likha hai (jaise http://localhost:5173 aapka React app)." */
app.use(express.json({limit:"16kb"})) // json ma jab data aya ga tab asa lele ga 
app.use(express.urlencoded({extended :true ,limit:"16kb"})) 
/* jab url sa data aya ga tab issa lenga or url encoded isliya lagaya hai kyu ki It tells your backend server to parse incoming requests that contain URL-encoded payloads and format them into a clean JavaScript object inside . What is "URL-Encoded" Data?
This is the standard, traditional format that web browsers use to send data when a user fills out a native HTML form and hits the "Submit" button.

Instead of sending clean JSON data like {"name": "Dave"}, an HTML form compresses the data into a single text string of key-value pairs separated by ampersands (&), where spaces and special characters are replaced by codes (like %20 or +).

A Real-World Example:
If a user fills out a login form:

Username: dave wolf

Password: secret123

The browser encodes and transmits it across the network looking exactly like this:

Plaintext username=dave+wolf&password=secret123 
 */

app.use(express.static("public")) 
/*app.use(express.static("public")) is a built-in middleware function in Express that tells your server to serve static files (like raw HTML, CSS images, PDFs, or frontend JavaScript files) directly to the browser from a folder named public.

"Static" means these files do not change dynamically when a user requests them—they are sent to the client exactly as they are stored on your hard drive. */
app.use(cookieParser())

export default app