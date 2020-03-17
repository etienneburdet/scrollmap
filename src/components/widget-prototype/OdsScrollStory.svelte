<script>
  import scrollama from 'scrollama'
  import { onMount } from 'svelte'
  import { activeChapterId } from './store.js'

  const scroller = scrollama();

  const setActive = (response) => {
    // const featureWrapper = features.querySelector(`#${response.element.id}`)
    // featureWrapper.classList.add('active-feature')
    // response.element.classList.add('active');
    activeChapterId.set(response.element.id)
    console.log('the active chapter was', $activeChapterId);
  }

  const setInactive = (response) => {
    // const featureWrapper = features.querySelector(`#${response.element.id}`)
    // featureWrapper.classList.remove('active-feature')
    console.log('the active chapter was', $activeChapterId);
  }

  const setScroller = () => {
    scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter(setActive)
    // .onStepExit(setInactive)

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
