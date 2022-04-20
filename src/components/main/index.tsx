import * as S from './styles'

export type MainProps = {
  title: string
  description: string
}
const Main = ({ title, description }: MainProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <br />
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
