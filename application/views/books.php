<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Challenge</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <link rel="stylesheet" href="<?php echo base_url('assets/components/BooksComponent.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/components/HeaderComponent.css'); ?>">
</head>
<body style="margin: 0;">
    <div id="books-component">
        <header-component></header-component>
        <div class="container">
        <h1>Home</h1>

        <!-- Create button for insert a new book -->
        <button @click="redirectToCreateBook" class="create-button">
            + Create
        </button>

        <!-- Display successfully deleted book message -->
        <div v-if="successDeleteMessage" class="success-delete-message">
            {{ successDeleteMessage }}
        </div>

        <div class="books-table" v-if="books.length > 0">
            <table>
            <thead>
                <tr>
                <th>Actions</th>
                <th v-for="(value, key) in books[0]" :key="key">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                <td class="action-buttons">
                    <button
                    @click="redirectToViewBook(book.id)"
                    class="view-button"
                    >
                    Edit/View
                    </button>
                    <button @click="deleteBook(book.id)" class="delete-button">
                    Delete
                    </button>
                </td>
                <td v-for="(value, key) in book" :key="key">{{ value }}</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div v-else>
            <p>No books available.</p>
        </div>
        </div>
    </div>

    <script src="<?php echo base_url('assets/components/HeaderComponent.js'); ?>"></script>
    <script src="<?php echo base_url('assets/components/BooksComponent.js'); ?>"></script>
</body>
</html>
