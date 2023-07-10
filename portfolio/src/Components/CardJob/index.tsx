import { CardContainer } from './styles'

type Props = {
  href: string
  image: string
  altName: string
  siteName: string
}

const CardJob = ({
  href,
  image,
  altName,

  siteName
}: Props) => {
  return (
    <CardContainer>
      <div className="cover">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={image} alt={altName} />
          <h3>{siteName}</h3>
        </a>
      </div>
    </CardContainer>
  )
}

export default CardJob
