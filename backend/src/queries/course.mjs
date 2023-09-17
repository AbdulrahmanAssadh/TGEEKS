import postgres from "pg";
import { HOST, USER, PASSWORD, DATABASE, PORT } from "../Config/db.config.mjs";
import { generateFileNameOnServer } from "../workers.mjs";
import resizeImg from 'resize-img'
// import jimp from "jimp";
import sharp from "sharp";
import {
    coursesImagesPath,
    coursesMimesPath,
    serverCoursesMimesPath,
    serveroursesImagesPath,
} from "../Config/path.config.mjs";
import { __dirname } from "../../server.mjs";
import { readFile, unlink, writeFile } from "fs";

// Connect to database
const pool = new postgres.Pool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT,
});

// Get data of all courses and order them by ID
export function getAllCourses(request, response) {
    const sql = request.params.sql;
    pool.query(
        sql,
    ).then((result)=>{
        let data = result.rows;
        try {
            data = data.map((element) => {
                element.image =
                    coursesImagesPath.substring(9) + element.image;
                return element;
            });
        }catch (error) {
            console.log(error.message);
        }
        // console.log(data);
        // console.log(
        //     "======================================================="
        // );
        response.status(200).json(data);
    }).catch(error=>
        console.log(error.message));
}

// Get data of any course by ID
export function getCourseByID(request, response) {
    const ID = parseInt(request.params.id);
    pool.query(
        `SELECT title, description, tags, image, admin_id, init_date
         FROM courses
         WHERE id = ${ID}
         ORDER BY id`,
        async (error, result) => {
            if (error) {
                throw error;
            } else {
                let data = result.rows[0];
                data.image = coursesImagesPath.substring(9) + data.image;
                await response.status(200).json(data);
            }
        });
}

// Get data of any course by Name and Init_date
// export function getCourseByData(title, init_date) {
export function getCourseByData(title) {
    pool.query(
        // `SELECT id, title, description, tags, image, admin_id, init_date FROM courses WHERE title = ${title} and init_date = ${init_date}`,
        `SELECT id, title, description, tags, image, admin_id, init_date FROM courses WHERE title = ${title}`,
        async (error, result) => {
            if (error) {
                throw error;
            } else {
                let data = result.rows[0];
                console.log(data);
                data.image = coursesImagesPath.substring(9) + data.image;
                console.log(data);
            }
        }
    );
}

// Insert course data to database
export function addCourse(request, response) {
    const { title, description, tags, admin_id, init_date } = request.body;
    const image = request.files.image;

    const fileName = generateFileNameOnServer(image.name);

    image.mv(coursesImagesPath + fileName, (err) => {
        if (err) {
            console.log(err.message);
        }
    });

    // console.log(
    //     __dirname.replace(/\\/g, "/") +
    //         coursesImagesPath.substring(1) +
    //         fileName
    // );

    // console.log(__dirname +
    //     coursesImagesPath.replace(/\//g, "\\").substring(1) + fileName)

    // const mime = resizeImg(readFile(coursesImagesPath + fileName), {
    //     height: 128,
    // })
    //
    // writeFile(coursesMimesPath, mime)

    // sharp(__dirname.replace(/\\/g, '/')+
    //     coursesImagesPath.substring(1) + fileName).resize({height: 112}).write("");
    // sharp(readFile(coursesImagesPath+ fileName, (error, data)=>{
    //     if (error) {
    //         console.log(error.message);
    //     } else {
    //         return data;
    //     }
    // })).resize({height: 112}).write(coursesMimesPath + fileName);

    // sharp(
    //     __dirname +
    //     coursesImagesPath.replace(/\//g, "\\").substring(9) + fileName).rea
    //     readFile(
    //         __dirname.replace(/\\/g, "/") +
    //             coursesImagesPath.substring(1) +
    //             fileName,
    //         (err, data) => {
    //             if (err) {
    //                 console.log(err.message);
    //             } else {
    //                 return data;
    //             }
    //         }
    //     )
    // )
    //     .resize({ width: 112 })
    //     .toFile(
    //         // __dirname +
    //         coursesMimesPath + fileName
    //     );

    // const mime = jimp.read(
    //     __dirname + coursesImagesPath.substring(1) + fileName
    // );
    // console.log("welcome");
    // const resizedMime = mime.Jimp.resize(jimp.AUTO, 112);
    // resizedMime.write(__dirname + coursesMimesPath.substring(1) + fileName);

    // mime.mv(coursesImagesPath + fileName, (err) => {
    //     if (err) {
    //         console.log(err.message);
    //     }
    // });

    pool.query(
        `INSERT INTO courses (title, description, tags, image, admin_id, init_date) VALUES($1, $2, $3, $4, $5, $6)`,
        [title, description, tags, fileName, admin_id, init_date],
        (error, result) => {
            if (error) {
                console.log(error.message);
            } else {
                // console.log(result.rows[0]);
                // let data = getCourseByData(title, init_date);
                response.status(201).json(result.rows[0]);
            }
        }
    );
}

// Update course data in the database
export function updateCourse(request, response) {
    const ID = parseInt(request.params.id);
    try {
        var { title, description, tags, admin_id, init_date } = request.body;
        let image = request.files.image;
        pool.query(
            `Select image From courses WHERE id = ${ID}`,
            (error, result) => {
                if (error) {
                    console.log(error.message);
                } else {
                    unlink(
                        __dirname +
                            coursesImagesPath.substring(1) +
                            result.rows[0].image,
                        (err) => {
                            if (err) console.log(err.message);
                        }
                    );
                }
            }
        );

        console.log("generate new name");
        var fileName = generateFileNameOnServer(image.name);
        // console.log(fileName);
        console.log("save image to path");
        image.mv(coursesImagesPath + fileName, (err) => {
            if (err) {
                console.log(err.message);
            }
        });
    } catch {
        var { title, description, fileName, tags, admin_id, init_date } =
            request.body;
    }

    // console.log("update datebase");
    // setTimeout(5000);
    pool.query(
        `UPDATE courses SET title = $1, description = $2, image = $3, tags = $4, admin_id = $5, init_date = $6 WHERE id = ${ID}`,
        [title, description, fileName, tags, admin_id, init_date],
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
export function deleteCourse(request, response) {
    const ID = parseInt(request.params.id);
    // pool.on
    pool.query(
        `UPDATE courses SET deleted = true WHERE id = ${ID}`,
        async (error, result) => {
            if (error) {
                throw error;
            } else {
                await response.status(200).json(result.rows);
            }
        }
    );
}
