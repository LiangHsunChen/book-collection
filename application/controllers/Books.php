<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Books Controller
 *
 * Handles interactions with the books model and views.
 */
class Books extends CI_Controller {

    /**
     * Constructor
     *
     * Loads the Book_model.
     */
    public function __construct()
    {
        parent::__construct();
        // Load the Book_model
        $this->load->model('Book_model');
    }

    /**
     * Index
     *
     * Loads the books page.
     */
    public function index()
    {
        // Load the view
        $this->load->view('books');
    }

    public function get_books()
    {
        // Get all books from the database
        $books = $this->Book_model->get_books();
        // Send the books as JSON
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($books));
    }
}

?>