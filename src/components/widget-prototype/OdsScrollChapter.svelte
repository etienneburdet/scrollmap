<script>
  import { activeChapterId } from './store.js'

  export let id

  if ($activeChapterId === id) { console.log(id, 'is active') }
</script>

<div id="{id}" class="step">
  <div class="light">
    <slot/>
  </div>
</div>
