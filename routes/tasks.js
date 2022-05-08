const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks); /* 全件取得 */

router.post("/", createTask); /* 新規作成 */

router.get("/:id", getSingleTask); /* 特定のタスク取得 */

router.patch("/:id", updateTask); /* タスクの更新 */

router.delete("/:id", deleteTask); /* タスクの削除 */

module.exports = router;
