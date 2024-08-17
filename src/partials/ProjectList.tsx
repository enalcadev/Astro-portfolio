import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Arkanoid"
        description="Retro-game llamado Arkanoid. Es un juego original de Taito. javascript-100-proyectos de Midudev."
        link="https://enalcadev.github.io/arkanoid/"
        img={{
          src: '/assets/images/arkanoid.png',
          alt: 'Arkanoid',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>HTML5</Tags>
          </>
        }
      />
      <Project
        name="DPDash"
        description="Generador de gráficas dado un CSV"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'DPDash' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Astro.js</Tags>
            <Tags color={ColorTags.EMERALD}>Tailwind</Tags>
            <Tags color={ColorTags.YELLOW}>Flowbite</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.INDIGO}>AWS Lambda</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
