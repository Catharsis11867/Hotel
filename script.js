$(function() {
  $("#formSubmit").on("click", (e) => {
    // ii. Package the data

    e.preventDefault();

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let age = $("#age").val();
    let zipCode = $("#zipCode").val();
    let language = $("#language").val();

    alert(
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        zipCode: zipCode,
        language: language,
      })
    );
  });


  $("#showPwd").on("click", function() {
    let pwdInput = $("#pwd");
    let pwdFieldType = pwdInput.attr("type");

    if (pwdFieldType === "password") {
      pwdInput.attr("type", "text");
      $(this).text("Hide Password");
    } else {
      pwdInput.attr("type", "password");
      $(this).text("Show Password");
    }
  });

  $("#loadProfile").on("click", function() {
    console.log("button clicked: "); //TODO: find out who clicked me, w/this?

    $.getJSON('data.json', (data) => {
      $("#name").val(data.userName)
       $("#optIn").prop("checked", data.optIn);
      $("#phone").val(data.phone)
      $("#credit-card").val(data.creditcard)
      $("#ssn").val(data.ssn)
      $("#email").val(data.email)
    });
  });
    //TODO: can we grab data form anohter website.

    $("#displayProfile").on("click", function() {
      console.log("dipsplay button clicked: "); //TODO: find out who clicked me, w/

      $("#dataContainer").append(
        $("#name").val() + " put in ... data from my input boxes"
      );
    });
  });

