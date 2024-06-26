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

    /**
     * Get Books
     *
     * Sends all books as JSON.
     */
    public function get_books()
    {
        // Check if the request method is GET
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            show_error('Method not allowed', 405);
        }

        // Get all books from the database
        $books = $this->Book_model->get_books();
        // Send the books as JSON
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($books));
    }

    /**
     * Create Book
     *
     * Creates a book and sends the book ID as JSON.
     * For GET requests, it loads the create book page.
     * For POST requests, it creates the book.
     */
    public function create_book()
    {
        // Check if the request method is GET
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Load the view
            $this->load->view('create_book');
            return;
        }

}

?>