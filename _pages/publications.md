---
layout: page
permalink: /publications/
title: publications
nav: true
years: [2019, 2018]
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f my-publications -q @*[year={{y}}]* %}
{% endfor %}

</div>
