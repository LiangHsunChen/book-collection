# coding-challenge
CRUD Application for a Book Collection

## Challenges:
  1. When using composer to install CodeIgniter 3.1.13, there is an error message in running the post-install script:

    > sed -i s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php
    > sed: 1: "vendor/mikey179/vfsstre ...": invalid command code v
    > Script sed -i s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php handling the post-update-cmd event returned with error code 1
    
***Solution:*** Asked in ChatGPT then got an answer saying there is a different format for "sed" script for different operating systems. I changed the script of both post-install and post-update to
    
  ```sed -i '' s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php```

  2. XAMPP web server is using PHP 8.2
     This cuased errors like  ```Creation of dynamic property CI_URI::$config is deprecated```.  

     ***Solution:*** Was trying to edit config files to change the PHP version XAMPP is using but then realised I need to install a different version of XAMPP.

  3. Integration of CodeIgniter3 and Vue2  
     Had no experience in integrating these 2, having difficulties in figuring out how to display vue component in view correctly.

     ***Solution:*** Search online and learnt how to install Vue, create Vue project, run build, move built files to CodeIgniter project, and render in view.

  4. Routing  
     ```BaseUrl/books``` didn't work and shown 404 error message.
     
     ***Solution:*** Turned out to be needing to add index.php in between the url ```BaseUrl/index.php/books```. Added .htaccess to rewrite the path.

  5. Accidently replaced whole Vue app directory
     When trying to make the built js and css files automatically built under ```assets``` directory instead of dist, the whole Vue app directory include Vue packages and node modules.
     
     ***Solution:*** Recreated vue project, retrieved main.js, config, and components files from git then put them back in ```components``` directory
