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
});