import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  MainParagraph,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const slicedText = reactHooksDescription.slice(0, 170)

  const [condition, setCondition] = useState(true)

  const changeText = () => {
    setCondition(previous => !previous)
  }
  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <MainParagraph>Hooks are a new addition to React</MainParagraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{condition ? slicedText : reactHooksDescription}</Paragraph>
      <Button type="button" onClick={changeText}>
        {condition ? 'Read More' : 'Read Less'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
