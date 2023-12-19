import { YoutubeDiv } from './styles'

const Youtube = () => {
  return (
    <YoutubeDiv>
      <h3>Confira meus Tutoriais</h3>
      <iframe
        width="860"
        height="440"
        src="https://www.youtube.com/embed/K8aUGUjLNeE?si=evAJP4stekqtxpYw"
        title="YouTube video player"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </YoutubeDiv>
  )
}

export default Youtube
