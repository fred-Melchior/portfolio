import { CardContainer } from './styles'

type Props = {
  href: string
  image: string
  altName: string
  siteName: string
}

const CardJob = ({ href, image, altName }: Props) => {
  return (
    <CardContainer>
      <div className="cover">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={image} alt={altName} />
        </a>
      </div>
    </CardContainer>
  )
}

export default CardJob
