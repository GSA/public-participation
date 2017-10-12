---
layout: default
sections:
- id: _1what
  title: What?
- id: _2goals
  title: Goals
- id: _3understanding
  title: Understanding
- id: _4design
  title: Design
- id: _5facilitate
  title: Facilitate
- id: _6report
  title: Report
- id: _7links
  title: Links


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

  <aside id="downloads">
    <h3>Downloads<span id="caret"></span></h3>
    <ul>
      {% for download in page.downloads %}
      <li>
        <a href="{{ download.href | prepend: site.baseurl }}">
          <div class="download-text">
            <strong>{{ download.text.primary }}</strong>
            <span>{{ download.text.secondary }}</span>
          </div>
          {% if download.image %}
          <div class="download-image">
            <img src="{{ download.image.href | prepend: site.baseurl }}" alt="{{ download.image.alt }}">
          </div>
          {% endif %}
        </a>
      </li>
      {% endfor %}
    </ul>
  </aside>

  <nav>
    <ul class="container">
    {% for section in page.sections %}
      <li><a href="#{{ section.id }}">{{ section.title }}</a></li>
    {% endfor %}
    </ul>
  </nav>

</header>

<main>
  {% for section in page.sections %}
  <section class="section" id="{{ section.id }}">
    <div class="container">
      <h1 data-img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/582/2015/03/678-x-387-US-Public-Participation-Playbook-cover-image-Group-of-World-People-s-Hands-Robert-Churchill-iStock-Thinkstock-480665457.jpg">{{ section.title }}</h1>
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
