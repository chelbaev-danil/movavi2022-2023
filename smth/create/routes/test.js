const { Router } = require("express");
var express = require("express");
var router = express.Router();
const tests = {
  test1: {
    questions: [
      {
        desc: "0+1=?",
        variants: ["one", "two", "three"],
        answ: '0',
        radio: 3,
      },
      {
        desc: "0+2=?",
        variants: ["one", "two", "three"],
        answ: '1',
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
        answ: '2',
        radio: 3,
      },
      {
        desc: "8+2=?",
        variants: ["ten", "nine", "eight"],
        answ: '0',
        radio: 3,
      },
      {
        desc: "13-7=?",
        variants: ["seven", "six", "five"],
        answ: 'six',
        input: 3,
      },
    ]
  },
  test3: {
    questions: [
      {
        desc: "72-45=?",
        variants: ["twenty seven", "twenty five", "twenty six"],
        answ: '0',
        radio: 3,
      },
      {
        desc: "18-8=?",
        variants: ["ten", "10", "eight"],
        answ: ['0', '1'],
        check: 3,
      },
      {
        desc: "26-12=?",
        variants: ["fourteen", "14", "15-1"],
        answ: ['0','1','2'],
        check: 3,
      },
    ]
  },
};
/* GET test page. */
router.get("/:num", function (req, res, next) {
  let id = req.params.num;

  
  res.render("test", {
    title: "Test " + id,
    description: "This is test " + id,
    q_test: tests[`test${id}`]['questions'],
    s_id : id
  });
});
router.post('/send', function(req, res) {
  
  let sum = 0 
  let i = 0
  let ans_score =  0

  let arr = Object.values(req.body)
  new_id = arr[arr.length-1];arr.pop()
  arr = arr.filter(function(x) {return x !== ''})
  if (arr.length !== tests[`test${Number(new_id)}`]['questions'].length) res.send('u have to answer on every question' )

  for (let ans of arr){
    if(typeof ans === "object"){
      if(ans.length !== tests[`test${Number(new_id)}`]['questions'][i]['answ'].length){
        sum+=0
      }else{
        ans.forEach((element, index) => {
          if (ans[index] === tests[`test${Number(new_id)}`]['questions'][i]['answ'][index] ){
            ans_score++
          }
        });
        console.log(ans_score);
        ans_score === ans.length?sum++:''
      }
    }else{
      ans === tests[`test${Number(new_id)}`]['questions'][i]['answ']?sum++:''
    }
    ans_score = 0
    i++
  }
	res.send(`Your result is ${String(sum)}/${tests[`test${Number(new_id)}`]['questions'].length}`)

});
module.exports = router;
