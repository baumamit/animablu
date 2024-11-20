import StoryBox, {BackgroundColorType} from '../custom/StoryBox';

interface PresentazioneProps {
}

const Presentazione: React.FC<PresentazioneProps> = () => {

  return (
    <section id="presentazione" className="container">
      <h2>Presentazione</h2>
      <hr />
      <div className='flex items-start gap-5'>
        <StoryBox backgroundColor = {BackgroundColorType.Beige} paragraphs={[
          'Cosa posso dire di me? Penso, che meglio di me, parli la mia Arte. Ogni Artista si descrive meglio attraverso ciò che crea.',
          'Con le parole posso solo esprimervi, a grandi linee, il filo che muove ciò che creo. La mia Arte è strettamente legata alla mia vita, vita che è molto particolare: particolare per la condizione fisica che la contraddistingue, per le tappe che l’hanno segnata fino ad ora, per le modalità in cui è stata (e continua…) ad essere vissuta. Per spiegare tutto ciò, non basterebbe un libro intero…',
          'Diciamo che la mia esistenza, fino ad oggi, è stata fondamentalmente basata su un’idea: l’idea di non essere vittima, e prigioniero, di me stesso. Non mi sono mai sentito, in alcun modo, PIU’ diverso dagli altri (partendo dal principio che, in natura, tutto è DIVERSITA’).',
          'Ho capito che, per non essere vittima della mia “disabilità” e di una società che categorizza le persone in diversità inesistenti, bastava “soltanto” che mi guardassi dentro: per comprendere chi fossi davvero, quali erano le mie potenzialità, e cosa avrei potuto dare al Mondo.',
          'Questo è il “segreto” per aspirare ad una vita serena e realizzata (“segreto” che, ovviamente, può essere applicato a chiunque…)!',
          'Grazie a questo meccanismo, credo di esser riuscito a trasformare una storia considerata persa in partenza in un’esistenza unica e meravigliosa!',
        ]} />
        <img className='h-auto max-h-[400px] min-w-96 w-auto object-cover ml-5' src="/images/francesco-canale-profile/francesco-canale-profile-giocando.jpg" alt="Francesco Canale bambino" />
      </div>

      <div className='flex items-start gap-5'>
        <img className='h-auto max-h-[400px] min-w-96 w-auto object-cover ml-5' src="/images/francesco-canale-profile/francesco-canale-profile-giocando.jpg" alt="Francesco Canale bambino" />
        <StoryBox backgroundColor = {BackgroundColorType.Lime} paragraphs={[
          'La mia Arte, quindi, desidera spingere la gente a guardarsi dentro, affinché si giunga alla conoscenza di se stessi, all’avere degli ideali che muovano lo Spirito, al riuscire ad osservare e riflettere con la propria testa sul tempo che si sta vivendo, all’elevarsi sopra questa società delle apparenze e delle idiozie.',
          'In poche parole, la mia Arte nasce per spingere le persone a vivere davvero… Ad occhi aperti (gustando, così, ogni più piccolo attimo della propria vita…).',
          'Il mio motto è: “vivere sempre, sopravvivere mai…”. Il mio animale preferito è il LUPO: malinconico, veloce, forte, tormentato, provocatore (sapete… anch’io ululo alla Luna…).',
          'Il mio nome d’Arte è Anima Blu: Anima perché è la parte dell’Uomo che preferisco, e Blu perché mi ricorda l’Infinito.',
          'Questo è quanto si può spiegare a parole. Il resto lo lascio tutto alla vostra libera interpretazione.',
          'Vi auguro una buona visita a questo sito (e chissà, un giorno, di non poter vivere anche attimi reali in vostra compagnia…).',
          '… Non cessate mai di essere Anime libere… Un abbraccio. Anima Blu Lasciate qui sotto, se vi fa piacere, segno del vostro passaggio…',
        ]} />
      </div>
    </section>
  );
};

export {};  // Add this line to make it a module
export default Presentazione;