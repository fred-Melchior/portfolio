import { Courses, EducationDiv, Languages } from './styles'

const Education = () => {
  return (
    <div>
      <EducationDiv className="container">
        <h3>Formação</h3>
        <div className="div">
          <Courses>
            <p>
              <b>Desenvolvedor Full Stack Python</b> (EBAC - 2023 - Concluído)
            </p>
            <p>
              <b>Introdução à Programação </b> (EBAC - 2023 - Concluído)
            </p>
            <p>
              <b>Profissão: TI do Zero ao Pro </b> (EBAC - 2023 - Concluído)
            </p>
          </Courses>
          <Languages>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt="HTML"
              />
              <img
                className="margin"
                src="https://cdn-icons-png.flaticon.com/128/875/875209.png"
                alt="React"
              />
              <img src="https://pt.vitejs.dev/logo.svg" alt="Vite" />
            </div>
            <div style={{ marginRight: 80 }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt="CSS"
              />
              <img
                className="margin"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968403.png"
                alt="Sass"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWRyn3r4uEdxdxLhYrCDEngJ2NfmEaztLBhkk7B6gJ439DjLy33L9tU9nCdl9n3IbUI&usqp=CAU"
                alt="Less"
              />
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="Javascript"
              />
              <img
                className="margin"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
                alt="Typescript"
              />
              <img
                src="https://avatars.githubusercontent.com/u/70142?s=280&v=4"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                className="margin"
                alt="PostgreSQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                alt="Django"
              />
            </div>
          </Languages>
        </div>
      </EducationDiv>
    </div>
  )
}

export default Education
