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
    <link rel="stylesheet" href="<?php echo base_url('assets/components/ViewBookComponent.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/components/HeaderComponent.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/components/BookFormComponent.css'); ?>">
</head>
<body style="margin: 0;">
    <div id="view-book-component">
        <header-component current-page="Create Book"></header-component>
        <h1>Book Details</h1>
        <p>
        Update the book details by editing the form below and clicking the
        "Update" button.
        </p>

        <book-form-component
        :book='<?php echo json_encode($book); ?>'
        :action="action"
        :submit-form="submitForm"
        :get-initial-data="fetchBook"
        ><book-form-component>
    </div>

    <script src="<?php echo base_url('assets/components/HeaderComponent.js'); ?>"></script>
    <script src="<?php echo base_url('assets/components/BookFormComponent.js'); ?>"></script>
    <script src="<?php echo base_url('assets/components/ViewBookComponent.js'); ?>"></script>
</body>
</html>
