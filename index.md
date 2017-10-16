---
layout: default
sections:
- id: _1what
  title: What?
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/03/678-x-387-US-Public-Participation-Playbook-cover-image-Group-of-World-People-s-Hands-Robert-Churchill-iStock-Thinkstock-480665457-150x150.jpg
- id: _1.5table
  title: Table of Contents
  image:
- id: _2goals
  title: Goals
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/01/13086328315_db6d44b9f6_z-e1422906629554-150x150.jpg
- id: _3understanding
  title: Understanding
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/01/16108641430_5cb8afc0b8_z1-150x150.jpg
- id: _4design
  title: Design
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/01/600-x-455-Accessibility-road-highway-sign-on-tablet-527x400-150x150.jpg
- id: _5facilitate
  title: Facilitate
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/01/8205558579_354514c23d_z-150x150.jpg
- id: _6report
  title: Report
  image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/01/Multiple-Paths-e1422733007212-150x150.jpg
- id: _7links
  title: Links
  image: ''

header_icons:
  - cloud
  - sun
  - graph

downloads:
- href: /download/sample-download1.pdf
  text:
    primary: First download
    secondary: Put download size here
  image:
    href: /img/report-cover.png
    alt: report cover
- href: /download/sample-download2.pdf
  text:
    primary: Second download
    secondary:

scripts:
- main.js
---

<!-- - href: https://www.google.com
  text:
    primary: View the presentation
    secondary: Google Slides
  image:
    href: /img/report-cover.png
    alt: report cover -->

<header>

  <div class="flag-container">
    <a href="https://18f.gsa.gov">
      <img class="usa-flag" src="img/us_flag_large.png">
    </a>
    <p>An official website of the U.S. government</p>
  </div>

    <a href="#" id="menu-toggle">Menu</a>
</header>

<nav>

  {% for section in page.sections %}
    <a data-fullTitle="{{ section.title }}" data-shortTitle="{{ section.title }}" href="#{{ section.id }}">
      {{ section.title }}
    </a>
  {% endfor %}
</nav>

<main>
  {% for section in page.sections %}
  <section class="section" id="{{ section.id }}">
    <div class="container">
      <h1>{{ section.title }}
        {% if section.image.size > 0 %}<img class="section__thumb" src="{{ section.image }}"> {% endif %}
      </h1>
      {% capture content %}{% include {{ section.id }}.md %}{% endcapture %}
      {{ content | markdownify }}
    </div>
  </section>
  {% endfor %}
</main>

<footer>
  <div class="container">
    {% capture footer %}{% include footer.md %}{% endcapture %}
    {{ footer | markdownify }}
  </div>
</footer>
