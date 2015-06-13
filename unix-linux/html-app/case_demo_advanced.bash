#!/bin/bash

echo -n "Type a digit or a letter > "
read character
case $character in
    # check for letters
    [[:lower:]] | [[:upper]] ) echo "You typed the letter $character"
                               ;;

    # check for digits
    [0-9] )                    echo "You typed the digit $character"
                               ;;

    # check for anything else
    * )                        echo "You did not type a letter or a digit"
esac
