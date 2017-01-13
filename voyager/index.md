---
layout: default
crawlertitle: "Jekyll blog"
title: "Home"
summary: "main page"
---

<h2 class="col-lg-12 text-center page-title">PORTFOLIO</h2>
{% for post in site.posts limit: 6 %}
  <article class="index-page row">
  	<div class="article_img col-lg-8">
		  <img class="img-thumbnail img-responsive" style="width:100%; margin:0" src="assets/images/{{post.bg}}">
	  </div>
	  <div class="article_content col-lg-4">
    	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    	<p class="summary">{{ post.summary }}</p>
      {% if post.link and post.code %}
        <p><strong><a href="{{ post.link }}">View LIVE</a> | <a href="{{ post.code }}"> View CODE</a></strong></p>
      {% elsif post.link %}
        <p><strong>View live at: <a href="{{post.link}}">{{post.link}}</a></strong></p>
      {% elsif post.code %}
        <p><strong>CODE: <a href="{{post.code}}">{{post.code}}</a></strong></p>
      {% endif %}
    	<p clas="roles"><strong>Roles: {{ post.roles }}</strong></p>
    	<p class="tools"><strong>Tools: {{ post.tools }}</strong></p>
    </div>
  </article>
{% endfor %}



<!--     {% for my_page in site.pages %}
      {% if my_page.active %}
        <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
      {% endif %}
    {% endfor %} -->
 
<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center" id="myModalLabel">Contact Me</h3>
      </div>
      <div class="modal-body">
        <div id="text">
            <p> The best way to contact me is to email me at <a href="mailto:anusuyarc89@gmail.com">anusuyarc89@gmail.com</a></p><br/>
            <p> But you can also reach me at my following sites:</p>
        </div>
        <div id="contact-icons">
          <a href="https://www.linkedin.com/in/anusuyaroychoudhury" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/arc6789" target="_blank"><i class="fa fa-github fa-2x"></i></a>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>      
      </div>
    </div>
</div>
