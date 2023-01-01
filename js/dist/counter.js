$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
// ====cookies section=====
$(".accept").click(function () {
  $(".cookie").hide();
  //Enter your code hear...
});
// =====add input for phone nmbers======
$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    
    
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            $(wrapper).append('<div class="input-group input-top js-style"><input class="form-control pt-2" type="text" name="mytext[]" placeholder="Enter Phone Number"/><i class="fa-sharp fa-solid fa-circle-xmark remove_field  input-group-text input-icon text-danger i-pos"></i></div>');
           
           
           
        ++x;
           
           
           
           
        
      }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
       
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        x--;
    })
    });
// ========logo picking======

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function () {
  readURL(this);
});
