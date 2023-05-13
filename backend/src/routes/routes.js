import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.render("createContact");
});

router.get("/detail", (req, res) => {
  res.render("detail");
});

router.get("/edit", (req, res) => {
  res.render("editContact");
});

router.get("/contacts", (req, res) => {
  res.render("contactList");
});

router.get("/test", async (req, res) => {
  res.send("HOLA");
});
