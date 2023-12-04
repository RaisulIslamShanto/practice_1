

$( document ).ready(function() 
{
    //document.querySelector("h1").innerHTML="hello"
    //document.querySelector("h2").innerHTML="hello everyone"
    $("h1").append(" goodbye is append")
    $("h1").prepend("hi is prepend here ")
    $("h2").text("again goodbye")
    $("#p1").html("<b>hi paragraph</b>")
    $(".pclass").text("hi  class paragraph")
    //var myattr = document.querySelector("a").getAttribute("href");
    //console.log(myattr);
    $("a").attr("href");
    $("a").removeAttr("href");
    //var myattr = document.querySelector("a").getAttribute("href");
    


    // function calling 

    $('#input1,#input2').keyup(function(){
        var textValue1 = $('#input1').val();
        var textValue2 = $('#input2').val();
   
       $('#output').val(textValue1 + textValue2); 
    });

    //calculator

    
    // function fun()
    // {
    //     var numOne = parseInt($("#one").val());
    //     var numTwo = parseInt($("two").val());
    // if(numOne && numTwo)
    // {
    //     var temp = $("#res");
    //     temp.style.display = "block";
    //     var res = numOne + numTwo;
    //     $("$add").val() = res;
    //     var res = numOne - numTwo;
    //     $("#subtract").val() = res;
    //     var res = numOne * numTwo;
    //     $("#multiply").val() = res;
    //     var res = numOne / numTwo;
    //     $("#divide").val() = res;
    //      }
    // }

    $("#submit").on("click", function(){
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
           var sum = a + b;
           $('#addition').val(sum)
           var subtract = a-b;
           $('#sub').val(subtract)
           var multiply = a*b;
           $('#mult').val(multiply)
           var divide = a/b;
           $('#division').val(divide)
        })

    $('#add').on("click",function(){
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
           var sum = a + b;
           $('#addition').val(sum)
    })

    $('#subtract').on("click",function(){
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
           var subtract = a - b;
           $('#sub').val(subtract)
    })

    $('#multiply').on("click",function(){
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
           var multiply = a * b;
           $('#mult').val(multiply)
    })

    $('#divide').on("click",function(){
        var a = parseInt($('#a').val());
        var b = parseInt($('#b').val());
           var divide= a / b;
           $('#division').val(divide)
    })



    $("#hide").click(function(){
        $("p").hide();
      });
      $("#show").click(function(){
        $("p").show();
      });

      let text = "How are you doing today?";
      const myArray = text.split(" ");

        $("#demo").html(myArray); 


        
        $('#btnRm').click(function(){
            var Txt = $('.Str').text();
            var Rmletter = Txt.split('i').join('');
          $('.resultStr').html('<strong>The new string is: </strong>'+Rmletter);
        });

        // append text box

        var a = `<div class='item'><input type="text" name="items[]" placeholder="Enter Something" /><button class="remove">X</button></div>`; 

        $("#add").on("click", ()=>{
            $("#items").append(a);
        })
        $("body").on("click", ".remove", (e)=>{
            $(e.target).parent("div").remove();
        })

        $("#add").click(function(){
            $("#items").append(a);
        })
        $("body").on("click", ".remove", (e)=>{
            $(e.target).parent("div").remove();
        })

    
        var c = `<div class='item'><input type="text" name="items[]" placeholder="Enter Something" /><button class="remove">X</button></div>`; 


        $("#btn1").click(function(){
            $("#repeat").append(c);
            $("#a").append(c);
          });
          $("body").on("click", ".remove", (e)=>{
            $(e.target).parent("div").remove();
        });





        //form validation using jquery plugin



        

$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});

	$().ready(function() {
		// validate the comment form when it is submitted
		$("#commentForm").validate();

		// validate signup form on keyup and submit
		$("#signupForm").validate({
			rules: {
				firstname: "required",
				lastname: "required",
				username: {
					required: true,
					minlength: 2
				},
				password: {
					required: true,
					minlength: 5
				},
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true
				},
				topic: {
					required: "#newsletter:checked",
					minlength: 2
				},
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				confirm_password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				},
				email: "Please enter a valid email address",
				agree: "Please accept our policy",
				topic: "Please select at least 2 topics"
			}
		});

		// propose username by combining first- and lastname
		$("#username").focus(function() {
			var firstname = $("#firstname").val();
			var lastname = $("#lastname").val();
			if (firstname && lastname && !this.value) {
				this.value = firstname + "." + lastname;
			}
		});

		//code to hide topic selection, disable for demo
		var newsletter = $("#newsletter");
		// newsletter topics are optional, hide at first
		var inital = newsletter.is(":checked");
		var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
		var topicInputs = topics.find("input").attr("disabled", !inital);
		// show when newsletter is checked
		newsletter.click(function() {
			topics[this.checked ? "removeClass" : "addClass"]("gray");
			topicInputs.attr("disabled", !this.checked);
		});
	});


       


























    



    





    
});