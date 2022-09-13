<script lang="ts">
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia turpis mi, a facilisis risus elementum eu. Quisque auctor fermentum tempus. Mauris dictum dui et ipsum vehicula lacinia. Cras quis placerat elit, in efficitur nunc. Duis sed tortor purus. Cras iaculis lorem tellus, non placerat ipsum gravida non. Nullam nulla ex, congue in cursus a, scelerisque in diam. Aliquam laoreet nunc quis purus fermentum, ac finibus turpis hendrerit. Curabitur a nisl efficitur, malesuada justo eu, dignissim ipsum.",
    "Maecenas mauris dui, efficitur sed semper sed, cursus nec elit. Ut iaculis ex magna, quis porttitor mi sagittis nec. Mauris ut sem luctus, elementum nisl a, sollicitudin felis. Pellentesque venenatis mi id nunc accumsan, ac dictum nisi molestie. Nullam vel nunc augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla blandit risus, sit amet convallis lorem tempor nec. Integer nec magna eget ante pellentesque suscipit non vitae tortor. Sed finibus malesuada ullamcorper. Nunc interdum sagittis bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus leo nisl, tincidunt at metus vitae, egestas consectetur enim. Phasellus gravida felis at congue vehicula. Quisque elementum risus quam, a mattis risus luctus sit amet. Pellentesque quis aliquet lectus. Nunc ut quam nisl.",
    "Mauris nec dolor elit. Etiam id eros eu neque finibus vehicula ac ut ex. Fusce feugiat ultrices eros, vitae interdum dolor. Praesent ultrices id magna et aliquam. Nam eu dictum odio. Nulla non sem in sapien pulvinar viverra. Maecenas quam mi, porta nec velit eu, fringilla efficitur ligula. Donec quis porttitor purus. Vestibulum feugiat non quam sit amet feugiat. Donec vestibulum ut metus in gravida. Integer iaculis consequat tempus. Praesent varius lorem ante, eu aliquet felis ornare non. Sed in egestas quam. Sed vel nisl felis. Aenean sollicitudin lobortis neque, vitae interdum risus tristique sed.",
    "Vivamus sed elit diam. Sed velit lectus, pretium ac dui at, accumsan elementum tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar ante nibh, vel eleifend massa dictum at. Sed porttitor erat id enim pharetra, ut consequat erat interdum. Donec a nibh molestie, pulvinar urna bibendum, congue arcu. Aliquam vel posuere ipsum. Suspendisse commodo dignissim viverra. Aenean auctor magna a ullamcorper finibus. Morbi sed condimentum ipsum. Mauris interdum purus magna, at viverra augue scelerisque eu. Vivamus a tellus faucibus dui convallis iaculis. Curabitur nec pharetra ante. Cras gravida malesuada lacus non ornare.",
    "Quisque id tincidunt nunc. In hac habitasse platea dictumst. Donec molestie diam feugiat justo feugiat ultricies. Mauris sit amet quam mattis, congue justo in, sagittis urna. Quisque vel nisl tempor, mattis nisl eget, sodales risus. In blandit elementum nisi vel sagittis. Fusce ex mi, pulvinar nec iaculis eget, consequat nec turpis. Praesent ultrices egestas sapien eget tempor. Nunc mollis ante est, aliquet porta arcu ultrices suscipit. Cras eu lobortis dui, id facilisis lacus. Maecenas at ex bibendum, volutpat turpis quis, egestas justo. Phasellus mattis erat elit. Integer iaculis blandit dui in molestie. Phasellus quam purus, efficitur in sem non, congue elementum tortor. Vivamus id dui ullamcorper, vulputate risus in, ultricies felis. Nunc in libero ut ante blandit rutrum.",
  ];

  export let length: number = 1;

  let elements: number[];
  $: elements = [...Array(length).keys()];

  const randomParagraph = (): string =>
    paragraphs[Math.round(Math.random() * (paragraphs.length - 1))];
</script>

{#each elements as element}
  <p class="description">{randomParagraph()}</p>
{/each}
