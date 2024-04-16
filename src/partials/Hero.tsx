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
          Soy ingeniero técnico en Informática de Gestión (UPV). Empecé mi
          andadura en el cambiante mundo de la programación a principios de
          2012. Me gusta aprender, enseñar y sobre todo formar parte de un buen
          equipo humano...
          <br></br>
          En la actualidad, dirijo un equipo en FDS (DXC). Hacemos desarrollo de
          aplicaciones web para la Generalitat de Cataluña (España).
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
              src="/assets/images/MdiGithubBox.png"
              alt="GitHub icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/enrique-albert-caballero-844a848a/">
            <HeroSocial
              src="/assets/images/MdiLinkedin.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
