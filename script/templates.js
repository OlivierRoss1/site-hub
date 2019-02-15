const x_reference = xtag.create('x-reference', class extends XTagElement {
  name () {return "test"}
  '::template(true)' (){
    return `<h2>I am ${this.name()}</h2>
            <span>I was created by a mad scientist</span>`;
  }
});
