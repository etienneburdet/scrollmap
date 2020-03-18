<script>
  import { activeChapterId, activeFeatureId } from './store.js'

  export let id
  export let activeClass
  export let featureId

  let active = (id === $activeChapterId)
  $: console.log(active)
</script>

<div id="{id}" class="step {active ? activeClass : ''}">
  <div class="light">
  My active class is {activeClass}
    <slot/>
  </div>
</div>
