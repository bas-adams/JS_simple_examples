<body>
  <header>
    <h1>Title header</h1>
  </header>
  <main>
      <p title='test'>Lorem ipsum</p>
      <p>Lorem ipsum 2</p>
      <p>Lorem ipsum 3</p>
  </main>  
</body>

<script>
  let observer;
  document.addEventListener('DOMContentLoaded', init);

function init() {
  let p = document.querySelector('main > p'); //first p
  p.addEventListener('click', change);
  
  /* at least one of those childList, attributes, characterData */
  let config = {
    attributes: true,
    attributesOldValue: true,
    attributesFilter: ['data-thing', 'title', 'style'],
    childList: true,
    subtree: true,
    characterData: false,
    characterDataOldValue: false
  }
 
  observer = new MutationObserver(mutated);
  /* mutated is callback function */
  observer.observe(p, config);
  
  function mutated(mutationList) {
    console.log(mutationList);
    for(let mutation of mutationList) {
      if(mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
      }else if (mutation.type == 'attributes') {
        console.log('The' + mutation.attributeName + ' attribute was modified');
      }
    }
  }
  observer.disconnect();
}
</script>
