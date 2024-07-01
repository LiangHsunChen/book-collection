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
    <link rel="stylesheet" href="<?php echo base_url('assets/components/CreateBookComponent.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/components/HeaderComponent.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/components/BookFormComponent.css'); ?>">
</head>
<body style="margin: 0;">
    <div id="create-book-component">
        <header-component current-page="Create Book"></header-component>
        <h1>Create a new Book</h1>
        <p>Please fill out the form below to create a new book.</p>

        <book-form-component :action="action" :submit-form="submitForm"></book-form-component>
    </div>

    <script src="<?php echo base_url('assets/components/HeaderComponent.js'); ?>"></script>
    <script src="<?php echo base_url('assets/components/BookFormComponent.js'); ?>"></script>
    <script src="<?php echo base_url('assets/components/CreateBookComponent.js'); ?>"></script>
</body>
</html>
