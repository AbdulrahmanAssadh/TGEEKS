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

// Get data of lessons and order them by id
export function getAllLessons(request, response) {
  const sql = request.params.sql;
  pool
    .query(sql)
    .then((result) => {
      response.status(200).json(result.rows);
    })
    .catch((error) => console.error(error.message));
}

// Get all lessons of a course and order them by id
export function getLessonsOfCourse(request, response) {
  const type = parseInt(request.params.id);
  pool.query(
    `SELECT id, title FROM lessons WHERE course_id = ${type} ORDER BY id`,
    (error, result) => {
      if (error) {
        console.log(error.message);
      } else {
        response.status(200).json(result.rows);
      }
    }
  );
}

// Get data of a lesson by id
export function getLessonByID(request, response) {
  const ID = parseInt(request.params.id);
  pool.query(
    `SELECT title, course_id, admin_id, description, content, init_date FROM lessons WHERE id = ${ID}`,
    async (error, result) => {
      if (error) {
        throw error.message;
      } else {
        console.log("done");
        await response.status(200).json(result.rows[0]);
      }
    }
  );
}

// Insert lesson data to database
export function addLesson(request, response) {
  const { title, description, tags, content, course_id, admin_id } =
    request.body;
  const date = new Date().toLocaleString();
  pool
    .query(
      `INSERT INTO lessons (title, description, tags, content, course_id, admin_id, init_date) VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [title, description, tags, content, course_id, admin_id, date]
    )
    .then((result) => response.status(201).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Update lesson data in the database
export function updateLesson(request, response) {
  const ID = parseInt(request.params.id);
  const { title, description, tags, content, course_id, admin_id } =
    request.body;
  pool
    .query(
      `UPDATE lessons SET title = $1, description = $3, tags = $3, content = $4, course_id = $5, admin_id = $6 WHERE id = ${ID}`,
      [title, description, tags, content, course_id, admin_id]
    )
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.error(error.message));
}

// Delete lesson data from database
export function deleteLesson(request, response) {
  const ID = parseInt(request.params.id);
  pool.query(`DELETE FROM lessons WHERE id = ${ID}`, async (error, result) => {
    if (error) {
      throw error.message;
    } else {
      await response.status(200).json(result.rows);
    }
  });
}
