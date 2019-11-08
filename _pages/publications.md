---
layout: page
permalink: /publications/
title: publications
years: [2019, 2018]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f my-publications -q @*[year={{y}}]* %}
{% endfor %}
