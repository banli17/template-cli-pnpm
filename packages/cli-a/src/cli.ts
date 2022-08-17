import utils from '@banli17/template-cli-pnpm-utils'
import log from '@banli17/template-cli-pnpm-log'


log.verbose('1 + 2= ', utils.math.add(1, 2) + '')

export default {
  name: 'cli-a'
}
