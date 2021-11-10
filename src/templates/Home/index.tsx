import MediaMatch from 'components/MediaMatch'
import Title from 'components/Title'
import Base from 'templates/Base'

import * as S from './styles'

const Home = () => (
  <Base>
    <S.Content>
      <MediaMatch lessThan="medium">
        <Title title="Mobile Title" />
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <Title title="Desktop Title" />
      </MediaMatch>
    </S.Content>
  </Base>
)

export default Home
