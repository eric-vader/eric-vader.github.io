---
---
<div class="dropdown">
  <button class="dropbtn">Research</button>
  <div class="dropdown-content">
   {% for item in site.data.research_list.pages %}
      <a href="javascript:;" onclick='javascript:(function(o){document.getElementById("research_iframe").style.height="1px"; document.getElementById("research_iframe").src = "/research/{{item.url}}"; document.getElementById("research_container").hidden=false}(this));'>{{ item.title }}</a>
   {% endfor %}
  </div>
</div>
{% raw %}
<div class="iframe-container" id="research_container" hidden="true">
  <iframe id="research_iframe" src="/research/Kernel.html" frameborder="0" scrolling="no" onload="resizeIframe(this)" style="width:100%;height:1px;"></iframe>
</div>
{% endraw %}

{% raw %}
<div class="filler"></div>
{% endraw %}

---

# My Research Notes - Sitemap

Alternatively, Use the dropdown above to navigate, or use the direct links below:

{% for item in site.data.research_list.pages %}
1. <a href="/research/{{item.url}}" >{{ item.title }}</a>
{% endfor %}
