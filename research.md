---
---
<div class="container row">
    {% assign steps = site.steps | sort: 'date' %}
    {% for r in site.research %}
                {{ r.content }}
    {% endfor %}
    <div class="last-item">
        <i class="vertical-line"></i>
    </div>
</div>
