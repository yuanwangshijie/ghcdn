function convertScript() {
  inputStr = document.querySelector("#githubScript").value;
  if (inputStr == "") {
    return;
  }

  ghproxy = document.querySelector("#ghproxy").value;
  perlcmdbegin = ' | perl -pe "$(curl -L ';
  perlcmdend = ')"';
  perlrule = ghproxy + 'perl-pe-para';

  // 先给裸的git类链接前面加上 https://
  inputStr = inputStr.replace(/ git/g, ' https://git');

  // 再进行加github proxy的转换
  regex = /(bash.*?)(https?:\/\/.*?)(\).*)/s;

  replacement1 = '$1' + ghproxy + '$2' + perlcmdbegin + perlrule + perlcmdend + '$3';
  resultStr1 = inputStr.replace(regex, replacement1);
  document.querySelector("#result1").value = resultStr1;

  replacement2 = '$1' + ghproxy + '$2' + '| perl -pe "s#(http.*?git[^/]*?/)#' + ghproxy + '\\1#g"' + '$3';
  resultStr2 = inputStr.replace(regex, replacement2);
  document.querySelector("#result2").value = resultStr2;
}

function copyResult1() {
  resultStr = document.querySelector("#result1").value;
  navigator.clipboard.writeText(resultStr);
}

function copyResult2() {
  resultStr = document.querySelector("#result2").value;
  navigator.clipboard.writeText(resultStr);
}

function getLocalUrl() {
  document.querySelector("#ghproxy").value = window.location.href;
}

function convertRes() {
  inputStr = document.querySelector("#githubRes").value;
  if (inputStr == "") {
    return;
  }

  ghproxy = document.querySelector("#ghproxy").value;

  // 先给裸的git类链接前面加上 https://
  inputStr = inputStr.replace(/ git/g, ' https://git');

  resultStr = ghproxy + inputStr;

  document.querySelector("#resAfterGhproxy").value = resultStr;
}

function fetchRes() {
  window.open(document.querySelector("#resAfterGhproxy").value);
}