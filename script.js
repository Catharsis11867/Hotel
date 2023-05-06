$(function () {
  

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

  
  $("#showPwdBtn").on("click", function () {
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
});
