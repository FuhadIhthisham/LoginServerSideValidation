var express = require("express");
var router = express.Router();

var userName = ["fuhad", "ihthisham"];
var password = ["12345678", "12345678"];
var signOut = false;
var logsuccess = false;

/* GET home page. */
router.get("/", verifyLogin, function (req, res, next) {
  user = req.session.user;
  console.log(user);
  var card = {
    movie1: {
      img: "/images/money-heist.jpg",
      seriesName: "Money Heist",
      rating: "8.2/10",
      genere: "Action, Drama, Mystery",
      story:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    },
    movie2: {
      img: "/images/stranger-things.png",
      seriesName: "Stranger Things",
      rating: "8.7/10",
      genere: "Drama, Fantasy, Horror",
      story:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    },
    movie3: {
      img: "/images/got.jpg",
      seriesName: "Game Of Thrones",
      rating: "9.2/10",
      genere: "Action, Adventure, Drama",
      story:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    },
    movie4: {
      img: "/images/breaking-bad.jpg",
      seriesName: "Breaking Bad",
      rating: "9.4/10",
      genere: "Crime, Drama, Thriller",
      story:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    },
  };

  var list = [
    "Hyper Text Markup Language",
    "Cascading Style Sheets",
    "JavaScript",
    "Express",
    "React",
    "Node JS",
    "Mongo DB",
  ];

  var table = [
    {
      sn: 1,
      name: "Fuhad",
      mark: 99,
      percent: "99.00%",
    },
    {
      sn: 2,
      name: "Akshay",
      mark: 69,
      percent: "69.00%",
    },
    {
      sn: 3,
      name: "Ameer",
      mark: 84,
      percent: "84.00%",
    },
    {
      sn: 4,
      name: "Sigishnu",
      mark: 56,
      percent: "56.00%",
    },
    {
      sn: 5,
      name: "Ashik Ali",
      mark: 45,
      percent: "45.00%",
    },
  ];
  res.render("homepage", { user, logsuccess, card, list, table });
  logsuccess = false;
});
function verifyLogin(req, res, next) {
  res.header(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
}

/* post login page. */
router.post("/submit", formVarify, function (req, res, next) {
  logsuccess = true;
  console.log("token approved");
  res.redirect("/");
});
function formVarify(req, res, next) {
  for (i = 0; i < userName.length; i++) {
    if (req.body.username === userName[i] && req.body.pass === password[i]) {
      req.session.loggedIn = true;
    }
  }
  if (req.session.loggedIn) {
    req.session.user = req.body.username;
    next();
  } else {
    console.log("token not approved");
    req.session.loginErr = true;
    res.redirect("login");
  }
}

/* Get login page. */
router.get("/login", function (req, res, next) {
  res.header(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );

  if (!req.session.loggedIn) {
    res.render("loginpage", {
      LoginErr: req.session.loginErr,
      logout: signOut,
    });
    req.session.loginErr = false;
    signOut = false;
  } else {
    res.redirect("/");
  }
});

/* get logout page. */
router.get("/logout", function (req, res, next) {
  req.session.destroy();
  signOut = true;
  res.redirect("/login");
});

module.exports = router;
