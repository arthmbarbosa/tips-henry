import React from 'react';
import {
  ServicesContainer, ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>
        Nossos Serviços
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Mini-cursos gratuitos</ServicesH2>
          <ServicesP>
            Em nosso grupo você vai encontrar cursos gratuitos para iniciantes.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Conteúdo diversificado</ServicesH2>
          <ServicesP>
            Cursos avançados, dicas, insights e muito mais para crescer a sua banca.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Suporte 24h gratuito!</ServicesH2>
          <ServicesP>
            Fornecemos todo o suporte para você conseguir crescer rápido!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Monte sua Estratégia</ServicesH2>
          <ServicesP>
            Contamos com um time especialista em escanteios e gols.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )

}
export default Services;