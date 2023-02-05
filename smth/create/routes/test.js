var express = require("express");
var router = express.Router();

/* GET test page. */
router.get("/:num", function (req, res, next) {
  let id = req.params.num;

  let tests = {
    test1: {
      questions: [
        {
          desc: "0+1=?",
          variants: ["one", "two", "three"],
          answ: 0,
          radio: 3,
        },
        {
          desc: "0+2=?",
          variants: ["one", "two", "three"],
          answ: 1,
          radio: 3,
        },
        {
          desc: "2+1=?",
          variants: ["one", "two", "three"],
          answ: "three",
          input: 3,
        },
      ]
    },
    test2: {
      questions: [
        {
          desc: "7+4=?",
          variants: ["five", "six", "eleven"],
          answ: 2,
          radio: 3,
        },
        {
          desc: "8+2=?",
          variants: ["ten", "nine", "eight"],
          answ: 0,
          radio: 3,
        },
        {
          desc: "13-7=?",
          variants: ["seven", "six", "five"],
          answ: 1,
          input: 3,
        },
      ]
    },
  };
  res.render("test", {
    title: "Test " + id,
    description: "This is test " + id,
    q_test: tests[`test${id}`]['questions']
  });
});

module.exports = router;
