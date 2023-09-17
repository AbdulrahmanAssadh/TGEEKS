import express, { json, urlencoded } from "express";
import {
  getAccounts,
  getAccountsByType,
  Login,
  getAccountByID,
  addAccount,
  updateAccount,
  deleteAccount,
} from "./src/queries/account.mjs";
import {
  getAllLessons,
  getLessonsOfCourse,
  getLessonByID,
  addLesson,
  updateLesson,
  deleteLesson,
} from "./src/queries/lesson.mjs";
import {
  getAllCourses,
  getCourseByID,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseByData,
} from "./src/queries/course.mjs";
import {
  getAllRoadmaps,
  getRoadmapByID,
  addRoadmap,
  updateRoadmap,
  deleteRoadmap,
} from "./src/queries/roadmap.mjs";
import {
  getAdmins,
  getOwners,
  getAdminByID,
  addAdmin,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} from "./src/queries/admin.mjs";
import {
  getAllPosts,
  getRecentPosts,
  getPopularPosts,
  getMainPagePosts,
  getPostByID,
  setPostToFavorite,
  setPostToUnfavorite,
  addPost,
  updatePost,
  deletePost,
} from "./src/queries/post.mjs";
import { uploadLessonImage } from "./src/queries/images.mjs";
import fileUploader from "express-fileupload";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

/**
 * To get server folder on the disk
 * 1- get the whole index.mjs path and store it in __filename
 * 2- get directry from __filename
 * Reason: becouse we set the project type as module not a commonJS
 */
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();

app.use(
  fileUploader(/*{
        createParentPath: true,
    }*/)
);

app.use(express.static(path.join(__dirname, "uploads")));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(cors());

/*
Beginning of the routes
 */
app.get("/accounts", getAccounts); // Get all accounts route
app.get("/account", getAccountsByType); // Get all accounts by type route
app.post("/account/login", Login); // Get data of an account by email and password
app.get("/account/:id", getAccountByID); // Get an account by ID route
app.post("/account", addAccount); // Add an account route
app.put("/account/:id", updateAccount); // Update an account route
app.delete("/account/:id", deleteAccount); // Delete an account route

app.get("/admins", getAdmins); // Get all admins route
app.get("/owners", getOwners); // Get all accounts by type route
app.get("/admin/:id", getAdminByID); // Get an admin by ID route
app.post("/admin", addAdmin); // Add an admin route
app.post("/admin/login", loginAdmin); // Add an admin route
app.put("/admin/:id", updateAdmin); // Update an admin route
app.delete("/admin/:id", deleteAdmin); // Delete an admin route

app.get("/lessons/:sql", getAllLessons); // Get all lessons route
// app.get("/lessons/:type", getLessonsOfCourse); // Get all lessons route
app.get("/lesson/:id", getLessonByID); // Get a lesson by ID route
app.post("/lesson", addLesson); // Add a lesson route
app.put("/lesson/:id", updateLesson); // Update a lesson route
app.delete("/lesson/:id", deleteLesson); // Delete a lesson route

app.get("/courses/:sql", getAllCourses); // Get all courses route
app.get("/course/:id", getCourseByID); // Get a course by ID route
app.post("/course", addCourse); // Add a course route
app.put("/course/:id", updateCourse); // Update a course route
app.delete("/course/:id", deleteCourse); // Delete a course route

app.get("/roadmaps", getAllRoadmaps); // Get all roadmaps route
app.get("/roadmap/:id", getRoadmapByID); // Get a roadmap by ID route
app.post("/roadmap", addRoadmap); // Add a roadmap route
app.put("/roadmap/:id", updateRoadmap); // Update a roadmap route
app.delete("/roadmap/:id", deleteRoadmap); // Delete a roadmap route

// app.get("/roadmaps", roadmap.getAllRoadmaps); // Get all roadmaps route
// app.get("/roadmap/:id", roadmap.getRoadmapByID); // Get a roadmap by ID route
app.post("/images/upload/lesson", uploadLessonImage); // Add a roadmap route
// app.put("/roadmap/:id", roadmap.updateRoadmap); // Update a roadmap route
// app.delete("/roadmap/:id", roadmap.deleteRoadmap); // Delete a roadmap route

app.get("/posts", getAllPosts); // Get all posts route
app.get("/post/latest", getRecentPosts); // Increase the number of users who favorite the post
app.get("/post/popular", getPopularPosts); // Increase the number of users who favorite the post
app.get("/post/mainPage", getMainPagePosts); // Increase the number of users who favorite the post
app.get("/post/:id", getPostByID); // Get a post by ID route
app.post("/post/favorite", setPostToFavorite); // Increase the number of users who favorite the post
app.post("/post/unfavorite", setPostToUnfavorite); // Decrease the number of users who favorite the post
app.post("/post", addPost); // Add a post route
app.put("/post/:id", updatePost); // Update a post route
app.delete("/post/:id", deletePost); // Delete a post route

/*
  Ending of the routes
 */

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "Welcome to app" });
});
