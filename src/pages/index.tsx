import Calendar from 'components/Cal/Calendar'
import Layout from 'components/Layouts/Layout'
import Tag from 'components/Tag'
import { decemberData } from 'lib/activity/2023/dec'
import { februaryData } from 'lib/activity/2024/feb'
import { januaryData } from 'lib/activity/2024/jan'
import { mayData } from 'lib/activity/2024/may'

const data24 = [mayData, februaryData, januaryData]
const data23 = [decemberData]

const Page = () => (
  <Layout>
    <Tag year="2024" />
    {data24.map((month, index) => (
      <Calendar data={month} key={index} />
    ))}
    <Tag year="2023" />
    {data23.map((month, index) => (
      <Calendar data={month} key={index} />
    ))}
  </Layout>
)

export default Page
