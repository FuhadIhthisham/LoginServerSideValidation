var login = $("#login-form");

login.validate({
  rules: {
    username: {
      required: true,
      minlength: 4,
    },
    pass: {
      required: true,
      minlength: 8,
    },
  },
  messages: {
    username: {
      required: "This field is required",
    },
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 54750d8d20f57af33307ee40f4a48f2c5ecfe68f
