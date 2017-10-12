---
layout: default
sections:
- id: participation
  title: Public Participation

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

  <div class="container">
    <h1>
      <div>
        {% for icon in page.header_icons %}
        <img class="icon {{ icon }}" src="{{ site.baseurl }}/img/icons/{{ icon }}.svg">
        {% endfor %}
      </div>
      Your Federalist Website would put its summary here
    </h1>
  </div>

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
  <section id="{{ section.id }}">
    <div class="container">
      <h1>{{ section.title }}</h1>
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
