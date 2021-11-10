import * as S from './styles'

type TitleProps = {
  title?: string
  color?: 'primary' | 'secondary'
}

const Title = ({ title = 'Hello World', color = 'primary' }: TitleProps) => (
  <S.Wrapper color={color}>{title}</S.Wrapper>
)

export default Title
