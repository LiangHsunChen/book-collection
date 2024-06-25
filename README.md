# coding-challenge
CRUD Application for a Book Collection

## Challenges:
  1. During environment setup:  
  When using composer to install CodeIgniter 3.1.13, there is an error message in running the post-install script:

    > sed -i s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php
    > sed: 1: "vendor/mikey179/vfsstre ...": invalid command code v
    > Script sed -i s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php handling the post-update-cmd event returned with error code 1
    
      Asked in ChatGPT then got an answer saying there is a different format for "sed" script for different operating systems. I changed the script of both post-install and post-update to
    
    > sed -i '' s/name{0}/name[0]/ vendor/mikey179/vfsstream/src/main/php/org/bovigo/vfs/vfsStream.php
