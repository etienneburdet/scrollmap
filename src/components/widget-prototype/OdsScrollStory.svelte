<script>
  import scrollama from 'scrollama'
  import { onMount } from 'svelte'
  import { activeChapterId, activeFeatureId } from './store.js'

  const scroller = scrollama();

  const setActive = (response) => {
    activeChapterId.set(response.element.id)
    console.log('the new active feature is', $activeFeatureId)
    let activeFeature = document.getElementById($activeFeatureId)
    activeFeature.classList.add('active-feature')
  }

  const setInactive = (response) => {
    activeFeature.classList.remove('active-feature')
  }

  const setScroller = () => {
    scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter(setActive)
    .onStepExit(setInactive)

    window.addEventListener('resize', scroller.resize);
  }

  onMount(setScroller)
</script>

<slot name="features">
  <div class="features"></div>
</slot>
<slot name="chapters">
  <div class="chapters"></div>
</slot>
