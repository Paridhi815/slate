function copyToClipboard(container) {
  const el = document.createElement('textarea');
  el.value = container.textContent.replace(/\n$/, '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function setupCodeCopy() {
  console.log("************* Here Set up **************");
  
  $('pre.highlight').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  $('.copy-clipboard').on('click', function() {
    copyToClipboard(this.parentNode.children[1]);
  });
}

function addTryNow() {
  console.log("************* Here 1 **************");
  els = document.getElementsByTagName("blockquote")
  for(var el=0; el < els.length; el++) {
    if (els[el].textContent.includes("Body parameter")) {
      trynow = document.createElement("input")
      trynow.className = "try-now-box"
      trynow.value = "Try now"
      trynow.type = "button"
      trynow.setAttribute("onclick","callAPI()");
      found = els[el];
      heading = found.children[0]
      found.className = "button-container"
      p = document.createElement("p")
      p.id="output";
      found.insertBefore(trynow, heading)
      found.insertBefore(p, heading)
    }
  }
}

function callAPI () {
  console.log("************* Here 2 **************");
  const headers = {
    'Accept':'application/json; charset=utf-8',
    'x-fapi-auth-date':'string',
    'x-fapi-customer-ip-address':'string',
    'x-fapi-interaction-id':'string',
    'Authorization':'string',
    'x-customer-user-agent':'string'
  };
  
  fetch('https://fzoomv2a4a.execute-api.us-east-2.amazonaws.com/alpha/accounts-service/accounts',
  {
    method: 'GET',
  
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      console.log(body);
      const el= document.getElementById("output");
      el.innerHTML = JSON.stringify(body);
  });
}
