var snippets=document.querySelectorAll('.snippet-to-copy');
[].forEach.call(snippets,function(snippet){snippet.firstChild.insertAdjacentHTML('beforebegin','<button class="btn copy-btn btn-outline-secondary btn-rounded shadow-5-strong" data-clipboard-snippet><i class="clippy fas fa-copy pl-1" alt="Copy to clipboard"></i></button>');});

var clipboardSnippets=new ClipboardJS('[data-clipboard-snippet]',{target:function(trigger){return trigger.nextElementSibling;}});

clipboardSnippets.on('success',function(e){e.clearSelection();
                                           showTooltip(e.trigger,'Copied!');});
clipboardSnippets.on('error',function(e){showTooltip(e.trigger,fallbackMessage(e.action));});

// This relies on the primer.css for tooltips to work!
var btns=document.querySelectorAll('.copy-btn');
for(var i=0;i<btns.length;i++){btns[i].addEventListener('mouseleave',clearTooltip);
                               btns[i].addEventListener('blur',clearTooltip);}
function clearTooltip(e){e.currentTarget.setAttribute('class','btn copy-btn btn-outline-secondary btn-rounded shadow-5-strong');
                         e.currentTarget.removeAttribute('aria-label');}
function showTooltip(elem,msg){elem.setAttribute('class','btn copy-btn btn-outline-secondary btn-rounded shadow-5-strong tooltipped tooltipped-s tooltipped-no-delay');
                               elem.setAttribute('aria-label',msg);}
function fallbackMessage(action){var actionMsg='';
                                 var actionKey=(action==='cut'?'X':'C');
                                 if(/iPhone|iPad/i.test(navigator.userAgent)){actionMsg='No support :(';}
                                 else if(/Mac/i.test(navigator.userAgent)){actionMsg='Press ⌘-'+actionKey+' to '+action;}
                                 else{actionMsg='Press Ctrl-'+actionKey+' to '+action;}
                                 return actionMsg;}
