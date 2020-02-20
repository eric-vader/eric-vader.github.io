---
---
<div class="dropdown">
  <button class="dropbtn">Navigate</button>
  <div class="dropdown-content">
   {% for item in site.data.research_list.pages %}
      <a href="javascript:;" onclick='javascript:(function(o){document.getElementById("research_iframe").style.height="1px"; document.getElementById("research_iframe").src = "/research/{{item.url}}";}(this));'>{{ item.title }}</a>
   {% endfor %}
  </div>
</div>
{% raw %}
<div class="iframe-container">
  <iframe id="research_iframe" src="/research/Kernel.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" style="width:100%;height:1px;"></iframe>
</div>
{% endraw %}
