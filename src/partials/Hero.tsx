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
          Hola, Soy <GradientText>Enalcadev</GradientText> 👋
        </>
      }
      description={
        <>
          Soy un ingeniero técnico en Informática de Gestión (UPV). Empecé mi
          andadura en el cambiante mundo de la programación en el año 2012. Me
          gusta aprender, enseñar y sobre todo formar parte de un buen equipo
          humano...
          <br></br>
          En la actualidad, dirijo un equipo en FDS (DXC). Hacemos desarrollos
          para la Generalitat de Cataluña.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/enalcadev">
            <HeroSocial
              src="/assets/images/github-mark-white.png"
              alt="GitHub icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/enrique-albert-caballero-844a848a/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
