<script>
  import { activeChapterId } from './store.js'

  export let id
  export let activeClass
</script>

<div id="{id}" class="step {$activeChapterId === id ? activeClass : ''}">
  <div class="light">
  My active class is {activeClass}
    <slot/>
  </div>
</div>
