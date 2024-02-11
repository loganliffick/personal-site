import Layout from 'components/Layout'
import Tag from 'components/Tag'
import Calendar from 'components/calendar/Calendar'
import { decemberData } from 'lib/activity/2023/dec'
import { februaryData } from 'lib/activity/2024/feb'
import { januaryData } from 'lib/activity/2024/jan'

const Page = () => (
  <Layout>
    <Tag year="2024" />
    <Calendar data={februaryData} />
    <Calendar data={januaryData} />
    <Tag year="2023" />
    <Calendar data={decemberData} />
  </Layout>
)

export default Page
