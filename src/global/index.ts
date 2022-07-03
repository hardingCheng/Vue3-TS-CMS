import { App } from 'vue'
import registerElement from './register-elementui'
export function registerApp(app: App): void {
  app.use(registerElement)
}
