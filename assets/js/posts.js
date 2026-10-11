---
# Built automatically by GitHub Pages from the files in the _posts folder. Do not edit.
---
window.POSTS = [
{% for post in site.posts %}  {
    title: {{ post.title | jsonify }},
    date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
    category: {{ post.category | default: "Updates" | jsonify }},
    summary: {{ post.summary | default: post.excerpt | strip_html | strip_newlines | truncate: 160 | jsonify }},
    url: {{ post.url | remove_first: "/" | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}];
