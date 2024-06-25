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
     * Loads all books from the database and displays them.
     */
    public function index()
    {

        // Get all books from the database
        $data['books'] = $this->Book_model->get_books();

        // Load the view
        $this->load->view('books', $data);
    }
}

?>