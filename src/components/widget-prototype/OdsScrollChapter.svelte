<script>
  import { activeChapterId } from './store.js'

  export let id
</script>

<div id="{id}" class={id === $activeChapterId ? 'step active-chapter' : 'step'}>
  <div class="light">
    <slot/>
  </div>
</div>
