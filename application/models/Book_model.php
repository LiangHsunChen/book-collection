<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Book Model
 *
 * Handles database interactions for the books table.
 */
class Book_model extends CI_Model {

    /**
     * Constructor
     *
     * Loads the necessary database library.
     */
    public function __construct()
    {
        // Load the necessary database library
        $this->load->database();
    }

     /**
     * Get All Books
     *
     * Retrieves all books from the database.
     *
     * @return array An array of book objects.
     */
    public function get_books()
    {
        // Get all books from the database
        $query = $this->db->get('books');
        return $query->result();
    }

    /**
     * Create Book
     *
     * Inserts a book into the database.
     *
     * @param array $data The book data.
     * @return int The ID of the inserted book.
     */
    public function create_book($data)
    {
        // Insert the book into the database
        $this->db->insert('books', $data);
        // Return the ID of the inserted book
        return $this->db->insert_id();
    }

    /**
     * Get Book
     *
     * Retrieves a book from the database.
     *
     * @param int $id The book ID.
     * @return object The book object.
     */
    public function get_book($id)
    {
        // Get the book from the database
        $query = $this->db->get_where('books', array('id' => $id));
        return $query->row();
    }

}
?>