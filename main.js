function convert() {
  inputStr = document.querySelector("#githubScript").value;
  if (inputStr == "") {
    return;
  }

  ghproxy = document.querySelector("#ghproxy").value;
  perlcmdbegin = ' | ' + document.querySelector("#perlcmd").value + ' "$(curl -L ';
  perlcmdend = ')"';
  perlrule = ghproxy + document.querySelector("#perlrule").value;

  // 先给裸的git类链接前面加上 https://
  inputStr = inputStr.replace(/ git/g, ' https://git');

  // 再进行加github proxy的转换
  regex = /(bash.*?curl.*?)(https?:\/\/.*?)(\).*)/s;
  replacement = '$1' + ghproxy + '$2' + perlcmdbegin + perlrule + perlcmdend + '$3';

  resultStr = inputStr.replace(regex, replacement);

  document.querySelector("#resultWithGhproxy").value = resultStr;
}

function copyResult() {
  resultStr = document.querySelector("#resultWithGhproxy").value;
  navigator.clipboard.writeText(resultStr);
}

function getLocalUrl() {
  document.querySelector("#ghproxy").value = window.location.href;
}