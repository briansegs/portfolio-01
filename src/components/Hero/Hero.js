import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To 
        <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        lksajfd jfalkjfal s fajlksdjf a fjfalkjfd  ldafjlkdaj jfaldj f lkjdfajgjlkja fjalkd al jalkd flka klfjalkjd flaj kjfdlkaj  faljsd.
      </SectionText>
      
      <Button onClick={() => window.location = 'http://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;