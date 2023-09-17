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

// Get data of all roadmaps and order them by ID
export function getAllRoadmaps(request, response) {
    pool.query(
        `SELECT * FROM departments WHERE type = false ORDER BY id`,
        async (error, result) => {
            if (error) {
                console.log(error);
            } else {
                await response.status(200).json(result.rows);
            }
        }
    );
}

// Get data of an roadmap by ID
export function getRoadmapByID(request, response) {
    const ID = parseInt(request.params.id);
    pool.query(
        `SELECT * FROM departments WHERE id = ${ID}`,
        async (error, result) => {
            if (error) {
                throw error;
            } else {
                await response.status(200).json(result.rows);
            }
        }
    );
}

// Insert roadmap data to database
export function addRoadmap(request, response) {
    const { title, content, image, description } = request.body;
    pool.query(
        `INSERT INTO departments (title, content_id, image, description, type) VALUES($1, $2, $3, $4, false)`,
        [title, content, image, description],
        async (error, result) => {
            if (error) {
                console.log("" + error);
            } else {
                await response.status(201).json(result.rows);
            }
        }
    );
}

// Update roadmap data in the database
export function updateRoadmap(request, response) {
    const ID = parseInt(request.params.id);
    const { title, content, image, description } = request.body;
    pool.query(
        `UPDATE departments SET title = $1, content_id = $2, image = $3, description = $4 WHERE id = ${ID}`,
        [title, content, image, description],
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
export function deleteRoadmap(request, response) {
    const ID = parseInt(request.params.id);
    pool.query(
        `DELETE FROM departments WHERE id = ${ID}`,
        async (error, result) => {
            if (error) {
                throw error;
            } else {
                await response.status(200).json(result.rows);
            }
        }
    );
}
