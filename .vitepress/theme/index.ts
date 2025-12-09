import { h } from 'vue'
import Theme from 'vitepress/theme'
import FeatureCard from '../components/FeatureCard.vue'
import GridContainer from '../components/GridContainer.vue'
import Timeline from '../components/Timeline.vue'
import ButtonGroup from '../components/ButtonGroup.vue'
import './custom.css'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('FeatureCard', FeatureCard)
    app.component('GridContainer', GridContainer)
    app.component('Timeline', Timeline)
    app.component('ButtonGroup', ButtonGroup)
  }
}
