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

        // Check if the request method is POST
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Get the request body
            $request_body = file_get_contents('php://input');
            // Decode the JSON object as an associative array
            $book = json_decode($request_body, true);

            // Validate the data
            if (!$this->validate_book($book)) {
                // Send an error response if validation fails
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(400)
                    ->set_output(json_encode(['error' => "Invalid input data."]));
                return;
            }

            // Create the book
            $book_id = $this->Book_model->create_book($book);

            // Send the book ID as JSON
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(['id' => $book_id, 'title' => $book['title']]));
            return;
        }

        // Check if the request method is HEAD
        if ($_SERVER['REQUEST_METHOD'] === 'HEAD') {
            // Return an empty response with a 200 status code for HEAD requests
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(200);
            return;
        }

         // If the request method is neither GET nor POST, return 405 Method Not Allowed
         show_error('Method not allowed', 405);
    }

    /**
     * Validate Book
     *
     * Validates the book data.
     *
     * @param array $book The book data.
     * @return bool True if the book data is valid, false otherwise.
     */
    private function validate_book($book)
    {
        // Check if required fields are present and not empty
        if (empty($book['title']) || empty($book['author']) || empty($book['genre']) || !isset($book['published_year'])) {
            return false;
        }

        // Check if author contains firstname and lastname) => "John Doe"
        if (!preg_match('/^[a-zA-Z]+\s[a-zA-Z]+$/', $book['author'])) {
            return false;
        }

        // Check if description exist then it must have at least 10 characters
        if (isset($book['description']) && strlen($book['description']) < 10) {
            return false;
        }

        return true;
    }

    public function view_book($id)
    {
        // Check if the request method is HEAD
        if ($_SERVER['REQUEST_METHOD'] === 'HEAD') {
            // Return an empty response with a 200 status code for HEAD requests
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(200);
            return;
        }

        // Check if the request method is GET
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            show_error('Method not allowed', 405);
            return;
        }

        $data['book'] = $this->Book_model->get_book($id);
        $this->load->view('view_book', $data);
    }
}

?>