const x_reference = xtag.create('x-reference', class extends XTagElement {
  constructor(obj) {
    super();
    for (var k in obj) this[k] = obj[k];
  }
  '::template(true)'() {
    return `
    <article class="fur colums">
      <h2>${this.titre}</h2>
      <h3>${this.description}</h3>
    </article>`;
  }
});
