import fs, { unlink } from "fs";
import postgres from "pg";
import { HOST, USER, PASSWORD, DATABASE, PORT } from "../Config/db.config.mjs";
import { generateFileNameOnServer } from "../workers.mjs";
import {
  accountsImagesPath,
  coursesImagesPath,
} from "../Config/path.config.mjs";
import { __dirname } from "../../server.mjs";

// Connect to database
const pool = new postgres.Pool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

// Get data of members and order them by ID
export function getAccounts(request, response) {
  pool
    .query("SELECT * FROM accounts ORDER BY id")
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Get account infot by email and password
export function Login(request, response) {
  const { email, password } = request.body;
  console.log("before log")
  pool
    .query("SELECT * FROM accounts WHERE email = $1 AND password = $2", [
      email,
      password,
    ])
    .then((result) => response.status(200).json(result.rows[0]))
    .catch((error) => console.error(error.message));
  console.log("before log")
}

// Get all accounts of a type and order them by ID
export function getAccountsByType(request, response) {
  const type = parseInt(request.params.id);
  pool
    .query(`SELECT * FROM accounts WHERE type = ${type} ORDER BY id`)
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Get data of an account by ID
export function getAccountByID(request, response) {
  const ID = parseInt(request.params.id);
  pool
    .query(`SELECT * FROM accounts WHERE id = ${ID}`)
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Insert account data to database
export function addAccount(request, response) {
  const { real_name, username, email, password, birthday, init_date } = request.body;
  const image = request.files.image;

  const fileName = generateFileNameOnServer(image.name);

  image.mv(accountsImagesPath + fileName, (err) => {
    if (err) {
      console.log(err.message);
    }
  });

  pool
    .query(
      `INSERT INTO accounts (real_name, username, email, password, birthday, init_date, image) VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [real_name, username, email, password, birthday, init_date, fileName]
    )
    .then((result) => response.status(201).json(result.rows[0]))
    .catch((error) => console.error(error.message));
}

// Update account data in the database
export function updateAccount(request, response) {
  const ID = parseInt(request.params.id);
  let fileName;

  let real_name = request.body.name;
  let username = request.body.username;
  let email = request.body.email;
  let password = request.body.password;
  let birthday = request.body.birthday;
  let init_date = request.body.init_date;

  try {
    let image = request.files.image;
    pool
      .query(`Select image From accounts WHERE id = ${ID}`)
      .then((result) => {
        unlink(
          __dirname + accountsImagesPath.substring(1) + result.rows[0].image,
          (err) => {
            if (err) console.log(err.message);
          }
        );
      })
      .catch((error) => console.error(error.message));

    fileName = generateFileNameOnServer(image.name);
    image.mv(accountsImagesPath + fileName, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  } catch {
    fileName = request.body.image;
  }

  pool
    .query(
      `UPDATE accounts SET real_name = $1, username = $2, email = $3, password = $4, birthday = $5, init_date = $6 image=$7 WHERE id = ${ID}`,
      [real_name, username, email, password, birthday, init_date, fileName]
    )
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Delete member data from database
export function deleteAccount(request, response) {
  const ID = parseInt(request.params.id);
  pool
    .query(`UPDATE courses SET deleted = true WHERE id = ${ID}`)
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}
