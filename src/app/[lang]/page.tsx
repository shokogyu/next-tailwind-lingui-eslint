import { Greeting } from '~/src/component/Greeting'
import { withLinguiPage } from '~/src/i18n/util/withLinguiPage'

const Page = withLinguiPage(() => {
  return (
    <Greeting />
  )
})

export default Page
