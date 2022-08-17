import utils from '@bl-pnpm/cli-utils'
import log from '@bl-pnpm/cli-log'


log.verbose('1 + 2 = ', utils.math.add(1, 2) + '')

export default {
  name: 'cli-a'
}
