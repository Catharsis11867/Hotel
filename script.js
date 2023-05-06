$(function () {
  // what radio value did they select?

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

  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">A</option>`)
        .append(`<option value="brains">AA</option>`)
        .append(`<option value="bbq">AAA</option>`);
    } else if (radioChoice === "B") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">banana</option>`)
        .append(`<option value="brains">brains</option>`)
        .append(`<option value="bbq">bbq</option>`);
    } else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">pick a letter...A or B</option>`);
    }
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
