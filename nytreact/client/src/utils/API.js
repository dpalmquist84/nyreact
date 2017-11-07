import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getStricles: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteAtricle: function(id) {
    return axios.delete("/api/atricles/" + id);
  },
  // Saves a book to the database
  saveArticles: function(bookData) {
    return axios.post("/api/atricles", bookData);
  }
};
