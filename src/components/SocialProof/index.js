import {
  SocialProof,
  SocialProofCard,
  SocialProofH2,
  SocialProofP,
  SocialProofContainer,
  SocialProofWrapper,
  UserAstronaut
} from './SocialProofElements';

const SocialProofSection = () => {
  return (
    <SocialProofContainer>
      <SocialProofWrapper>
        <SocialProof>
          <SocialProofCard>
            <UserAstronaut />
            <SocialProofH2>Ricado Alcantara</SocialProofH2>
            <SocialProofP>
              Salve mano
            </SocialProofP>
            <SocialProofP>
              Parabéns pelo grupo, de verdade
            </SocialProofP>
            <SocialProofP>
              Baita trabalho investido.
            </SocialProofP>
          </SocialProofCard>

          <SocialProofCard>
            <UserAstronaut />
            <SocialProofH2>Thiago Maia</SocialProofH2>
            <SocialProofP>
              Bom dia Henry, fechei o mês com 30% vlw mano, tava num vip e nem de longe a porcentagem de grem q vc tem, muito obrigado mano.
            </SocialProofP>
            <SocialProofP>
              Muito obrigado mesmo Henry tu é monstro
            </SocialProofP>
          </SocialProofCard>

          <SocialProofCard>
            <UserAstronaut />
            <SocialProofH2>Cristian Barcelos</SocialProofH2>
            <SocialProofP>
              Boa tarde Henry, só passando pra te agradecer mano, tô seguindo gestão certinho, e esse mês consegui pagar a parcela do meu carro com o lucro dos últimos 2 meses.
            </SocialProofP>
          </SocialProofCard>
        </SocialProof>
      </SocialProofWrapper>
    </SocialProofContainer>


  );
};
export default SocialProofSection;