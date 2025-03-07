import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, Soy <GradientText>Enrique Albert Caballero</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            Soy ingeniero técnico en Informática de Gestión (UPV). Empecé mi
            andadura en el cambiante mundo de la programación a principios de
            2012. Me gusta aprender, enseñar y sobre todo, formar parte de un
            buen equipo humano...
          </p>
          <br />
          <p>
            En la actualidad, dirijo un equipo en FDS (DXC). Nos encargamos del
            desarrollo de aplicaciones web para la Generalitat de Cataluña.
            Utilizamos React, Angular, SpringBoot, PostgreSQL y Python.
          </p>
          <br />
          <p>
            Me encanta hacer deporte, sobre todo, fútbol y padel. Soy aficionado
            del Valencia CF y como dicen en mi tierra, "un patidor".
          </p>
          <br />
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar1.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/enalcadev">
            <HeroSocial
              src="/assets/images/MdiGithubBox.webp"
              alt="GitHub icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/enrique-albert-caballero-844a848a/">
            <HeroSocial
              src="/assets/images/MdiLinkedin.webp"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
