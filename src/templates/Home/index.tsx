import MediaMatch from 'components/MediaMatch'
import Title from 'components/Title'

import * as S from './styles'

const Home = () => (
  <S.Content>
    <MediaMatch lessThan="medium">
      <Title title="Mobile Title" />
    </MediaMatch>
    <MediaMatch greaterThan="medium">
      <Title title="Desktop Title" />
    </MediaMatch>
  </S.Content>
)

export default Home
