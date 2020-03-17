<script>
  import { activeChapterId } from './store.js'

  export let id
</script>

<div id="{id}" class="step">
  <div class="light">
    <slot/>
  </div>
</div>
