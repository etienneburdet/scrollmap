<script>
  import { activeChapterId } from './store.js'

  export let id
  export let activeClass
</script>

<div id="{id}" class={id === $activeChapterId ? 'step active-chapter' : 'step'}>
  <div class="light">
    <slot/>
  </div>
</div>
