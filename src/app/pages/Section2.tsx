import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { ComparisonSlide } from '../components/templates/ComparisonSlide';
import { DiagramSlide } from '../components/templates/DiagramSlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { CalloutBox } from '../components/shared/CalloutBox';
import { DefinitionBox } from '../components/shared/DefinitionBox';
import { BlockchainChain } from '../components/blockchain/BlockchainChain';
import { Bitcoin } from 'lucide-react';
import { SectionNav } from '../components/navigation/SectionNav';
import { useM } from '../i18n';

export function Section2() {
  const m = useM();

  const section2Chapters = [
    { id: 's2-breakthrough', label: m('Bitcoin Breakthrough', 'A Revolução do Bitcoin') },
    { id: 's2-what', label: m('What is Bitcoin?', 'O que é o Bitcoin?') },
    { id: 's2-byzantine', label: m('Byzantine Problem', 'Problema Bizantino') },
    { id: 's2-doublespend', label: m('Double-Spending', 'Duplo Gasto') },
    { id: 's2-immutability', label: m('Immutability', 'Imutabilidade') },
    { id: 's2-supply', label: m('Supply Model', 'Modelo de Oferta') },
    { id: 's2-stats', label: m('Network Statistics', 'Estatísticas da Rede') },
    { id: 's2-nodes', label: m('Node Distribution', 'Distribuição de Nós') },
    { id: 's2-security', label: m('Security Model', 'Modelo de Segurança') },
    { id: 's2-programmability', label: m('Programmability', 'Programabilidade') },
    { id: 's2-quiz', label: m('Quizzes', 'Questionários') },
    { id: 's2-takeaways', label: m('Takeaways', 'Conclusões') },
  ];

  return (
    <div className="h-full w-full flex overflow-hidden">
      <SectionNav chapters={section2Chapters} />
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber={m('SECTION 02', 'SECÇÃO 02')}
            title={m('Bitcoin and Beyond', 'Bitcoin e Além')}
            subtitle={m("A deep dive into the world's first cryptocurrency and its network", 'Uma análise aprofundada da primeira criptomoeda do mundo e da sua rede')}
            icon={<Bitcoin className="size-20 text-[#f59e0b]" />}
            gradient="from-[#f59e0b] to-[#ED1C24]"
          />
        </div>

        {/* ═══════ 1. WHY BITCOIN WAS A BREAKTHROUGH ═══════ */}
        <div id="s2-breakthrough" className="h-full">
          <ConceptSlide
            title={m('Why Bitcoin Was a Breakthrough', 'Porque o Bitcoin Foi uma Revolução')}
            description={m('The mysterious Satoshi Nakamoto solved the double-spending problem without a trusted authority — combining decades of cryptographic research into one working protocol.', 'O misterioso Satoshi Nakamoto resolveu o problema do duplo gasto sem uma autoridade de confiança — combinando décadas de investigação criptográfica num único protocolo funcional.')}
            visual={
              <div className="space-y-4 w-full">
                <CalloutBox type="important" title={m('The Double-Spending Problem', 'O Problema do Duplo Gasto')}>
                  {m('How do you prevent someone from spending the same digital currency twice without a central authority to verify transactions?', 'Como impedir que alguém gaste a mesma moeda digital duas vezes sem uma autoridade central para verificar as transações?')}
                </CalloutBox>
                <CalloutBox type="tip" title={m("Satoshi's Solution", 'A Solução de Satoshi')}>
                  {m('Combine cryptographic proof, distributed consensus, and economic incentives to create a trustless system where the network itself prevents fraud.', 'Combinar prova criptográfica, consenso distribuído e incentivos económicos para criar um sistema sem necessidade de confiança, onde a própria rede previne a fraude.')}
                </CalloutBox>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="font-mono text-sm text-muted-foreground mb-2">{m('Genesis Block Message:', 'Mensagem do Bloco Génese:')}</div>
                  <div className="text-sm text-foreground italic">
                    "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m('Created a decentralized consensus mechanism (Proof of Work)', 'Criou um mecanismo de consenso descentralizado (Prova de Trabalho)'),
              m('Designed a transparent public ledger system', 'Concebeu um sistema de registo público transparente'),
              m('Implemented cryptographic security for transactions', 'Implementou segurança criptográfica para as transações'),
              m('Established fixed supply and predictable issuance schedule', 'Estabeleceu uma oferta fixa e um calendário de emissão previsível')
            ]}
          />
        </div>

        {/* ═══════ 3. WHAT IS BITCOIN ═══════ */}
        <div id="s2-what" className="h-full">
          <ConceptSlide
            title={m('What is Bitcoin?', 'O que é o Bitcoin?')}
            description={m('Bitcoin is the first decentralized digital currency — a peer-to-peer electronic cash system that operates without banks, governments, or intermediaries.', 'O Bitcoin é a primeira moeda digital descentralizada — um sistema de dinheiro eletrónico par-a-par que opera sem bancos, governos ou intermediários.')}
            visual={
              <div className="space-y-4 w-full">
                <DefinitionBox
                  term={m('Bitcoin (BTC)', 'Bitcoin (BTC)')}
                  definition={m('A decentralized digital currency created in 2009 by Satoshi Nakamoto. It runs on a public blockchain where transactions are verified by a global network of nodes and miners.', 'Uma moeda digital descentralizada criada em 2009 por Satoshi Nakamoto. Funciona sobre uma blockchain pública onde as transações são verificadas por uma rede global de nós e mineradores.')}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">{m('🌐 Permissionless', '🌐 Sem Permissões')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Anyone can send, receive, or validate transactions without asking permission', 'Qualquer pessoa pode enviar, receber ou validar transações sem pedir autorização')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">{m('🔓 Open Source', '🔓 Código Aberto')}</h4>
                    <p className="text-sm text-muted-foreground">{m('The code is public — anyone can audit, fork, or contribute to Bitcoin Core', 'O código é público — qualquer pessoa pode auditar, fazer fork ou contribuir para o Bitcoin Core')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">{m('💎 Scarce', '💎 Escasso')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Hard-capped at 21 million coins — enforced by code, not promises', 'Limite máximo de 21 milhões de moedas — imposto por código, não por promessas')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">{m('⚡ Censorship Resistant', '⚡ Resistente à Censura')}</h4>
                    <p className="text-sm text-muted-foreground">{m('No entity can freeze, reverse, or block a valid Bitcoin transaction', 'Nenhuma entidade pode congelar, reverter ou bloquear uma transação Bitcoin válida')}</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m('Bitcoin is both a payment network and a unit of currency (BTC)', 'O Bitcoin é simultaneamente uma rede de pagamentos e uma unidade monetária (BTC)'),
              m('It solved the double-spending problem without a central authority', 'Resolveu o problema do duplo gasto sem uma autoridade central'),
              m('Transactions are irreversible once confirmed on-chain', 'As transações são irreversíveis após serem confirmadas na cadeia'),
              m('Bitcoin pioneered the entire cryptocurrency industry', 'O Bitcoin foi pioneiro de toda a indústria das criptomoedas')
            ]}
          />
        </div>

        {/* ═══════ 2. BYZANTINE GENERALS PROBLEM ═══════ */}
        <div id="s2-byzantine" className="h-full">
          <ConceptSlide
            title={m('The Byzantine Generals Problem', 'O Problema dos Generais Bizantinos')}
            description={m("How do you reach agreement when you can't trust every participant? A 27-year-old computer science puzzle — solved by Bitcoin in 2009.", 'Como chegar a um acordo quando não se pode confiar em todos os participantes? Um enigma da ciência da computação com 27 anos — resolvido pelo Bitcoin em 2009.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">{m('⚔️ The Problem', '⚔️ O Problema')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Generals surrounding a city must agree on one plan — but some are traitors sending conflicting orders. No trusted messenger exists to verify who is lying.', 'Generais que cercam uma cidade têm de concordar com um plano — mas alguns são traidores que enviam ordens contraditórias. Não existe um mensageiro de confiança para verificar quem está a mentir.')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">{m('💻 In Computing Terms', '💻 Em Termos Computacionais')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Generals = nodes. Messengers = internet packets. Traitors = malicious nodes. Battle plan = shared transaction history. Any node can lie or go offline.', 'Generais = nós. Mensageiros = pacotes de internet. Traidores = nós maliciosos. Plano de batalha = histórico de transações partilhado. Qualquer nó pode mentir ou ficar offline.')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">{m("⛏️ Bitcoin's Solution", '⛏️ A Solução do Bitcoin')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Proof of Work makes lying expensive. Every block costs real energy — so cheating costs more than cooperating. The longest chain always represents the honest majority.', 'A Prova de Trabalho torna a mentira dispendiosa. Cada bloco custa energia real — portanto, trapacear custa mais do que cooperar. A cadeia mais longa representa sempre a maioria honesta.')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">{m('🔢 The 51% Rule', '🔢 A Regra dos 51%')}</h4>
                    <p className="text-sm text-muted-foreground">{m('The network tolerates up to ⅓ of nodes being malicious. As long as honest nodes hold the majority of hash power, consensus is always reached correctly.', 'A rede tolera até ⅓ dos nós serem maliciosos. Enquanto os nós honestos detiverem a maioria do poder de hash, o consenso é sempre alcançado corretamente.')}</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m('Problem formalized by Lamport, Shostak & Pease in 1982', 'Problema formalizado por Lamport, Shostak e Pease em 1982'),
              m('Before Bitcoin, no practical solution existed for open, untrusted networks', 'Antes do Bitcoin, não existia solução prática para redes abertas e sem confiança'),
              m('Proof of Work is the first mechanism where dishonesty is economically irrational', 'A Prova de Trabalho é o primeiro mecanismo em que a desonestidade é economicamente irracional'),
              m('Bitcoin achieves consensus without any central authority or trusted party', 'O Bitcoin alcança consenso sem qualquer autoridade central ou parte de confiança')
            ]}
          />
        </div>

        {/* ═══════ DOUBLE-SPENDING ═══════ */}
        <div id="s2-doublespend" className="h-full">
          <ConceptSlide
            title={m('The Double-Spending Problem', 'O Problema do Duplo Gasto')}
            description={m("Digital money can be copied like any file. Before Bitcoin, only a bank could guarantee you hadn't already spent the same coin twice.", 'O dinheiro digital pode ser copiado como qualquer ficheiro. Antes do Bitcoin, só um banco podia garantir que não tinha já gasto a mesma moeda duas vezes.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">{m('📋 The Attack', '📋 O Ataque')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Alice has 1 BTC. She broadcasts two transactions simultaneously — one paying Bob, one paying herself. Without a referee, both look valid. Who gets the coin?', 'A Alice tem 1 BTC. Ela transmite duas transações em simultâneo — uma a pagar ao Bob, outra a pagar-se a si própria. Sem um árbitro, ambas parecem válidas. Quem fica com a moeda?')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">{m('🏦 The Old Fix — Trust a Bank', '🏦 A Solução Antiga — Confiar num Banco')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Banks keep a central ledger. When you pay, they debit your account instantly. No double-spend possible — but you must trust them 100% with your money.', 'Os bancos mantêm um registo central. Quando paga, debitam a sua conta instantaneamente. Nenhum duplo gasto é possível — mas tem de confiar a 100% o seu dinheiro a eles.')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">{m("🔗 Bitcoin's Fix — UTXO + Chain", '🔗 A Solução do Bitcoin — UTXO + Cadeia')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Every coin is a specific Unspent Transaction Output. Spending it destroys it and creates new outputs. A UTXO can only be consumed once — miners reject any transaction referencing an already-spent output.', 'Cada moeda é um Output de Transação Não Gasto (UTXO) específico. Gastá-lo destrói-o e cria novos outputs. Um UTXO só pode ser consumido uma vez — os mineradores rejeitam qualquer transação que faça referência a um output já gasto.')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">{m('⛏️ Confirmed = Final', '⛏️ Confirmado = Final')}</h4>
                    <p className="text-sm text-muted-foreground">{m("Once a transaction is included in a block and buried under more blocks, rewriting it would require outpacing the entire network's hash power. After 6 confirmations, it's economically irreversible.", 'Quando uma transação é incluída num bloco e enterrada sob mais blocos, reescrevê-la exigiria ultrapassar todo o poder de hash da rede. Após 6 confirmações, é economicamente irreversível.')}</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m('Digital cash without a bank was impossible before Bitcoin — copies are free', 'Dinheiro digital sem banco era impossível antes do Bitcoin — as cópias são gratuitas'),
              m("UTXO are destroyed when spent — there is no 'balance', only unspent outputs", 'Os UTXO são destruídos quando gastos — não existe "saldo", apenas outputs não gastos'),
              m("Miners validate that every input UTXO exists and hasn't been spent yet", 'Os mineradores validam que cada UTXO de entrada existe e ainda não foi gasto'),
              m('The blockchain is a globally shared, ordered log that makes double-spending publicly visible', 'A blockchain é um registo ordenado e partilhado globalmente que torna o duplo gasto publicamente visível')
            ]}
          />
        </div>

        {/* ═══════ 3. IMMUTABILITY & BLOCK LINKING ═══════ */}
        <div id="s2-immutability" className="h-full">
          <DiagramSlide
            title={m('Immutability Through Block Linking', 'Imutabilidade Através da Ligação de Blocos')}
            diagram={
              <BlockchainChain
                blocks={[
                  {
                    blockNumber: 840000,
                    hash: "0x00000...a3f7",
                    previousHash: "0x00000...9c12",
                    timestamp: m('Apr 20, 2024', '20 abr. 2024'),
                    data: m('Halving Block', 'Bloco de Halving'),
                    highlighted: false
                  },
                  {
                    blockNumber: 840001,
                    hash: "0x00000...b8e2",
                    previousHash: "0x00000...a3f7",
                    timestamp: m('Apr 20, 2024', '20 abr. 2024'),
                    data: m('3.125 BTC reward', 'Recompensa de 3,125 BTC'),
                    highlighted: false
                  },
                  {
                    blockNumber: 840002,
                    hash: "0x00000...c4d9",
                    previousHash: "0x00000...b8e2",
                    timestamp: m('Apr 20, 2024', '20 abr. 2024'),
                    data: m('142 transactions', '142 transações'),
                    highlighted: true
                  }
                ]}
              />
            }
            caption={m("Each block's hash depends on the previous block's hash — altering any block would cascade through every subsequent block", 'O hash de cada bloco depende do hash do bloco anterior — alterar qualquer bloco propagar-se-ia por todos os blocos subsequentes')}
            annotations={[
              {
                label: m('Cryptographic Linking', 'Ligação Criptográfica'),
                description: m('Each block header includes the hash of the previous block, creating an unbreakable chain of commitments', 'O cabeçalho de cada bloco inclui o hash do bloco anterior, criando uma cadeia inquebrável de compromissos')
              },
              {
                label: m('Why It Matters', 'Porque é Importante'),
                description: m('To alter a past transaction, an attacker would need to recalculate every block after it faster than the entire network — practically impossible', 'Para alterar uma transação passada, um atacante teria de recalcular cada bloco subsequente mais depressa do que toda a rede — praticamente impossível')
              },
              {
                label: m('Finality Grows Over Time', 'A Finalidade Aumenta com o Tempo'),
                description: m('The deeper a block is buried, the more computational work protects it. 6 confirmations (~60 min) is considered practically irreversible', 'Quanto mais fundo um bloco estiver enterrado, mais trabalho computacional o protege. 6 confirmações (~60 min) são consideradas praticamente irreversíveis')
              }
            ]}
          />
        </div>

        {/* ═══════ 4. SUPPLY MODEL ═══════ */}
        <div id="s2-supply" className="h-full">
          <ConceptSlide
            title={m('Bitcoin Supply Model', 'Modelo de Oferta do Bitcoin')}
            description={m('Bitcoin has a fixed, predictable monetary policy — arguably the most transparent in history.', 'O Bitcoin tem uma política monetária fixa e previsível — provavelmente a mais transparente da história.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="p-5 bg-card rounded-xl border-2 border-[#f59e0b]">
                  <h4 className="font-bold text-[#f59e0b] mb-3">{m('📊 Supply Numbers', '📊 Números da Oferta')}</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">{m('Maximum Supply', 'Oferta Máxima')}</div>
                      <div className="font-bold text-foreground text-lg">21,000,000 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">{m('Circulating (~2025)', 'Em Circulação (~2025)')}</div>
                      <div className="font-bold text-foreground text-lg">~19,800,000 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">{m('Current Block Reward', 'Recompensa Atual por Bloco')}</div>
                      <div className="font-bold text-foreground text-lg">3.125 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">{m('Next Halving', 'Próximo Halving')}</div>
                      <div className="font-bold text-foreground text-lg">~2028</div>
                    </div>
                  </div>
                </div>
                <CalloutBox type="tip" title={m('The Halving', 'O Halving')}>
                  {m('Every 210,000 blocks (~4 years), the block reward is cut in half. Started at 50 BTC in 2009, now 3.125 BTC after the April 2024 halving. The last Bitcoin will be mined around the year 2140.', 'A cada 210.000 blocos (~4 anos), a recompensa por bloco é reduzida para metade. Começou em 50 BTC em 2009, sendo agora de 3,125 BTC após o halving de abril de 2024. O último Bitcoin será minerado por volta do ano 2140.')}
                </CalloutBox>
              </div>
            }
            keyPoints={[
              m('Fixed supply makes Bitcoin deflationary by design', 'A oferta fixa torna o Bitcoin deflacionário por design'),
              m('~94% of all Bitcoin that will ever exist has already been mined', '~94% de todo o Bitcoin que alguma vez existirá já foi minerado'),
              m('Halving events historically precede major price cycles', 'Os eventos de halving precedem historicamente os principais ciclos de preço'),
              m('Estimated 3-4 million BTC are permanently lost (forgotten keys)', 'Estima-se que 3 a 4 milhões de BTC estejam permanentemente perdidos (chaves esquecidas)')
            ]}
          />
        </div>

        {/* ═══════ 5. NETWORK STATISTICS ═══════ */}
        <div id="s2-stats" className="h-full">
          <ConceptSlide
            title={m('Bitcoin Network Statistics', 'Estatísticas da Rede Bitcoin')}
            description={m('The Bitcoin network is the most powerful and longest-running decentralized computing network in history.', 'A rede Bitcoin é a rede de computação descentralizada mais poderosa e duradoura da história.')}
            visual={
              <div className="space-y-3 w-full">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#f59e0b]">~800 EH/s</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Total Hash Rate (2025)', 'Taxa de Hash Total (2025)')}</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#39B54A]">~19,000+</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Reachable Full Nodes', 'Nós Completos Alcançáveis')}</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#ED1C24]">~580 GB</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Full Blockchain Size', 'Tamanho Total da Blockchain')}</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#6366f1]">~10 min</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Average Block Time', 'Tempo Médio por Bloco')}</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#8b5cf6]">~400K</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Daily Transactions', 'Transações Diárias')}</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#f59e0b]">99.99%</div>
                    <div className="text-xs text-muted-foreground mt-1">{m('Uptime Since 2009', 'Disponibilidade desde 2009')}</div>
                  </div>
                </div>
                <CalloutBox type="info" title={m('Difficulty Adjustment', 'Ajuste de Dificuldade')}>
                  {m('Every 2,016 blocks (~2 weeks), the network automatically adjusts mining difficulty to maintain the ~10-minute block target — regardless of how much hash power joins or leaves.', 'A cada 2.016 blocos (~2 semanas), a rede ajusta automaticamente a dificuldade de mineração para manter o alvo de ~10 minutos por bloco — independentemente do poder de hash que entra ou sai.')}
                </CalloutBox>
              </div>
            }
            keyPoints={[
              m('Hash rate has increased exponentially, now measured in exahashes', 'A taxa de hash cresceu exponencialmente, sendo agora medida em exahashes'),
              m('Bitcoin has had only 2 brief notable downtime events in 15+ years', 'O Bitcoin teve apenas 2 breves períodos notáveis de indisponibilidade em mais de 15 anos'),
              m("The difficulty adjustment is one of Bitcoin's most elegant features", 'O ajuste de dificuldade é uma das funcionalidades mais elegantes do Bitcoin'),
              m('Anyone with a computer can run a full node and verify the entire chain', 'Qualquer pessoa com um computador pode executar um nó completo e verificar toda a cadeia')
            ]}
          />
        </div>

        {/* ═══════ 6. NODE DISTRIBUTION ═══════ */}
        <div id="s2-nodes" className="h-full">
          <ComparisonSlide
            title={m('Node Distribution & Roles', 'Distribuição e Funções dos Nós')}
            featureLabel={m('Node Type', 'Tipo de Nó')}
            option1Label={m('Role', 'Função')}
            option2Label={m('Storage Needs', 'Necessidades de Armazenamento')}
            option3Label={m('Validation Method', 'Método de Validação')}
            items={[
              {
                feature: m('⚙️ Full Node', '⚙️ Nó Completo'),
                option1: m('Enforces all consensus rules, relays transactions to peers. The backbone of the network.', 'Aplica todas as regras de consenso e retransmite transações para os pares. A espinha dorsal da rede.'),
                option2: m('Full blockchain — ~600 GB and growing. Requires a dedicated drive.', 'Blockchain completa — ~600 GB e a crescer. Requer um disco dedicado.'),
                option3: m('Independently verifies every transaction and every block from genesis.', 'Verifica de forma independente cada transação e cada bloco desde o génese.')
              },
              {
                feature: m('⛏️ Mining Node', '⛏️ Nó de Mineração'),
                option1: m('Bundles transactions into blocks and competes via Proof of Work to earn block rewards + fees.', 'Agrega transações em blocos e compete através da Prova de Trabalho para ganhar recompensas de bloco e taxas.'),
                option2: m('Full blockchain + specialized ASIC hardware. Very high resource cost.', 'Blockchain completa + hardware ASIC especializado. Custo de recursos muito elevado.'),
                option3: m('Full validation like a full node, plus solves the PoW hash puzzle to propose new blocks.', 'Validação completa como um nó completo, mais a resolução do enigma de hash PoW para propor novos blocos.')
              },
              {
                feature: m('📱 SPV / Light Node', '📱 Nó Leve / SPV'),
                option1: m('Lightweight client used in mobile wallets. Sends and receives BTC without storing the chain.', 'Cliente leve usado em carteiras móveis. Envia e recebe BTC sem armazenar a cadeia.'),
                option2: m('Block headers only — ~50 MB. Suitable for phones and low-storage devices.', 'Apenas cabeçalhos de bloco — ~50 MB. Adequado para telemóveis e dispositivos com pouco armazenamento.'),
                option3: m('Relies on Merkle proofs provided by full nodes. Trusts the longest chain, not self-verified.', 'Depende de provas de Merkle fornecidas por nós completos. Confia na cadeia mais longa, sem verificação própria.')
              },
              {
                feature: m('✂️ Pruned Node', '✂️ Nó Podado'),
                option1: m('Validates the full chain during sync, then discards old block data to save disk space.', 'Valida toda a cadeia durante a sincronização e depois descarta dados antigos de blocos para poupar espaço em disco.'),
                option2: m('Recent blocks only — configurable, typically ~5–10 GB after pruning.', 'Apenas blocos recentes — configurável, tipicamente ~5–10 GB após poda.'),
                option3: m('Full validation from genesis during initial sync. After pruning, can no longer serve old blocks.', 'Validação completa desde o génese durante a sincronização inicial. Após a poda, deixa de poder servir blocos antigos.')
              }
            ]}
          />
        </div>

        {/* ═══════ NODE DISTRIBUTION — CLOUD CENTRALISATION RISK ═══════ */}
        <div className="h-full flex flex-col p-6 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1 shrink-0">{m('Node Distribution & Roles', 'Distribuição e Funções dos Nós')}</h2>
          <p className="text-muted-foreground text-sm mb-5 shrink-0">{m('Blockchain is decentralized by design — but who actually ', 'A blockchain é descentralizada por design — mas quem realmente ')}<span className="text-foreground font-semibold">{m('runs', 'opera')}</span>{m(' the nodes matters just as much as the protocol rules.', ' os nós importa tanto como as regras do protocolo.')}</p>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: cloud concentration */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{m('The hidden centralisation risk', 'O risco oculto de centralização')}</p>

              <div className="p-4 bg-gradient-to-br from-[#f59e0b]/15 to-[#ED1C24]/10 border border-[#f59e0b]/40 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">☁️</span>
                  <h4 className="font-black text-foreground text-base">{m('Cloud Hosting Concentration', 'Concentração de Alojamento na Cloud')}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {m('Even though anyone can run a node, in practice a large share of nodes are rented virtual machines hosted on a handful of cloud providers — not personal servers at home.', 'Embora qualquer pessoa possa executar um nó, na prática uma grande parte dos nós são máquinas virtuais alugadas e alojadas num punhado de fornecedores de cloud — e não servidores pessoais em casa.')}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { provider: 'AWS', share: '~48 %', color: '#f59e0b' },
                    { provider: 'Azure', share: '~15 %', color: '#6366f1' },
                    { provider: 'GCP', share: '~10 %', color: '#39B54A' },
                  ].map(p => (
                    <div key={p.provider} className="bg-muted rounded-lg p-2 text-center">
                      <div className="font-black text-sm" style={{ color: p.color }}>{p.share}</div>
                      <div className="text-xs text-muted-foreground">{p.provider}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  {m('Estimated share of Ethereum nodes by cloud provider (2023–2024 data).', 'Quota estimada de nós Ethereum por fornecedor de cloud (dados de 2023–2024).')}
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#ED1C24]/15 to-transparent border border-[#ED1C24]/30 rounded-xl flex-1 flex flex-col">
                <h4 className="font-bold text-[#ED1C24] text-base mb-4">{m('⚠️ What could go wrong?', '⚠️ O que pode correr mal?')}</h4>

                {/* Real-life incident */}
                <div className="mb-4 p-4 bg-[#ED1C24]/10 border border-[#ED1C24]/40 rounded-lg">
                  <p className="text-sm font-bold text-foreground mb-2">{m('🔴 Real incident — December 7, 2021', '🔴 Incidente real — 7 de dezembro de 2021')}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m('AWS us-east-1 suffered a major outage. Within hours, ', 'A AWS us-east-1 sofreu uma grande falha. Em poucas horas, ')}<span className="text-foreground font-semibold">{m('Solana validators went offline', 'os validadores da Solana ficaram offline')}</span>{m(', Ethereum RPC providers like ', ', fornecedores de RPC do Ethereum como ')}<span className="text-foreground font-semibold">{m('Infura and Alchemy became unreachable', 'a Infura e a Alchemy tornaram-se inacessíveis')}</span>{m(', and front-ends for Uniswap, OpenSea and dozens of DeFi apps stopped loading — even though the underlying protocols were perfectly fine. Users couldn\'t interact with "decentralized" apps because the access layer was centralized on a single AWS region.', ', e os front-ends do Uniswap, OpenSea e de dezenas de aplicações DeFi deixaram de carregar — apesar de os protocolos subjacentes estarem perfeitamente operacionais. Os utilizadores não conseguiam interagir com aplicações "descentralizadas" porque a camada de acesso estava centralizada numa única região da AWS.')}
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li>{m('• A cloud provider can ', '• Um fornecedor de cloud pode ')}<span className="text-foreground font-semibold">{m('suspend accounts', 'suspender contas')}</span>{m(', removing nodes and RPC endpoints overnight with no recourse', ', removendo nós e endpoints RPC de um dia para o outro sem qualquer recurso')}</li>
                  <li>{m('• US sanctions could legally force AWS, Azure or GCP to ', '• Sanções dos EUA poderiam obrigar legalmente a AWS, a Azure ou a GCP a ')}<span className="text-foreground font-semibold">{m('block entire protocols', 'bloquear protocolos inteiros')}</span>{m(' or geographic regions', ' ou regiões geográficas')}</li>
                  <li>{m('• The blockchain protocol stays decentralized — but the ', '• O protocolo blockchain mantém-se descentralizado — mas a ')}<span className="text-foreground font-semibold">{m('infrastructure layer most users rely on', 'camada de infraestrutura em que a maioria dos utilizadores confia')}</span>{m(' is not', ' não está')}</li>
                </ul>
              </div>
            </div>

            {/* Right: solutions & mitigations */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{m('How the ecosystem responds', 'Como o ecossistema responde')}</p>
              {[
                { color: '#39B54A', emoji: '🏠', title: m('Home Node Initiatives', 'Iniciativas de Nós Domésticos'), desc: m('Projects like Ethereum\'s "Run the Majority Client" campaign and Raspberry Pi node guides actively push users to self-host nodes at home.', 'Projetos como a campanha "Run the Majority Client" do Ethereum e guias de nós em Raspberry Pi incentivam ativamente os utilizadores a alojar nós em casa.') },
                { color: '#6366f1', emoji: '🌍', title: m('Geographic Diversity', 'Diversidade Geográfica'), desc: m('Node diversity across countries reduces the risk that any single jurisdiction can shut down the network. Nodes in 80+ countries run Bitcoin today.', 'A diversidade de nós entre países reduz o risco de uma única jurisdição encerrar a rede. Hoje existem nós Bitcoin em mais de 80 países.') },
                { color: '#f59e0b', emoji: '🔗', title: m('Decentralized RPC', 'RPC Descentralizado'), desc: m('Projects like Pocket Network and Ankr distribute RPC access across many independent operators instead of relying on a single provider like Infura.', 'Projetos como a Pocket Network e a Ankr distribuem o acesso RPC por vários operadores independentes em vez de dependerem de um único fornecedor como a Infura.') },
                { color: '#ED1C24', emoji: '📊', title: m('Client Diversity', 'Diversidade de Clientes'), desc: m('Running multiple independent software implementations (Geth, Nethermind, Besu for Ethereum) prevents a single bug from taking down the whole network.', 'Executar várias implementações de software independentes (Geth, Nethermind, Besu para Ethereum) impede que um único bug derrube toda a rede.') },
              ].map(n => (
                <div key={n.title} className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl flex-1" style={{ borderColor: n.color + '30' }}>
                  <div className="text-xl shrink-0">{n.emoji}</div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: n.color }}>{n.title}</div>
                    <div className="text-xs text-muted-foreground">{n.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ═══════ 7. SECURITY MODEL ═══════ */}
        <div id="s2-security" className="h-full">
          <ConceptSlide
            title={m('Bitcoin Security Model', 'Modelo de Segurança do Bitcoin')}
            description={m("Bitcoin's security relies on economic incentives, cryptographic proofs, and decentralized verification — not trust.", 'A segurança do Bitcoin assenta em incentivos económicos, provas criptográficas e verificação descentralizada — e não em confiança.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">{m('⛏️ 51% Attack', '⛏️ Ataque dos 51%')}</h4>
                    <p className="text-sm text-muted-foreground">{m('An attacker would need more hash power than the rest of the network combined — currently requiring billions of dollars in hardware and electricity', 'Um atacante precisaria de mais poder de hash do que o resto da rede em conjunto — exigindo atualmente milhares de milhões de dólares em hardware e eletricidade')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">{m('🔐 Cryptographic Security', '🔐 Segurança Criptográfica')}</h4>
                    <p className="text-sm text-muted-foreground">{m("SHA-256 hashing and ECDSA signatures have no known practical attacks. Breaking them requires breakthroughs that don't yet exist", 'O hashing SHA-256 e as assinaturas ECDSA não têm ataques práticos conhecidos. Quebrá-los exige avanços que ainda não existem')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">{m('💰 Economic Incentives', '💰 Incentivos Económicos')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Miners profit more from honest behavior than attacks. Attacking would destroy the value of their own holdings and hardware', 'Os mineradores lucram mais com o comportamento honesto do que com ataques. Atacar destruiria o valor das suas próprias participações e hardware')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">{m('🌍 Decentralization', '🌍 Descentralização')}</h4>
                    <p className="text-sm text-muted-foreground">{m('No single government, company, or individual can shut down Bitcoin — nodes exist in 100+ countries', 'Nenhum governo, empresa ou indivíduo isolado pode encerrar o Bitcoin — existem nós em mais de 100 países')}</p>
                  </div>
                </div>
                <CalloutBox type="warning" title={m('What About Quantum Computing?', 'E a Computação Quântica?')}>
                  {m("Current quantum computers cannot break Bitcoin's cryptography. If they advance far enough, Bitcoin can upgrade to quantum-resistant algorithms — research is already underway.", 'Os computadores quânticos atuais não conseguem quebrar a criptografia do Bitcoin. Se avançarem o suficiente, o Bitcoin pode ser atualizado para algoritmos resistentes ao quântico — a investigação já está em curso.')}
                </CalloutBox>
              </div>
            }
            keyPoints={[
              m('Attacking Bitcoin costs more than cooperating with it', 'Atacar o Bitcoin custa mais do que cooperar com ele'),
              m('The network has never been successfully hacked in 15+ years', 'A rede nunca foi pirateada com sucesso em mais de 15 anos'),
              m('6 confirmations (~60 min) is considered practically irreversible', '6 confirmações (~60 min) são consideradas praticamente irreversíveis'),
              m('Security increases as hash rate and node count grow', 'A segurança aumenta à medida que a taxa de hash e o número de nós crescem')
            ]}
          />
        </div>

        {/* ═══════ 9. BITCOIN'S PROGRAMMABILITY LIMITS ═══════ */}
        <div id="s2-programmability" className="h-full flex flex-col p-5 lg:p-8">

          <div className="shrink-0 mb-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{m("Bitcoin Wasn't Built to Be Programmable", 'O Bitcoin Não Foi Construído para Ser Programável')}</h2>
            <p className="text-sm text-muted-foreground">{m('By design, Bitcoin prioritises security and simplicity over flexibility — but that left a gap others tried to fill.', 'Por design, o Bitcoin prioriza a segurança e a simplicidade em vez da flexibilidade — mas isso deixou uma lacuna que outros tentaram preencher.')}</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">

            {/* Left column */}
            <div className="flex flex-col gap-4 min-h-0">

              <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="size-7 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-sm">📜</span>
                  {m('Bitcoin Script — Simple by Design', 'Bitcoin Script — Simples por Design')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {m('Bitcoin does have a built-in scripting language called ', 'O Bitcoin tem efetivamente uma linguagem de script integrada chamada ')}<span className="text-foreground font-medium">{m('Bitcoin Script', 'Bitcoin Script')}</span>{m('. It can handle conditions like "spend only with two signatures" or "unlock after a time delay". But it is intentionally ', '. Consegue lidar com condições como "gastar apenas com duas assinaturas" ou "desbloquear após um atraso temporal". Mas é intencionalmente ')}<span className="text-foreground font-medium">{m('not Turing-complete', 'não Turing-completa')}</span>{m(' — there are no loops, no persistent state, and no complex logic.', ' — não há ciclos, nem estado persistente, nem lógica complexa.')}
                </p>
                <div className="px-3 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg text-xs text-muted-foreground italic">
                  {m("Satoshi's reasoning: a simpler language has a smaller attack surface. The fewer things it can do, the fewer ways it can go wrong.", 'O raciocínio de Satoshi: uma linguagem mais simples tem uma menor superfície de ataque. Quanto menos coisas pode fazer, menos formas tem de correr mal.')}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="size-7 rounded-lg bg-[#6366f1]/20 flex items-center justify-center text-sm">🧪</span>
                  {m('Early Attempts to Build on Bitcoin', 'Primeiras Tentativas de Construir sobre o Bitcoin')}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#f59e0b] shrink-0 font-bold">2012</span>
                    <span><span className="text-foreground font-medium">{m('Colored Coins', 'Colored Coins')}</span>{m(' — encode metadata in Bitcoin transactions to represent real-world assets. Clever, but very limited.', ' — codificar metadados em transações Bitcoin para representar ativos do mundo real. Engenhoso, mas muito limitado.')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f59e0b] shrink-0 font-bold">2013</span>
                    <span><span className="text-foreground font-medium">{m('Mastercoin / Omni Layer', 'Mastercoin / Omni Layer')}</span>{m(' — a protocol layer on top of Bitcoin. Enabled token creation. Still constrained by Bitcoin Script.', ' — uma camada de protocolo sobre o Bitcoin. Permitiu a criação de tokens. Ainda limitada pelo Bitcoin Script.')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f59e0b] shrink-0 font-bold">2014</span>
                    <span><span className="text-foreground font-medium">{m('Counterparty', 'Counterparty')}</span>{m(' — added smart contract-like features by encoding data into Bitcoin transactions. Functional, but hacky and slow.', ' — adicionou funcionalidades semelhantes a contratos inteligentes ao codificar dados em transações Bitcoin. Funcional, mas improvisada e lenta.')}</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 min-h-0">

              <div className="bg-card border-2 border-[#ED1C24]/40 rounded-xl p-4 flex flex-col gap-2">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="size-7 rounded-lg bg-[#ED1C24]/20 flex items-center justify-center text-sm">🚧</span>
                  {m('What You Simply Cannot Do on Bitcoin', 'O Que Simplesmente Não Se Pode Fazer no Bitcoin')}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: m('Complex smart contracts', 'Contratos inteligentes complexos'), why: m('No loops, no state', 'Sem ciclos, sem estado') },
                    { label: m('Decentralised apps (dApps)', 'Aplicações descentralizadas (dApps)'), why: m('No persistent logic', 'Sem lógica persistente') },
                    { label: m('On-chain tokens & NFTs', 'Tokens e NFTs on-chain'), why: m('No native token standard', 'Sem norma de token nativa') },
                    { label: m('Autonomous on-chain rules', 'Regras autónomas on-chain'), why: m('Script too restrictive', 'Script demasiado restritivo') },
                  ].map(item => (
                    <div key={item.label} className="bg-muted/50 rounded-lg p-2">
                      <div className="text-xs font-bold text-foreground">✗ {item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.why}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#627EEA]/15 to-[#39B54A]/10 border border-[#627EEA]/40 rounded-xl p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="size-7 rounded-lg bg-[#627EEA]/20 flex items-center justify-center text-sm">💡</span>
                  {m('The Question That Started Everything', 'A Pergunta Que Deu Início a Tudo')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {m('In 2013, a 19-year-old named ', 'Em 2013, um jovem de 19 anos chamado ')}<span className="text-foreground font-medium">{m('Vitalik Buterin', 'Vitalik Buterin')}</span>{m(' asked: ', ' perguntou: ')}<em>"What if instead of adding features on top of Bitcoin, we built a new blockchain designed from the ground up to run any program?"</em>
                </p>
                <p className="text-sm text-muted-foreground">
                  {m("Bitcoin's core community largely rejected adding more programmability — they wanted to keep it simple and focused. That rejection became the direct motivation for ", 'A comunidade central do Bitcoin rejeitou em grande medida acrescentar mais programabilidade — queriam mantê-lo simples e focado. Essa rejeição tornou-se a motivação direta para o ')}<span className="text-foreground font-medium">{m('Ethereum', 'Ethereum')}</span>{m('.', '.')}
                </p>
                <div className="mt-auto px-3 py-2 bg-[#627EEA]/10 border border-[#627EEA]/30 rounded-lg text-xs text-[#627EEA] font-medium text-center">
                  {m('→ The story continues in Section 3', '→ A história continua na Secção 3')}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ═══════ QUIZ ═══════ */}
        <div id="s2-quiz" className="h-full">
          <QuizSlide
            question={m('Why can there never be more than 21 million Bitcoin?', 'Porque é que nunca poderá haver mais de 21 milhões de Bitcoin?')}
            options={[
              {
                text: m('A government regulation limits the supply', 'Uma regulação governamental limita a oferta'),
                correct: false
              },
              {
                text: m('The rule is enforced by code: every node rejects blocks that violate it', 'A regra é imposta por código: cada nó rejeita os blocos que a violem'),
                correct: true
              },
              {
                text: m('Satoshi Nakamoto manually controls the issuance', 'Satoshi Nakamoto controla manualmente a emissão'),
                correct: false
              },
              {
                text: m('Mining hardware physically cannot produce more', 'O hardware de mineração não consegue fisicamente produzir mais'),
                correct: false
              }
            ]}
            explanation={m("The 21 million limit is enforced by Bitcoin's consensus rules. Every full node independently verifies that new blocks follow the supply schedule. Changing this would require convincing the vast majority of the network to adopt new rules — a practical impossibility.", 'O limite de 21 milhões é imposto pelas regras de consenso do Bitcoin. Cada nó completo verifica de forma independente que os novos blocos seguem o calendário de oferta. Alterar isto exigiria convencer a grande maioria da rede a adotar novas regras — uma impossibilidade prática.')}
          />
        </div>

        {/* Quiz: security */}
        <div className="h-full">
          <QuizSlide
            question={m('Why is a 51% attack on Bitcoin considered economically irrational?', 'Porque é que um ataque dos 51% ao Bitcoin é considerado economicamente irracional?')}
            options={[
              { text: m('Because Bitcoin is protected by government regulations', 'Porque o Bitcoin é protegido por regulamentações governamentais'), correct: false },
              { text: m("Because the cost far exceeds potential profit, and success would destroy the attacker's own holdings", 'Porque o custo excede largamente o lucro potencial, e o sucesso destruiria as próprias participações do atacante'), correct: true },
              { text: m('Because only 49% of nodes can ever be compromised at once', 'Porque apenas 49% dos nós podem ser comprometidos em simultâneo'), correct: false },
              { text: m('Because Satoshi Nakamoto can reverse any malicious transactions', 'Porque Satoshi Nakamoto pode reverter quaisquer transações maliciosas'), correct: false }
            ]}
            explanation={m("A successful 51% attack would require billions in hardware and electricity. Even if it succeeded, it would crash Bitcoin's price — destroying the value of the attacker's own coins and equipment. Honest mining is simply more profitable.", 'Um ataque dos 51% bem-sucedido exigiria milhares de milhões em hardware e eletricidade. Mesmo que tivesse êxito, faria colapsar o preço do Bitcoin — destruindo o valor das próprias moedas e equipamento do atacante. A mineração honesta é simplesmente mais lucrativa.')}
          />
        </div>

        {/* Quiz: Byzantine Generals Problem */}
        <div className="h-full">
          <QuizSlide
            question={m("What was Bitcoin's key insight for solving the Byzantine Generals Problem?", 'Qual foi a principal intuição do Bitcoin para resolver o Problema dos Generais Bizantinos?')}
            options={[
              { text: m('Appointing a trusted coordinator node to validate all messages', 'Nomear um nó coordenador de confiança para validar todas as mensagens'), correct: false },
              { text: m("Encrypting all communications between nodes so traitors can't intercept them", 'Encriptar todas as comunicações entre nós para que os traidores não as possam intercetar'), correct: false },
              { text: m('Making dishonest behaviour economically irrational through Proof of Work', 'Tornar o comportamento desonesto economicamente irracional através da Prova de Trabalho'), correct: true },
              { text: m('Requiring every node to know the identity of every other node', 'Exigir que cada nó conheça a identidade de todos os outros nós'), correct: false }
            ]}
            explanation={m("Bitcoin doesn't try to eliminate dishonest participants — it makes cheating unprofitable. Proof of Work forces attackers to expend real energy and hardware. The cost of a successful attack always exceeds the potential gain, so rational actors stay honest.", 'O Bitcoin não tenta eliminar os participantes desonestos — torna a fraude não lucrativa. A Prova de Trabalho obriga os atacantes a gastar energia e hardware reais. O custo de um ataque bem-sucedido excede sempre o ganho potencial, pelo que os atores racionais permanecem honestos.')}
          />
        </div>

        {/* Quiz: Node types */}
        <div className="h-full">
          <QuizSlide
            question={m('Which node type performs full validation of the entire blockchain history but then discards old block data to save disk space?', 'Que tipo de nó realiza a validação completa de todo o histórico da blockchain mas depois descarta dados antigos de blocos para poupar espaço em disco?')}
            options={[
              { text: m('SPV / Light Node', 'Nó Leve / SPV'), correct: false },
              { text: m('Mining Node', 'Nó de Mineração'), correct: false },
              { text: m('Full Node', 'Nó Completo'), correct: false },
              { text: m('Pruned Node', 'Nó Podado'), correct: true }
            ]}
            explanation={m("A pruned node downloads and validates every block from genesis — enforcing all consensus rules — then deletes raw block data older than a configurable threshold. Unlike an SPV node, it doesn't trust others for validation; unlike a full node, it doesn't keep the entire history on disk.", 'Um nó podado descarrega e valida todos os blocos desde o génese — aplicando todas as regras de consenso — e depois apaga os dados brutos dos blocos mais antigos do que um limiar configurável. Ao contrário de um nó SPV, não confia em outros para a validação; ao contrário de um nó completo, não mantém todo o histórico em disco.')}
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s2-takeaways" className="h-full">
          <TakeawaySlide
            title={m('Section 2 — Key Takeaways', 'Secção 2 — Principais Conclusões')}
            takeaways={[
              m('Bitcoin is a decentralized, permissionless digital currency with a fixed supply of 21 million coins', 'O Bitcoin é uma moeda digital descentralizada e sem permissões, com uma oferta fixa de 21 milhões de moedas'),
              m('Immutability comes from cryptographic block linking — altering any block cascades through the entire chain', 'A imutabilidade resulta da ligação criptográfica entre blocos — alterar qualquer bloco propaga-se por toda a cadeia'),
              m('The halving mechanism creates predictable, decreasing issuance — making Bitcoin deflationary', 'O mecanismo de halving cria uma emissão previsível e decrescente — tornando o Bitcoin deflacionário'),
              m("The network's security comes from massive hash power, global node distribution, and economic incentives", 'A segurança da rede provém do enorme poder de hash, da distribuição global de nós e dos incentivos económicos'),
              m("A 51% attack is theoretically possible but economically irrational at Bitcoin's scale", 'Um ataque dos 51% é teoricamente possível mas economicamente irracional à escala do Bitcoin'),
              m('Bitcoin has maintained 99.99% uptime since its launch in 2009 — the most reliable financial network ever created', 'O Bitcoin manteve 99,99% de disponibilidade desde o seu lançamento em 2009 — a rede financeira mais fiável alguma vez criada')
            ]}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
