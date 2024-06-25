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

}
?>