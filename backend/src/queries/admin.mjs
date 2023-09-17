import postgres from "pg";
import { HOST, USER, PASSWORD, DATABASE, PORT } from "../Config/db.config.mjs";

// Connect to database
const pool = new postgres.Pool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

// Get data of members and order them by ID
export function getAdmins(request, response) {
  pool.query("SELECT * FROM admins ORDER BY id", async (error, result) => {
    if (error) {
      console.log(error);
    } else {
      await response.status(200).json(result.rows);
    }
  });
}

// Get all owners order them by ID
export function getOwners(request, response) {
  const type = parseInt(request.params.is_owner);
  pool.query(
    `SELECT * FROM admins WHERE is_owner = ${type} ORDER BY id`,
    async (error, result) => {
      if (error) {
        console.log(error);
      } else {
        await response.status(200).json(result.rows);
      }
    }
  );
}

// Get data of an admin by ID
export function getAdminByID(request, response) {
  const ID = parseInt(request.params.id);
  pool.query(`SELECT * FROM admins WHERE id = ${ID}`, async (error, result) => {
    if (error) {
      throw error;
    } else {
      await response.status(200).json(result.rows);
    }
  });
}

// Insert admin data to database
export function loginAdmin(request, response) {
  const { email, password } = request.body;
  pool
    .query(`SELECT * from admins WHERE email = $1 and password = $2`, [
      email,
      password,
    ])
    .then((result) => response.status(201).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Insert admin data to database
export function addAdmin(request, response) {
  const {
    real_name,
    username,
    email,
    password,
    type,
    image,
    description,
    init_date,
  } = request.body;
  pool.query(
    `INSERT INTO admins (real_name, username, email, password, \
        type, image, description, init_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
    [real_name, username, email, password, type, image, description, init_date],
    async (error, result) => {
      if (error) {
        console.log("" + error);
      } else {
        await response.status(201).json(result.rows);
      }
    }
  );
}

// Update admin data in the database
export function updateAdmin(request, response) {
  const ID = parseInt(request.params.id);
  const {
    real_name,
    username,
    email,
    password,
    type,
    image,
    description,
    init_date,
  } = request.body;
  pool.query(
    `UPDATE admins SET real__name = $1, user_name= $2, email = $3,\
     password = $4, type = $5, image = $6, description = $7, \
     init_date = $8 WHERE id = ${ID}`,
    [
      real_name,
      username,
      email,
      password,
      type,
      image,
      description,
      init_datee,
    ],
    async (error, result) => {
      if (error) {
        throw error;
      } else {
        await response.status(200).json(result.rows);
      }
    }
  );
}

// Delete member data from database
export function deleteAdmin(request, response) {
  const ID = parseInt(request.params.id);
  pool.query(`DELETE FROM admins WHERE id = ${ID}`, async (error, result) => {
    if (error) {
      throw error;
    } else {
      await response.status(200).json(result.rows);
    }
  });
}
