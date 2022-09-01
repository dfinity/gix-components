<script lang="ts">
    import Card from "$lib/components/Card.svelte";
</script>

# Grids

The grids are layout elements that can be used to present and spread the content within a view.

## Table of contents

- [Definition](#definition)
- [Usage](#usage)
- [Card Grid](#card-grid)
- [Content Grid](#content-grid)

## Definition

The grids follow a 12 columns-sizing approach. According the various [breakpoints](/styling/breakpoints) the number of columns varies.

### Size S (e.g. Mobile)

<ul>
<li>One single column design.</li>
<li>Break point: <code>S &lt; large (1024px)</code></li>
</ul>

### Size M (e.g. Tablet)

<ul>
<li>12 columns design with two distinct sections spread across 6 columns ("left section") and 6 columns ("right section").</li>
<li>Break point: <code>large (1024px) &lt; M &lt; xlarge (1300px)</code> </li>
</ul>

### Size L (e.g. Desktop)

<ul>
<li>12 columns design with two distinct sections spread across 5 columns ("left section"), an empty column ("spacer") and 6 columns ("right section").</li>
<li>Break point: <code>xlarge (1300px) &gt; L</code> </li>
</ul>

<h2 id="usage">Usage</h2>

Unlike components, the grids can be applied to any HTML elements through the use of utility classes - styles that are available globally.

<h2 id="card-grid">Card Grid</h2>

Commonly use to list information, the global `.card-grid` style distribute its children according the window size.

On mobile devices, information are listed in a single column, two on medium size devices and three on wider devices.

```html
<div class="card-grid">
  <Card>
    <h2 class="title" slot="start">Title A.</h2>
  </Card>

  <Card>
    <h2 class="title" slot="start">Title B.</h2>
  </Card>
</div>
```

### Showcase

<div class="card-grid">
  <Card>
    <h2 class="title" slot="start">Card 1</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

  </Card>

  <Card>
    <h2 class="title" slot="start">Card 2</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

  </Card>

  <Card>
    <h2 class="title" slot="start">Card 3</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

  </Card>
</div>

<h2 id="content-grid">Content Grid</h2>

The `.content-grid` can be used to present detailed content. It can render up to four elements (`.content-a`, `.content-b`, `.content-c` and `.content-d`) in two rows and two columns.

```html
<div class="content-grid">
  <h2 class="content-a">Content A.</h2>

  <h2 class="content-b">Content B.</h2>

  <h2 class="content-c">Content C.</h2>

  <h2 class="content-d">Content D.</h2>
</div>
```

### Showcase

<div class="content-grid">
    <p class="content-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

    <p class="content-b">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

    <p class="content-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

    <p class="content-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat, velit lorem lacinia massa, sed dictum libero ex et lectus.</p>

</div>
