import postgres from "pg";
import { HOST, USER, PASSWORD, DATABASE, PORT } from "../Config/db.config.mjs";
import {
  accountsImagesPath,
  coursesImagesPath,
} from "../Config/path.config.mjs";

// Connect to database
const pool = new postgres.Pool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

// Get data of posts and order them by id
export function getAllPosts(request, response) {
  pool
    .query(
      "SELECT id, title, description, tags, init_date FROM user_posts ORDER BY id"
    )
    .then((result) => response.status(200).json(result.rows))
    .catch((error) => console.log(error.message));
}

// Get data of a post by id
export function getPostByID(request, response) {
  const ID = parseInt(request.params.id);

  pool.query(`UPDATE user_posts SET viewed = viewed + 1 WHERE id = ${ID}`);

  pool.query(
    `SELECT id, title, member_id, description, content, init_date, tags, viewed, favorited FROM user_posts WHERE id = ${ID}`,
    (error, result) => {
      if (error) {
        console.log(error.message);
      } else {
        response.status(200).json(result.rows[0]);
      }
    }
  );
}

export function getRecentPosts(request, response) {
  pool.query(
    `SELECT id, title, description, tags FROM user_posts ORDER BY init_date DESC LIMIT 6`,
    (error, result) => {
      if (error) {
        console.log(error.message);
      } else {
        response.status(200).json(result.rows);
      }
    }
  );
}

export function getPopularPosts(request, response) {
  pool.query(
    `SELECT id, title, description, tags FROM user_posts ORDER BY viewed DESC LIMIT 2`,
    (error, result) => {
      if (error) {
        console.log(error.message);
      } else {
        response.status(200).json(result.rows);
      }
    }
  );
}

export function getMainPagePosts(request, response) {
  let data = {};
  pool
    .query(
      `SELECT user_posts.id, user_posts.title, user_posts.description, user_posts.tags, accounts.id, member_id , accounts.username, accounts.image FROM user_posts LEFT JOIN accounts ON user_posts.member_id = accounts.id ORDER BY user_posts.viewed DESC LIMIT 2`
    )
    .then((result) => {
      let temp = result.rows;
      temp = temp.map((element) => {
        element.image = accountsImagesPath.substring(9) + element.image;
        return element;
      });
      data.most_viewed = temp;
    })
    .catch((error) => console.log(error.message));
  pool
    .query(
      `SELECT user_posts.id, user_posts.title, user_posts.description, user_posts.tags, accounts.id, accounts.username, accounts.image FROM user_posts LEFT JOIN accounts ON user_posts.member_id = accounts.id ORDER BY user_posts.init_date DESC LIMIT 6`
    )
    .then((result) => {
      let temp = result.rows;
      temp = temp.map((element) => {
        element.image = accountsImagesPath.substring(9) + element.image;
        return element;
      });
      data.recent = temp;
      response.status(200).json(data);
    })
    .catch((error) => console.log(error.message));
}

// Insert post data to database
export function addPost(request, response) {
  const { title, member_id, description, content, init_date, tags } =
    request.body;
  pool.query(
    `INSERT INTO user_posts (title, member_id, description, content, init_date, tags) VALUES($1, $2, $3, $4, $5, $6)`,
    [title, member_id, description, content, init_date, tags],
    async (error, result) => {
      if (error) {
        console.log(error.message);
      } else {
        await response.status(201).json(result.rows);
      }
    }
  );
}

// Update Posts data in the database
export function updatePost(request, response) {
  const ID = parseInt(request.params.id);
  const { title, member_id, description, content, init_date, tags } =
    request.body;
  pool.query(
    `UPDATE user_posts SET title = $1, member_id = $2, \
    description = $3, content = $4, init_date = $5\
    , tags = $6 WHERE id = ${ID}`,
    [title, member_id, description, content, init_date, tags],
    async (error, result) => {
      if (error) {
        throw error.message;
      } else {
        await response.status(200).json(result.rows);
      }
    }
  );
}

export function uploadImage(request, response) {
  const ID = parseInt(request.params.id);
  const { title, member_id, description, content, init_date, tags } =
    request.body;
  pool.query(
    `UPDATE user_posts SET title = $1, member_id = $2, \
    description = $3, content = $4, init_date = $5\
    , tags = $6 WHERE id = ${ID}`,
    [title, member_id, description, content, init_date, tags],
    async (error, result) => {
      if (error) {
        throw error.message;
      } else {
        await response.status(200).json(result.rows);
      }
    }
  );
}

// Delete post data from database
export function deletePost(request, response) {
  const ID = parseInt(request.params.id);
  pool.query(
    `DELETE FROM user_posts WHERE id = ${ID}`,
    async (error, result) => {
      if (error) {
        throw error.message;
      } else {
        await response.status(200).json(result.rows);
      }
    }
  );
}

export function setPostToFavorite(request, response) {
  const { postID, userID } = request.body;

  pool.query(
    `UPDATE user_posts SET favorited = favorited + 1 WHERE id = ${postID}`,
    async (error, result) => {
      if (error) {
        console.log(error.message);
      }
    }
  );
  // pool.query(`
  // INSERT INTO user_posts (title, member_id, description, content, init_date, tags) VALUES($1, $2, $3, $4, $5, $6)`);
}

export function setPostToUnfavorite(request, response) {
  const { postID, userID } = request.body;

  pool.query(
    `UPDATE user_posts SET favorited = favorited - 1 WHERE id = ${postID}`,
    (error, result) => {
      if (error) {
        console.log(error.message);
      }
    }
  );
}
