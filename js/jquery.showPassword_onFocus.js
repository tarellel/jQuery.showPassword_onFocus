/*
 * jquery.showPassword_onFocus
 * A jQuery plugin to show a password elements value as plaintext when focues on
 *
 * Copyright (c) Brandon Hicks (Tarellel)
 *
 * Version: 1.0.0a (12/6/10)
 * Requires: jQuery 1.4
 *
 *
 */

// execute when document is finished loading
$(document).ready(function() {
  // go through "ALL" input[type=password] and set eventTriggers
  $('input[type="password"]').each(function(){
    // turn to input[type=text] when focused on
    $(this).focus(function(){
      this.type = "text";
    });

    // turn to input[type=password] when unfocused
    $(this).blur(function(){
      this.type = "password";
    });

    // If [enter/return] is pressed
    $(this).keydown(function(event){
      if (event.keyCode == '13'){
        this.type = "password";
      }
    });
  });
});