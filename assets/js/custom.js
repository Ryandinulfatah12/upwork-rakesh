// Question Popup
function question() {
    swal({
      title: "Are you sure?",
      text: "Logout account will end the session",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location = "login-page.html";
        swal("Logout Success", {
          icon: "success",
        });
      }
    });
}

// Sweet Alert JS
function success() {
    swal({
        title: "Good job!",
        text: "Data successfully added!",
        icon: "success",
        button: "Got it",
    });
}

// Delete alert
function deleteQuestion() {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

