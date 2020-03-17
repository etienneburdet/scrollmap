import './plugins/ods-widgets/stylesheets/ods-widgets.less'
// import 'mapbox-gl/dist/mapbox-gl.css'
import './assets/stylesheets/app.scss'

// import story from './components/story/story.js'
import './components/story/story.scss'

// story()

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

window.app = app;

export default app;
