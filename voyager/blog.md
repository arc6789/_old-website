---
layout: page
title: "Blog"
crawlertitle: "Anusuya Choudhury | Blog"
permalink: /blog/
summary: "About this blog"
active: blog
published: false
---
<!-- 
This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at:
{{site.twitter_username}} /
[jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at
{{site.github_username}} /
[jekyll](https://github.com/jekyll/jekyll)

{% for work in site.works limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ work.url }}">{{ work.title }}</a></h2>
    {{ work.excerpt }}
  </article>
{% endfor %}


{% for work in site.categories.works %}
  {{ work.output }}
{% endfor %} -->

{% for post in site.posts limit: 6 %}
  <article class="index-page row">
  	<div class="article_img col-lg-8">
		  <img class="img-thumbnail img-responsive" style="width:100%; margin:0" src="assets/images/{{post.bg}}">
	  </div>
	  <div class="article_content col-lg-4">
    	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    	<p class="summary">{{ post.summary }}</p>
    	<p class="link"><strong>View live at: <a href="{{ post.link }}">{{ post.link }}</a></strong></p>
    	<p clas="roles"><strong>Roles: {{ post.roles }}</strong></p>
    	<p class="tools"><strong>Tools: {{ post.tools }}</strong></p>
    </div>
  </article>
{% endfor %}