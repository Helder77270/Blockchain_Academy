import { useState, useEffect, useCallback } from 'react';
import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { ComparisonSlide } from '../components/templates/ComparisonSlide';
import { DiagramSlide } from '../components/templates/DiagramSlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { DiscussionSlide } from '../components/templates/DiscussionSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { CalloutBox } from '../components/shared/CalloutBox';
import { BlockchainChain } from '../components/blockchain/BlockchainChain';
import { BlockchainBlock } from '../components/blockchain/BlockchainBlock';
import { ConsensusVisualization } from '../components/blockchain/ConsensusVisualization';
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip';
import { Blocks, PenTool } from 'lucide-react';
import { SectionNav } from '../components/navigation/SectionNav';
import { useM, useLanguage } from '../i18n';

const section1ChaptersEn = [
  { id: 's1-vocab', label: 'Vocabulary Wall' },
  { id: 's1-dlt', label: 'DLT Models' },
  { id: 's1-trust', label: 'Trusted Third Parties' },
  { id: 's1-blockchain-types', label: 'Blockchain Types' },
  { id: 's1-hashing', label: 'Cryptographic Hashing' },
  { id: 's1-merkle', label: 'Merkle Trees' },
  { id: 's1-blocks', label: 'Blocks & Composition' },
  { id: 's1-wallets', label: 'Wallets & Signatures' },
  { id: 's1-tx', label: 'Transaction Lifecycle' },
  { id: 's1-consensus', label: 'Consensus Mechanisms' },
  { id: 's1-chain-builder', label: 'Chain Builder' },
  { id: 's1-quiz', label: 'Quizzes' },
  { id: 's1-takeaways', label: 'Takeaways' },
];

const section1ChaptersPt = [
  { id: 's1-vocab', label: 'Muro de Vocabulário' },
  { id: 's1-dlt', label: 'Modelos DLT' },
  { id: 's1-trust', label: 'Terceiros de Confiança' },
  { id: 's1-blockchain-types', label: 'Tipos de Blockchain' },
  { id: 's1-hashing', label: 'Hashing Criptográfico' },
  { id: 's1-merkle', label: 'Árvores de Merkle' },
  { id: 's1-blocks', label: 'Blocos e Composição' },
  { id: 's1-wallets', label: 'Carteiras e Assinaturas' },
  { id: 's1-tx', label: 'Ciclo de Vida de Transação' },
  { id: 's1-consensus', label: 'Mecanismos de Consenso' },
  { id: 's1-chain-builder', label: 'Construtor de Cadeia' },
  { id: 's1-quiz', label: 'Questionários' },
  { id: 's1-takeaways', label: 'Conclusões' },
];

/* ── Brick Wall data ─────────────────────────────────── */
const brickDefinitionsEn: Record<string, string> = {
  "Block": "A container of validated transactions that is cryptographically linked to the previous block.",
  "Peer-to-Peer": "A network where participants communicate directly without a central server.",
  "Mempool": "A waiting area where unconfirmed transactions sit before being included in a block.",
  "Transaction": "A signed instruction to transfer value or data on the blockchain.",
  "Merkle Tree": "A tree-shaped data structure that efficiently summarizes and verifies large sets of transactions.",
  "Propagation": "The process by which transactions and blocks spread across the network from node to node.",
  "Tippers": "Users who attach extra fees to incentivize miners/validators to prioritize their transactions.",
  "Wallet": "Software that stores your private keys and lets you sign and send transactions.",
  "Consensus": "The mechanism by which all nodes agree on the current state of the blockchain.",
  "Hashing": "A one-way function that converts any input into a fixed-size fingerprint, used to ensure data integrity.",
  "Crypto": "Short for cryptography — the mathematical foundation that secures blockchain networks.",
  "Smart Contracts": "Self-executing programs stored on the blockchain that run automatically when conditions are met.",
  "Dapp": "A decentralized application that runs on a blockchain instead of a central server.",
  "RPC": "Remote Procedure Call — an interface that lets applications communicate with a blockchain node.",
  "ICO": "Initial Coin Offering — a fundraising method where new tokens are sold to early investors.",
  "NFT": "Non-Fungible Token — a unique digital asset representing ownership of a specific item on-chain.",
  "Stablecoin": "A cryptocurrency pegged to a stable asset like the US dollar to minimize price volatility.",
  "ERC": "Ethereum Request for Comments — a set of standards for tokens and smart contracts on Ethereum.",
  "Node": "A computer that participates in the blockchain network by storing a copy of the ledger and validating transactions.",
  "Mining": "The process of using computational power to solve cryptographic puzzles, validate transactions, and earn block rewards.",
  "Private Key": "A secret number that proves ownership of a blockchain address and authorizes outgoing transactions. Never share it.",
  "Public Key": "A cryptographic key derived from your private key, used to generate addresses and verify your digital signatures.",
  "Address": "A shortened, shareable identifier derived from your public key — like an account number for receiving funds.",
  "Nonce": "A number miners increment to find a hash below the target difficulty — the core mechanic of Proof of Work.",
  "Gas": "A unit measuring computational effort on Ethereum. Every operation costs gas, paid in ETH to compensate validators.",
  "Fork": "A change to blockchain protocol rules. Soft forks are backward-compatible; hard forks create a permanent chain split.",
  "Halving": "A scheduled event that cuts the Bitcoin block reward in half every ~4 years, reducing the rate of new supply.",
  "UTXO": "Unspent Transaction Output — the basic unit of Bitcoin's accounting model, like physical cash you haven't spent yet.",
  "Validator": "A node in Proof of Stake that locks up collateral (stake) to propose and attest new blocks, earning rewards.",
  "Layer 2": "A protocol built on top of a base blockchain to increase throughput and reduce costs — e.g. Lightning, Rollups.",
  "Oracle": "A service that feeds real-world data (prices, sports scores, weather) into smart contracts on the blockchain.",
  "DAO": "Decentralized Autonomous Organization — a community governed by smart contracts and token votes, with no CEO.",
  "DeFi": "Decentralized Finance — lending, trading, and yield services run by smart contracts with no banks or intermediaries.",
  "Seed Phrase": "A human-readable backup of your private key — typically 12 or 24 words. Whoever holds it controls your funds.",
  "Block Explorer": "A public website that lets anyone search and verify transactions, addresses, and blocks on a blockchain.",
  "Multisig": "Multi-signature — a wallet requiring M-of-N signatures to authorize a transaction, used for security and shared custody.",
};

const brickDefinitionsPt: Record<string, string> = {
  "Block": "Um contentor de transações validadas que está criptograficamente ligado ao bloco anterior.",
  "Peer-to-Peer": "Uma rede onde os participantes comunicam diretamente sem um servidor central.",
  "Mempool": "Uma zona de espera onde as transações por confirmar ficam antes de serem incluídas num bloco.",
  "Transaction": "Uma instrução assinada para transferir valor ou dados na blockchain.",
  "Merkle Tree": "Uma estrutura de dados em forma de árvore que sumariza e verifica eficientemente grandes conjuntos de transações.",
  "Propagation": "O processo pelo qual transações e blocos se propagam pela rede de nó em nó.",
  "Tippers": "Utilizadores que adicionam taxas extra para incentivar mineradores/validadores a priorizar as suas transações.",
  "Wallet": "Software que guarda as suas chaves privadas e lhe permite assinar e enviar transações.",
  "Consensus": "O mecanismo pelo qual todos os nós concordam sobre o estado atual da blockchain.",
  "Hashing": "Uma função unidirecional que converte qualquer entrada numa impressão digital de tamanho fixo, usada para garantir a integridade dos dados.",
  "Crypto": "Abreviatura de criptografia — a base matemática que protege as redes blockchain.",
  "Smart Contracts": "Programas auto-executáveis guardados na blockchain que correm automaticamente quando as condições são cumpridas.",
  "Dapp": "Uma aplicação descentralizada que corre numa blockchain em vez de um servidor central.",
  "RPC": "Remote Procedure Call — uma interface que permite a aplicações comunicarem com um nó da blockchain.",
  "ICO": "Initial Coin Offering — um método de financiamento em que novos tokens são vendidos a investidores iniciais.",
  "NFT": "Non-Fungible Token — um ativo digital único que representa a propriedade de um item específico on-chain.",
  "Stablecoin": "Uma criptomoeda indexada a um ativo estável como o dólar americano para minimizar a volatilidade do preço.",
  "ERC": "Ethereum Request for Comments — um conjunto de normas para tokens e smart contracts em Ethereum.",
  "Node": "Um computador que participa na rede blockchain ao guardar uma cópia do registo e validar transações.",
  "Mining": "O processo de usar poder computacional para resolver puzzles criptográficos, validar transações e ganhar recompensas de bloco.",
  "Private Key": "Um número secreto que prova a propriedade de um endereço blockchain e autoriza transações de saída. Nunca a partilhe.",
  "Public Key": "Uma chave criptográfica derivada da sua chave privada, usada para gerar endereços e verificar as suas assinaturas digitais.",
  "Address": "Um identificador encurtado e partilhável derivado da sua chave pública — como um número de conta para receber fundos.",
  "Nonce": "Um número que os mineradores incrementam para encontrar um hash abaixo do alvo de dificuldade — o mecanismo central da Prova de Trabalho.",
  "Gas": "Uma unidade que mede o esforço computacional em Ethereum. Cada operação custa gás, pago em ETH para compensar validadores.",
  "Fork": "Uma alteração às regras do protocolo blockchain. Soft forks são retrocompatíveis; hard forks criam uma divisão permanente da cadeia.",
  "Halving": "Um evento programado que reduz a recompensa do bloco do Bitcoin para metade a cada ~4 anos, diminuindo o ritmo de nova oferta.",
  "UTXO": "Unspent Transaction Output — a unidade básica do modelo contabilístico do Bitcoin, como dinheiro físico que ainda não gastou.",
  "Validator": "Um nó em Prova de Participação que bloqueia colateral (stake) para propor e atestar novos blocos, ganhando recompensas.",
  "Layer 2": "Um protocolo construído sobre uma blockchain base para aumentar o débito e reduzir custos — e.g. Lightning, Rollups.",
  "Oracle": "Um serviço que fornece dados do mundo real (preços, resultados desportivos, meteorologia) aos smart contracts na blockchain.",
  "DAO": "Decentralized Autonomous Organization — uma comunidade governada por smart contracts e votos em tokens, sem CEO.",
  "DeFi": "Finanças Descentralizadas — serviços de empréstimo, negociação e rendimento geridos por smart contracts sem bancos ou intermediários.",
  "Seed Phrase": "Uma cópia de segurança legível da sua chave privada — tipicamente 12 ou 24 palavras. Quem a tiver, controla os seus fundos.",
  "Block Explorer": "Um sítio público que permite a qualquer pessoa pesquisar e verificar transações, endereços e blocos numa blockchain.",
  "Multisig": "Multi-assinatura — uma carteira que requer M-de-N assinaturas para autorizar uma transação, usada por segurança e custódia partilhada.",
};

const brickWords = Object.keys(brickDefinitionsEn);

const brickColors = [
  "from-[#ED1C24]/25 border-[#ED1C24]/40",
  "from-[#39B54A]/25 border-[#39B54A]/40",
  "from-[#6366f1]/25 border-[#6366f1]/40",
  "from-[#f59e0b]/25 border-[#f59e0b]/40",
  "from-[#8b5cf6]/25 border-[#8b5cf6]/40",
];

function InteractiveHash() {
  const m = useM();
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (!input) {
      setHash('');
      return;
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    crypto.subtle.digest('SHA-256', data).then(buffer => {
      const hashArray = Array.from(new Uint8Array(buffer));
      setHash(hashArray.map(b => b.toString(16).padStart(2, '0')).join(''));
    });
  }, [input]);

  return (
    <div className="p-5 bg-card rounded-xl border-2 border-[#39B54A]">
      <div className="text-sm font-bold text-[#39B54A] mb-3">{m('🔬 Try it yourself', '🔬 Experimente')}</div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={m('Type anything here...', 'Escreva aqui qualquer coisa...')}
        className="w-full px-4 py-2 bg-muted rounded-lg border border-border text-foreground font-mono text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#39B54A]/50"
      />
      {hash ? (
        <>
          <div className="text-sm text-muted-foreground mb-1">{m('SHA-256 Hash:', 'Hash SHA-256:')}</div>
          <div className="font-mono text-xs text-[#39B54A] break-all">{hash}</div>
        </>
      ) : (
        <div className="text-sm text-muted-foreground italic">{m('Enter text above to see its SHA-256 hash in real time', 'Insira texto acima para ver o hash SHA-256 em tempo real')}</div>
      )}
    </div>
  );
}

/* ── SHA-256 helper ─────────────────────────────────── */
async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function short(hash: string) {
  return hash ? hash.slice(0, 10) + '…' : '—';
}

/* ── Interactive Merkle Tree ─────────────────────────── */
function InteractiveMerkleTree() {
  const m = useM();
  const [txs, setTxs] = useState(['', '', '', '']);
  const [leafHashes, setLeafHashes] = useState(['', '', '', '']);
  const [midHashes, setMidHashes] = useState(['', '']);
  const [root, setRoot] = useState('');

  const recompute = useCallback(async (values: string[]) => {
    const leaves = await Promise.all(
      values.map(v => (v ? sha256(v) : Promise.resolve('')))
    );
    setLeafHashes(leaves);

    const mid0 = leaves[0] && leaves[1] ? await sha256(leaves[0] + leaves[1]) : '';
    const mid1 = leaves[2] && leaves[3] ? await sha256(leaves[2] + leaves[3]) : '';
    setMidHashes([mid0, mid1]);

    const r = mid0 && mid1 ? await sha256(mid0 + mid1) : '';
    setRoot(r);
  }, []);

  useEffect(() => { recompute(txs); }, [txs, recompute]);

  const update = (i: number, v: string) => {
    const next = [...txs];
    next[i] = v;
    setTxs(next);
  };

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {/* Root */}
      <div className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${root ? 'bg-[#ED1C24]/20 border-[#ED1C24]' : 'bg-muted/20 border-border'}`}>
        <div className="text-xs text-muted-foreground">{m('Merkle Root', 'Raiz de Merkle')}</div>
        <div className={`font-mono text-sm ${root ? 'text-[#ED1C24]' : 'text-muted-foreground/50'}`}>
          {root ? short(root) : 'Hash(AB + CD)'}
        </div>
      </div>

      {/* Connectors root → mid */}
      <div className="flex gap-32">
        <div className="w-px h-6 bg-border" />
        <div className="w-px h-6 bg-border" />
      </div>

      {/* Level 1 */}
      <div className="flex gap-16">
        {midHashes.map((h, i) => (
          <div key={i} className={`px-5 py-2 rounded-lg border transition-all duration-300 ${h ? 'bg-[#39B54A]/20 border-[#39B54A]' : 'bg-muted/20 border-border'}`}>
            <div className="text-xs text-muted-foreground">Hash {i === 0 ? 'AB' : 'CD'}</div>
            <div className={`font-mono text-xs ${h ? 'text-[#39B54A]' : 'text-muted-foreground/50'}`}>
              {h ? short(h) : `Hash(${i === 0 ? 'A + B' : 'C + D'})`}
            </div>
          </div>
        ))}
      </div>

      {/* Connectors mid → leaves */}
      <div className="flex gap-12">
        <div className="flex gap-16">
          <div className="w-px h-6 bg-border" />
          <div className="w-px h-6 bg-border" />
        </div>
        <div className="flex gap-16">
          <div className="w-px h-6 bg-border" />
          <div className="w-px h-6 bg-border" />
        </div>
      </div>

      {/* Leaves */}
      <div className="flex gap-6">
        {leafHashes.map((h, i) => (
          <div key={i} className={`px-4 py-2 rounded-lg border transition-all duration-300 ${h ? 'bg-[#6366f1]/20 border-[#6366f1]' : 'bg-muted/20 border-border'}`}>
            <div className="text-xs text-muted-foreground">Tx {String.fromCharCode(65 + i)}</div>
            <div className={`font-mono text-xs ${h ? 'text-[#6366f1]' : 'text-muted-foreground/50'}`}>
              {h ? short(h) : `Hash(${String.fromCharCode(65 + i)})`}
            </div>
          </div>
        ))}
      </div>

      {/* Connectors leaves → inputs */}
      <div className="flex gap-[68px]">
        {[0, 1, 2, 3].map(i => <div key={i} className="w-px h-6 bg-border" />)}
      </div>

      {/* Input fields */}
      <div className="flex gap-6">
        {txs.map((v, i) => (
          <input
            key={i}
            type="text"
            value={v}
            onChange={e => update(i, e.target.value)}
            placeholder={m(`Tx ${String.fromCharCode(65 + i)} data...`, `Dados Tx ${String.fromCharCode(65 + i)}...`)}
            className="w-[120px] px-4 py-2 bg-card rounded-lg border-2 border-[#6366f1]/30 text-foreground font-mono text-xs text-center focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all placeholder:text-muted-foreground/40"
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-2 italic">
        {m('Type transaction data below — the entire tree recomputes in real time', 'Escreva dados de transação abaixo — toda a árvore recalcula em tempo real')}
      </p>
    </div>
  );
}

/* ── Prev Hash Chain Exercise ───────────────────────────── */
const CHAIN_BLOCKS_EN = [
  {
    number: 0,
    label: 'Genesis Block',
    data: 'Chancellor on brink...',
    hash: '0x000000',
    prevHash: '—',
    prevHashRevealed: true,
  },
  {
    number: 1,
    label: '50 BTC → Alice',
    data: 'Alice receives 50 BTC',
    hash: '0x1a2b3c',
    prevHash: '0x000000',
    prevHashRevealed: false,
  },
  {
    number: 2,
    label: '25 BTC → Bob',
    data: 'Bob receives 25 BTC',
    hash: '0x4d5e6f',
    prevHash: '0x1a2b3c',
    prevHashRevealed: false,
  },
];

const CHAIN_BLOCKS_PT = [
  {
    number: 0,
    label: 'Bloco Génese',
    data: 'Chancellor on brink...',
    hash: '0x000000',
    prevHash: '—',
    prevHashRevealed: true,
  },
  {
    number: 1,
    label: '50 BTC → Alice',
    data: 'Alice recebe 50 BTC',
    hash: '0x1a2b3c',
    prevHash: '0x000000',
    prevHashRevealed: false,
  },
  {
    number: 2,
    label: '25 BTC → Bob',
    data: 'Bob recebe 25 BTC',
    hash: '0x4d5e6f',
    prevHash: '0x1a2b3c',
    prevHashRevealed: false,
  },
];

const PREV_HASH_OPTIONS_EN: Record<number, { value: string; label: string }[]> = {
  1: [
    { value: '0x000000', label: '0x000000  (Block #0 hash)' },
    { value: '0x1a2b3c', label: '0x1a2b3c  (Block #1 hash)' },
    { value: '0x4d5e6f', label: '0x4d5e6f  (Block #2 hash)' },
    { value: '0x9f3c21', label: '0x9f3c21  (random)' },
  ],
  2: [
    { value: '0x000000', label: '0x000000  (Block #0 hash)' },
    { value: '0x1a2b3c', label: '0x1a2b3c  (Block #1 hash)' },
    { value: '0x4d5e6f', label: '0x4d5e6f  (Block #2 hash)' },
    { value: '0x9f3c21', label: '0x9f3c21  (random)' },
  ],
};

const PREV_HASH_OPTIONS_PT: Record<number, { value: string; label: string }[]> = {
  1: [
    { value: '0x000000', label: '0x000000  (hash do Bloco #0)' },
    { value: '0x1a2b3c', label: '0x1a2b3c  (hash do Bloco #1)' },
    { value: '0x4d5e6f', label: '0x4d5e6f  (hash do Bloco #2)' },
    { value: '0x9f3c21', label: '0x9f3c21  (aleatório)' },
  ],
  2: [
    { value: '0x000000', label: '0x000000  (hash do Bloco #0)' },
    { value: '0x1a2b3c', label: '0x1a2b3c  (hash do Bloco #1)' },
    { value: '0x4d5e6f', label: '0x4d5e6f  (hash do Bloco #2)' },
    { value: '0x9f3c21', label: '0x9f3c21  (aleatório)' },
  ],
};

function PrevHashExercise() {
  const m = useM();
  const { lang } = useLanguage();
  const CHAIN_BLOCKS = lang === 'pt' ? CHAIN_BLOCKS_PT : CHAIN_BLOCKS_EN;
  const PREV_HASH_OPTIONS = lang === 'pt' ? PREV_HASH_OPTIONS_PT : PREV_HASH_OPTIONS_EN;

  const [answers, setAnswers]   = useState<Record<number, string>>({ 1: '', 2: '' });
  const [checked, setChecked]   = useState(false);

  const allAnswered = answers[1] !== '' && answers[2] !== '';
  const isCorrect   = (n: number) => answers[n] === CHAIN_BLOCKS[n].prevHash;
  const score       = checked ? [1, 2].filter(n => isCorrect(n)).length : 0;

  const reset = () => { setAnswers({ 1: '', 2: '' }); setChecked(false); };

  const blockBorder = (n: number) => {
    if (!checked) return 'border-border';
    return isCorrect(n) ? 'border-[#10b981]' : 'border-[#ef4444]';
  };

  const chainLinkColor = (fromBlock: number) => {
    if (!checked) return '#6b7280';
    return isCorrect(fromBlock + 1) ? '#10b981' : '#ef4444';
  };

  return (
    <div className="max-w-5xl w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="size-14 rounded-full bg-[#ED1C24]/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔗</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{m('Chain the Blocks', 'Encadeie os Blocos')}</h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          {m('Each block must reference the ', 'Cada bloco deve referenciar o ')}
          <span className="text-[#ED1C24] font-semibold">{m('exact hash of the previous block', 'hash exato do bloco anterior')}</span>.
          {m(' Select the correct ', ' Selecione o ')}<span className="text-[#ED1C24] font-semibold">{m('Prev Hash', 'Hash Ant.')}</span>{m(' for Blocks #1 and #2.', ' correto para os Blocos #1 e #2.')}
        </p>
      </div>

      {/* Chain */}
      <div className="flex items-center gap-0">
        {CHAIN_BLOCKS.map((block, i) => (
          <div key={block.number} className="flex items-center flex-1">

            {/* Block card */}
            <div className={`flex-1 rounded-xl border-2 bg-card transition-colors overflow-hidden ${blockBorder(block.number)}`}>

              {/* Block header */}
              <div className="px-4 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-muted-foreground">{m('BLOCK', 'BLOCO')} #{block.number}</span>
                {checked && !block.prevHashRevealed && (
                  <span className="text-sm">{isCorrect(block.number) ? '✓' : '✗'}</span>
                )}
              </div>

              <div className="p-4 space-y-2.5 text-xs">
                {/* Data */}
                <div>
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{m('Data', 'Dados')}</span>
                  <div className="font-mono text-foreground mt-0.5 truncate">{block.label}</div>
                </div>

                {/* Hash */}
                <div>
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">Hash</span>
                  <div className="font-mono text-[#39B54A] mt-0.5">{block.hash}</div>
                </div>

                {/* Prev Hash — revealed or selector */}
                <div>
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{m('Prev Hash', 'Hash Ant.')}</span>
                  {block.prevHashRevealed ? (
                    <div className="font-mono text-[#6366f1] mt-0.5">{block.prevHash}</div>
                  ) : (
                    <select
                      disabled={checked}
                      value={answers[block.number]}
                      onChange={e => setAnswers(prev => ({ ...prev, [block.number]: e.target.value }))}
                      className={`mt-1 w-full font-mono text-xs rounded-lg px-2 py-1.5 border bg-background text-foreground
                        focus:outline-none focus:ring-1 focus:ring-[#ED1C24] cursor-pointer transition-colors
                        ${checked
                          ? isCorrect(block.number)
                            ? 'border-[#10b981] text-[#10b981]'
                            : 'border-[#ef4444] text-[#ef4444]'
                          : answers[block.number]
                            ? 'border-[#6366f1]'
                            : 'border-border'
                        }`}
                    >
                      <option value="" disabled>{m('— pick prev hash —', '— escolha o hash ant. —')}</option>
                      {PREV_HASH_OPTIONS[block.number].map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Feedback */}
                {checked && !block.prevHashRevealed && (
                  <div className={`text-[10px] rounded-lg px-2 py-1.5 ${
                    isCorrect(block.number)
                      ? 'bg-[#10b981]/10 text-[#10b981]'
                      : 'bg-[#ef4444]/10 text-[#ef4444]'
                  }`}>
                    {isCorrect(block.number)
                      ? (lang === 'pt'
                          ? `✓ Correto — corresponde ao hash do Bloco #${block.number - 1}`
                          : `✓ Correct — matches Block #${block.number - 1}'s hash`)
                      : (lang === 'pt'
                          ? `✗ Errado — devia ser ${block.prevHash} (hash do Bloco #${block.number - 1})`
                          : `✗ Wrong — should be ${block.prevHash} (Block #${block.number - 1}'s hash)`)
                    }
                  </div>
                )}
              </div>
            </div>

            {/* Arrow between blocks */}
            {i < CHAIN_BLOCKS.length - 1 && (
              <div className="flex flex-col items-center mx-1 shrink-0">
                <svg width="32" height="20" viewBox="0 0 32 20">
                  <line x1="0" y1="10" x2="24" y2="10" stroke={chainLinkColor(i)} strokeWidth="2" />
                  <polygon points="24,5 32,10 24,15" fill={chainLinkColor(i)} />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {!checked && (
          <button
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              allAnswered
                ? 'bg-[#39B54A] text-white hover:opacity-90 shadow-lg shadow-[#39B54A]/30'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            {m('Check answers ✓', 'Verificar respostas ✓')}
          </button>
        )}
        {checked && (
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div
                className="text-3xl font-black"
                style={{ color: score === 2 ? '#10b981' : '#ef4444' }}
              >
                {score}/2
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {score === 2 ? m('Perfect chain!', 'Cadeia perfeita!') : m('Review the hashes above', 'Reveja os hashes acima')}
              </div>
            </div>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
            >
              {m('Try again', 'Tentar novamente')}
            </button>
          </div>
        )}
      </div>

      {/* Key insight */}
      {checked && (
        <div className="mt-6 p-4 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/30 text-sm text-center text-muted-foreground max-w-xl mx-auto">
          💡 <span className="font-semibold text-[#6366f1]">{m('The key insight:', 'A ideia-chave:')}</span> {m("if you change anything in Block #1, its hash changes — and Block #2's Prev Hash would no longer match, breaking the chain instantly.", "se alterar qualquer coisa no Bloco #1, o hash muda — e o Hash Ant. do Bloco #2 deixa de corresponder, quebrando a cadeia imediatamente.")}
        </div>
      )}
    </div>
  );
}

/* ── Blockchain Trilemma Interactive Exercise ────────────── */
const TRILEMMA_MECHANISMS_EN = [
  { name: 'PoW',  color: '#ED1C24', desc: 'Proof of Work' },
  { name: 'PoS',  color: '#6366f1', desc: 'Proof of Stake' },
  { name: 'DPoS', color: '#f59e0b', desc: 'Delegated PoS / BFT' },
];

const TRILEMMA_MECHANISMS_PT = [
  { name: 'PoW',  color: '#ED1C24', desc: 'Prova de Trabalho' },
  { name: 'PoS',  color: '#6366f1', desc: 'Prova de Participação' },
  { name: 'DPoS', color: '#f59e0b', desc: 'Prova de Participação Delegada / BFT' },
];

const TRILEMMA_POSITIONS_EN = [
  { id: 'A', cx: 75,  cy: 120, correct: 'PoW',  hint: 'Security + Decentralization edge' },
  { id: 'B', cx: 150, cy: 160, correct: 'PoS',  hint: 'Balanced center' },
  { id: 'C', cx: 220, cy: 225, correct: 'DPoS', hint: 'Near Scalability vertex' },
];

const TRILEMMA_POSITIONS_PT = [
  { id: 'A', cx: 75,  cy: 120, correct: 'PoW',  hint: 'Aresta Segurança + Descentralização' },
  { id: 'B', cx: 150, cy: 160, correct: 'PoS',  hint: 'Centro equilibrado' },
  { id: 'C', cx: 220, cy: 225, correct: 'DPoS', hint: 'Perto do vértice Escalabilidade' },
];

function TrilemmaExercise() {
  const m = useM();
  const { lang } = useLanguage();
  const TRILEMMA_MECHANISMS = lang === 'pt' ? TRILEMMA_MECHANISMS_PT : TRILEMMA_MECHANISMS_EN;
  const TRILEMMA_POSITIONS = lang === 'pt' ? TRILEMMA_POSITIONS_PT : TRILEMMA_POSITIONS_EN;

  const [selected, setSelected]   = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [checked, setChecked]     = useState(false);

  const placedMechs = Object.values(placements);
  const allPlaced   = TRILEMMA_MECHANISMS.every(m => placedMechs.includes(m.name));
  const score       = checked ? TRILEMMA_POSITIONS.filter(p => placements[p.id] === p.correct).length : 0;

  const mechColor = (name: string) =>
    TRILEMMA_MECHANISMS.find(m => m.name === name)?.color ?? '#9ca3af';

  const handlePosition = (posId: string) => {
    if (checked || !selected) return;
    setPlacements(prev => {
      const next = { ...prev };
      for (const k of Object.keys(next)) if (next[k] === selected) delete next[k];
      next[posId] = selected;
      return next;
    });
    setSelected(null);
  };

  const handleMech = (name: string) => {
    if (checked) return;
    setSelected(prev => prev === name ? null : name);
  };

  const reset = () => { setPlacements({}); setSelected(null); setChecked(false); };

  const resultColor = score === 3 ? '#10b981' : score >= 1 ? '#f59e0b' : '#ef4444';
  const resultMsg   = score === 3 ? m('Perfect!', 'Perfeito!') : score === 2 ? m('Almost there!', 'Quase lá!') : score === 1 ? m('Keep studying!', 'Continue a estudar!') : m('Review the slides!', 'Reveja os slides!');

  return (
    <div className="max-w-4xl w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="size-14 rounded-full bg-[#f59e0b]/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚖️</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{m('The Blockchain Trilemma', 'O Trilema da Blockchain')}</h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          {m('No consensus mechanism achieves all three properties at once.', 'Nenhum mecanismo de consenso atinge as três propriedades ao mesmo tempo.')}{' '}
          <span className="text-[#f59e0b] font-semibold">{m('Select a mechanism on the right', 'Selecione um mecanismo à direita')}</span>{m(', then', ', depois')}{' '}
          <span className="text-[#f59e0b] font-semibold">{m('click its position on the triangle', 'clique na posição no triângulo')}</span>.
        </p>
      </div>

      <div className="flex gap-8 items-center">

        {/* Triangle SVG */}
        <div className="flex-1">
          <svg viewBox="-20 0 340 295" className="w-full max-w-sm mx-auto overflow-visible">
            {/* Triangle outline */}
            <polygon points="150,30 20,250 280,250" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />

            {/* Vertex dots */}
            <circle cx="150" cy="30"  r="10" fill="#ED1C24" />
            <circle cx="20"  cy="250" r="10" fill="#39B54A" />
            <circle cx="280" cy="250" r="10" fill="#6366f1" />

            {/* Vertex labels */}
            <text x="150" y="12"  textAnchor="middle" fill="#ED1C24" style={{ fontSize: '13px', fontWeight: 700 }}>{m('Security', 'Segurança')}</text>
            <text x="20"  y="276" textAnchor="middle" fill="#39B54A" style={{ fontSize: '13px', fontWeight: 700 }}>{m('Decentralization', 'Descentralização')}</text>
            <text x="280" y="276" textAnchor="middle" fill="#6366f1" style={{ fontSize: '13px', fontWeight: 700 }}>{m('Scalability', 'Escalabilidade')}</text>

            {/* Drop zones */}
            {TRILEMMA_POSITIONS.map(pos => {
              const mech     = placements[pos.id];
              const color    = mech ? mechColor(mech) : 'transparent';
              const isRight  = checked && mech ? mech === pos.correct : null;
              const ringColor = isRight === null
                ? (selected ? '#f59e0b' : '#6b7280')
                : isRight ? '#10b981' : '#ef4444';

              return (
                <g
                  key={pos.id}
                  onClick={() => handlePosition(pos.id)}
                  style={{ cursor: selected && !checked ? 'pointer' : 'default' }}
                >
                  {selected && !checked && (
                    <circle cx={pos.cx} cy={pos.cy} r="24" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.4" strokeDasharray="4 3" />
                  )}
                  <circle
                    cx={pos.cx} cy={pos.cy} r="20"
                    fill={mech ? color + 'CC' : 'rgba(255,255,255,0.04)'}
                    stroke={ringColor}
                    strokeWidth="2"
                    strokeDasharray={mech ? 'none' : '4 3'}
                  />
                  {mech
                    ? <text x={pos.cx} y={pos.cy + 4} textAnchor="middle" fill="white" style={{ fontSize: '9px', fontWeight: 800 }}>{mech}</text>
                    : <text x={pos.cx} y={pos.cy + 4} textAnchor="middle" fill="#6b7280" style={{ fontSize: '13px' }}>?</text>
                  }
                  {checked && isRight !== null && (
                    <text x={pos.cx} y={pos.cy + 36} textAnchor="middle" style={{ fontSize: '14px' }}>
                      {isRight ? '✓' : '✗'}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Side panel */}
        <div className="w-44 flex flex-col gap-3">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-1">
            {checked ? m('Results', 'Resultados') : m('Pick & place →', 'Escolha e coloque →')}
          </p>

          {TRILEMMA_MECHANISMS.map(mech => {
            const isPlaced   = placedMechs.includes(mech.name);
            const isSelected = selected === mech.name;
            const posId      = Object.entries(placements).find(([, v]) => v === mech.name)?.[0];
            const isRight    = checked && posId ? placements[posId] === TRILEMMA_POSITIONS.find(p => p.id === posId)?.correct : null;

            return (
              <button
                key={mech.name}
                onClick={() => handleMech(mech.name)}
                disabled={checked}
                className={`px-3 py-3 rounded-xl border-2 text-sm font-bold text-left transition-all ${
                  isSelected ? 'scale-105 shadow-lg' : isPlaced ? 'opacity-60' : ''
                } ${checked ? 'cursor-default' : 'cursor-pointer'}`}
                style={{
                  borderColor: isSelected ? mech.color : mech.color + (isPlaced ? '60' : '80'),
                  background:  isSelected ? mech.color + '30' : mech.color + '12',
                  color: mech.color,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{mech.name}</span>
                  {checked && isRight !== null && (
                    <span style={{ color: isRight ? '#10b981' : '#ef4444' }}>{isRight ? '✓' : '✗'}</span>
                  )}
                  {!checked && isPlaced && <span className="text-xs opacity-50">●</span>}
                </div>
                <div className="text-xs font-normal opacity-60 mt-0.5">{mech.desc}</div>
              </button>
            );
          })}

          {!checked && allPlaced && (
            <button
              onClick={() => setChecked(true)}
              className="mt-1 py-2 rounded-xl bg-[#39B54A] text-white text-sm font-bold hover:opacity-90 transition-all"
            >
              {m('Check ✓', 'Verificar ✓')}
            </button>
          )}

          {checked && (
            <div className="mt-1 p-3 rounded-xl border border-border text-center">
              <div className="text-3xl font-black" style={{ color: resultColor }}>{score}/3</div>
              <div className="text-xs text-muted-foreground mt-1">{resultMsg}</div>
              <button
                onClick={reset}
                className="mt-2 px-3 py-1 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground transition-all"
              >
                {m('Try again', 'Tentar novamente')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom legend — always visible */}
      <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
        {TRILEMMA_POSITIONS.map(pos => (
          <div
            key={pos.id}
            className="p-4 bg-card rounded-xl border transition-colors"
            style={{ borderColor: checked ? (placements[pos.id] === pos.correct ? '#10b981' : '#ef4444') + '60' : undefined }}
          >
            <div className="font-bold mb-1" style={{ color: mechColor(pos.correct) }}>{pos.correct}</div>
            <p className="text-muted-foreground text-xs">
              {pos.correct === 'PoW'  && m('High security + decentralization — sacrifices scalability & energy efficiency', 'Alta segurança + descentralização — sacrifica a escalabilidade e a eficiência energética')}
              {pos.correct === 'PoS'  && m('Balanced — good security, moderate decentralization & scalability', 'Equilibrado — boa segurança, descentralização e escalabilidade moderadas')}
              {pos.correct === 'DPoS' && m('Maximum scalability & speed — sacrifices decentralization', 'Escalabilidade e velocidade máximas — sacrifica a descentralização')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Chain Builder Exercise ──────────────────────────────── */

const BUILDER_BLOCKS_EN = [
  {
    id: 'b0',
    data: 'The Times 03/Jan/2009 — Genesis',
    hash:     '0x0000ab',
    prevHash: '0x000000 (start of chain)',
  },
  {
    id: 'b1',
    data: 'Alice → Bob: 10 BTC',
    hash:     '0x1a2b3c',
    prevHash: '0x0000ab',
  },
  {
    id: 'b2',
    data: 'Bob → Carol: 5 BTC',
    hash:     '0x4d5e6f',
    prevHash: '0x1a2b3c',
  },
  {
    id: 'b3',
    data: 'Carol → Dave: 3 BTC',
    hash:     '0x7c8d9e',
    prevHash: '0x4d5e6f',
  },
] as const;

const BUILDER_BLOCKS_PT = [
  {
    id: 'b0',
    data: 'The Times 03/Jan/2009 — Génese',
    hash:     '0x0000ab',
    prevHash: '0x000000 (início da cadeia)',
  },
  {
    id: 'b1',
    data: 'Alice → Bob: 10 BTC',
    hash:     '0x1a2b3c',
    prevHash: '0x0000ab',
  },
  {
    id: 'b2',
    data: 'Bob → Carol: 5 BTC',
    hash:     '0x4d5e6f',
    prevHash: '0x1a2b3c',
  },
  {
    id: 'b3',
    data: 'Carol → Dave: 3 BTC',
    hash:     '0x7c8d9e',
    prevHash: '0x4d5e6f',
  },
] as const;

type BuilderBlockId = typeof BUILDER_BLOCKS_EN[number]['id'];

// The scrambled order students see — block numbers are hidden so they must use hash clues
const SCRAMBLED_IDS: BuilderBlockId[] = ['b2', 'b0', 'b3', 'b1'];

function BuilderBlockCard({ block }: { block: { id: string; data: string; hash: string; prevHash: string } }) {
  const m = useM();
  return (
    <div className="p-3 space-y-2.5 text-xs">
      <div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">{m('Data', 'Dados')}</div>
        <div className="font-mono text-foreground truncate">{block.data}</div>
      </div>
      <div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">{m('Prev Hash', 'Hash Ant.')}</div>
        <div className="font-mono text-[#6366f1]">{block.prevHash}</div>
      </div>
      <div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Hash</div>
        <div className="font-mono text-[#39B54A]">{block.hash}</div>
      </div>
    </div>
  );
}

function ChainBuilderExercise() {
  const m = useM();
  const { lang } = useLanguage();
  const BUILDER_BLOCKS = lang === 'pt' ? BUILDER_BLOCKS_PT : BUILDER_BLOCKS_EN;

  const [placements, setPlacements] = useState<Partial<Record<number, BuilderBlockId>>>({});
  const [selected, setSelected]     = useState<BuilderBlockId | null>(null);
  const [checked, setChecked]       = useState(false);
  const [showHint, setShowHint]     = useState(false);

  const placedIds = Object.values(placements) as BuilderBlockId[];
  const pool      = SCRAMBLED_IDS.filter(id => !placedIds.includes(id));
  const allFilled = placedIds.length === BUILDER_BLOCKS.length;

  const getBlock = (id: BuilderBlockId) => BUILDER_BLOCKS.find(b => b.id === id)!;

  const isSlotCorrect = (i: number) => placements[i] === `b${i}`;

  const isLinkValid = (i: number) => {
    const from = placements[i];
    const to   = placements[i + 1];
    if (!from || !to) return false;
    return getBlock(to).prevHash === getBlock(from).hash;
  };

  const score = checked ? [0, 1, 2, 3].filter(i => isSlotCorrect(i)).length : 0;

  const handlePoolClick = (id: BuilderBlockId) => {
    if (checked) return;
    setSelected(prev => (prev === id ? null : id));
  };

  const handleSlotClick = (slotIndex: number) => {
    if (checked) return;
    if (selected) {
      setPlacements(prev => {
        const next = { ...prev };
        for (const k in next) { if (next[+k] === selected) delete next[+k]; }
        next[slotIndex] = selected;
        return next;
      });
      setSelected(null);
    } else {
      const blockId = placements[slotIndex];
      if (blockId) {
        setPlacements(prev => { const next = { ...prev }; delete next[slotIndex]; return next; });
        setSelected(blockId);
      }
    }
  };

  const reset = () => { setPlacements({}); setSelected(null); setChecked(false); setShowHint(false); };

  const resultColor = score === 4 ? '#10b981' : score >= 2 ? '#f59e0b' : '#ef4444';
  const resultMsg   = score === 4
    ? m('Perfect — chain reconstructed!', 'Perfeito — cadeia reconstruída!')
    : score >= 2
    ? m('Almost! One or more blocks are out of place.', 'Quase! Um ou mais blocos estão fora do lugar.')
    : m('Review how Prev Hash links blocks together.', 'Reveja como o Hash Ant. liga os blocos entre si.');

  return (
    <div className="max-w-5xl w-full">

      {/* Header */}
      <div className="text-center mb-6">
        <div className="size-14 rounded-full bg-[#6366f1]/20 flex items-center justify-center mx-auto mb-3 text-2xl">🔗</div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{m('Reconstruct the Chain', 'Reconstrua a Cadeia')}</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {m('These 4 blocks are ', 'Estes 4 blocos estão ')}<span className="text-[#ED1C24] font-semibold">{m('scrambled', 'baralhados')}</span>.
          {m(' Use the ', ' Use os campos ')}<span className="font-mono text-[#6366f1] font-semibold">{m('Prev Hash', 'Hash Ant.')}</span>{m(' and ', ' e ')}{' '}
          <span className="font-mono text-[#39B54A] font-semibold">Hash</span> {m('fields to figure out the correct order.', 'para descobrir a ordem correta.')}
          <br /><span className="text-muted-foreground/60 text-xs">{m('Click a block to select it, then click a slot to place it.', 'Clique num bloco para o selecionar, depois clique num espaço para o colocar.')}</span>
        </p>
      </div>

      {/* ── Slots ── */}
      <div className="mb-1">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-semibold text-center">
          {m('← Place blocks here in the correct order →', '← Coloque os blocos aqui pela ordem correta →')}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[0, 1, 2, 3].map(slotIndex => {
            const blockId    = placements[slotIndex];
            const isOccupied = !!blockId;
            const isRight    = checked && isSlotCorrect(slotIndex);
            const isWrong    = checked && isOccupied && !isSlotCorrect(slotIndex);

            return (
              <div
                key={slotIndex}
                onClick={() => handleSlotClick(slotIndex)}
                className={`
                  rounded-xl border-2 transition-all min-h-[148px]
                  ${!checked ? 'cursor-pointer' : ''}
                  ${!isOccupied ? 'border-dashed' : ''}
                  ${!isOccupied && selected  ? 'border-[#f59e0b] bg-[#f59e0b]/5 hover:bg-[#f59e0b]/10' : ''}
                  ${!isOccupied && !selected ? 'border-border/60 bg-muted/5' : ''}
                  ${isOccupied && !checked   ? 'border-[#6366f1]/50 bg-card hover:border-[#6366f1]' : ''}
                  ${isRight  ? 'border-[#10b981] bg-[#10b981]/5' : ''}
                  ${isWrong  ? 'border-[#ef4444] bg-[#ef4444]/5' : ''}
                `}
              >
                <div className="px-3 py-2 border-b border-border/50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {m('Slot', 'Espaço')} {slotIndex + 1}
                  </span>
                  {checked && isOccupied && (
                    <span className="text-sm font-bold" style={{ color: isRight ? '#10b981' : '#ef4444' }}>
                      {isRight ? '✓' : '✗'}
                    </span>
                  )}
                </div>

                {isOccupied
                  ? <BuilderBlockCard block={getBlock(blockId)} />
                  : (
                    <div className="flex items-center justify-center h-24 text-xs text-muted-foreground/40">
                      {selected ? m('← drop here', '← largue aqui') : m('empty', 'vazio')}
                    </div>
                  )
                }
              </div>
            );
          })}
        </div>
      </div>

      {/* Hash link indicators — shown after Check */}
      {checked && (
        <div className="flex items-center justify-around px-2 py-2 mb-3">
          {[0, 1, 2].map(i => {
            const valid    = isLinkValid(i);
            const fromHash = placements[i] ? getBlock(placements[i]!).hash : '—';
            const toNext   = placements[i + 1] ? getBlock(placements[i + 1]!).prevHash : '—';
            return (
              <div key={i} className="flex items-center gap-1 text-[10px] font-mono" style={{ color: valid ? '#10b981' : '#ef4444' }}>
                <span>{fromHash}</span>
                <span className="text-xs font-sans">{valid ? ' ⟶✓' : ' ⟶✗'}</span>
                <span>{toNext}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Pool ── */}
      <div className="mb-4">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-semibold text-center">
          {m('Block Pool — click to select', 'Conjunto de Blocos — clique para selecionar')}
        </p>
        <div className={`grid gap-3 min-h-[60px] ${pool.length > 0 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {pool.length === 0 ? (
            <div className="col-span-4 flex items-center justify-center text-sm text-muted-foreground/40 italic py-3">
              {m('All blocks placed ✓', 'Todos os blocos colocados ✓')}
            </div>
          ) : pool.map(id => {
            const isSelected = selected === id;
            return (
              <div
                key={id}
                onClick={() => handlePoolClick(id)}
                className={`
                  rounded-xl border-2 cursor-pointer transition-all
                  ${isSelected
                    ? 'border-[#f59e0b] bg-[#f59e0b]/15 shadow-lg shadow-[#f59e0b]/20 scale-[1.02]'
                    : 'border-border bg-card hover:border-[#6366f1]/50'
                  }
                `}
              >
                <div className="px-3 py-2 border-b border-border/50">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {isSelected ? m('✦ Selected', '✦ Selecionado') : m('Block', 'Bloco')}
                  </span>
                </div>
                <BuilderBlockCard block={getBlock(id)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint toggle */}
      {!checked && (
        <div className="flex justify-center mb-3">
          <button
            onClick={() => setShowHint(h => !h)}
            className="text-xs text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-all"
          >
            {showHint ? m('Hide hint ▲', 'Esconder dica ▲') : m('💡 Show hint', '💡 Mostrar dica')}
          </button>
        </div>
      )}
      {showHint && !checked && (
        <div className="max-w-lg mx-auto mb-4 p-4 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-sm">
          <p className="font-semibold text-[#f59e0b] mb-1">{m('How to crack it:', 'Como resolver:')}</p>
          <p className="text-muted-foreground text-xs">
            {m('1. Find the ', '1. Encontre o ')}<strong>{m('Genesis block', 'Bloco Génese')}</strong> — {m('its', 'o seu')}{' '}
            <span className="font-mono text-[#6366f1]">{m('Prev Hash', 'Hash Ant.')}</span> {m('reads', 'indica')}{' '}
            <span className="font-mono bg-muted px-1 rounded">{m('0x000000 (start)', '0x000000 (início)')}</span>.<br />
            {m("2. Match each block's ", '2. Faça corresponder o ')}<span className="font-mono text-[#6366f1]">{m('Prev Hash', 'Hash Ant.')}</span> {m('to the previous block\'s ', 'de cada bloco ao ')}<span className="font-mono text-[#39B54A]">Hash</span> {m(' — like connecting puzzle pieces.', 'do bloco anterior — como peças de um puzzle.')}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-center gap-4">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={!allFilled}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              allFilled
                ? 'bg-[#39B54A] text-white hover:opacity-90 shadow-lg shadow-[#39B54A]/30'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            {m('Check chain ✓', 'Verificar cadeia ✓')}
          </button>
        ) : (
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-black" style={{ color: resultColor }}>{score}/4</div>
              <div className="text-xs text-muted-foreground mt-0.5">{resultMsg}</div>
            </div>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
            >
              {m('Try again', 'Tentar novamente')}
            </button>
          </div>
        )}
      </div>

      {/* Post-check insight */}
      {checked && (
        <div className={`mt-5 p-4 rounded-xl border text-sm text-center max-w-xl mx-auto ${
          score === 4
            ? 'bg-[#10b981]/10 border-[#10b981]/30 text-muted-foreground'
            : 'bg-[#6366f1]/10 border-[#6366f1]/30 text-muted-foreground'
        }`}>
          {score === 4 ? (
            <>
              🎉 <span className="font-semibold text-[#10b981]">{m('Chain reconstructed!', 'Cadeia reconstruída!')}</span>{' '}
              {m("Every Prev Hash matched the previous block's Hash exactly — that cryptographic linkage is what makes blockchain tamper-evident and immutable.", 'Cada Hash Ant. correspondeu exatamente ao Hash do bloco anterior — essa ligação criptográfica é o que torna a blockchain à prova de adulteração e imutável.')}
            </>
          ) : (
            <>
              💡 <span className="font-semibold text-[#6366f1]">{m('Key insight:', 'Ideia-chave:')}</span>{' '}
              {m('Start with the Genesis block (', 'Comece pelo Bloco Génese (')}<span className="font-mono text-xs">{m('Prev Hash = 0x000000', 'Hash Ant. = 0x000000')}</span>{m('), then trace each Hash → Prev Hash connection. The chain can only be assembled one way.', '), depois siga cada ligação Hash → Hash Ant. A cadeia só pode ser montada de uma maneira.')}
            </>
          )}
        </div>
      )}

    </div>
  );
}

// ─── Interactive DLT topology demo ──────────────────────────────────────────

type TopoMode = 'centralized' | 'decentralized' | 'distributed';

interface TopoNode { id: string; x: number; y: number; size?: number }
interface TopoEdge { a: string; b: string }
interface Topology { nodes: TopoNode[]; edges: TopoEdge[] }

const TOPOLOGIES: Record<TopoMode, Topology> = {
  centralized: {
    nodes: [
      { id: 'c',  x: 160, y: 140, size: 14 },
      { id: 's0', x: 260, y: 140 },
      { id: 's1', x: 218, y: 222 },
      { id: 's2', x: 126, y: 240 },
      { id: 's3', x: 44,  y: 200 },
      { id: 's4', x: 44,  y: 80  },
      { id: 's5', x: 140, y: 30  },
      { id: 's6', x: 250, y: 58  },
    ],
    edges: ['s0','s1','s2','s3','s4','s5','s6'].map(s => ({ a: 'c', b: s })),
  },
  decentralized: {
    nodes: [
      { id: 'h0', x: 60,  y: 70,  size: 11 },
      { id: 'h1', x: 215, y: 50,  size: 11 },
      { id: 'h2', x: 140, y: 215, size: 11 },
      { id: 'h3', x: 275, y: 175, size: 11 },
      { id: 'l0a', x: 20,  y: 25  },
      { id: 'l0b', x: 18,  y: 135 },
      { id: 'l1a', x: 175, y: 6   },
      { id: 'l1b', x: 270, y: 12  },
      { id: 'l1c', x: 255, y: 100 },
      { id: 'l2a', x: 80,  y: 262 },
      { id: 'l2b', x: 195, y: 262 },
      { id: 'l3a', x: 305, y: 230 },
    ],
    edges: [
      { a: 'h0', b: 'h1' }, { a: 'h1', b: 'h2' }, { a: 'h2', b: 'h3' }, { a: 'h0', b: 'h2' }, { a: 'h1', b: 'h3' },
      { a: 'h0', b: 'l0a' }, { a: 'h0', b: 'l0b' },
      { a: 'h1', b: 'l1a' }, { a: 'h1', b: 'l1b' }, { a: 'h1', b: 'l1c' },
      { a: 'h2', b: 'l2a' }, { a: 'h2', b: 'l2b' },
      { a: 'h3', b: 'l3a' },
    ],
  },
  distributed: {
    nodes: [
      { id: 'p1',  x: 45,  y: 55  },
      { id: 'p2',  x: 130, y: 28  },
      { id: 'p3',  x: 235, y: 60  },
      { id: 'p4',  x: 295, y: 30  },
      { id: 'p5',  x: 80,  y: 130 },
      { id: 'p6',  x: 180, y: 115 },
      { id: 'p7',  x: 270, y: 140 },
      { id: 'p8',  x: 35,  y: 215 },
      { id: 'p9',  x: 135, y: 230 },
      { id: 'p10', x: 215, y: 245 },
      { id: 'p11', x: 295, y: 220 },
    ],
    edges: [
      { a: 'p1', b: 'p2'  }, { a: 'p1', b: 'p5'  },
      { a: 'p2', b: 'p3'  }, { a: 'p2', b: 'p5'  }, { a: 'p2', b: 'p6' },
      { a: 'p3', b: 'p4'  }, { a: 'p3', b: 'p6'  }, { a: 'p3', b: 'p7' },
      { a: 'p4', b: 'p7'  },
      { a: 'p5', b: 'p6'  }, { a: 'p5', b: 'p8'  }, { a: 'p5', b: 'p9' },
      { a: 'p6', b: 'p7'  }, { a: 'p6', b: 'p9'  }, { a: 'p6', b: 'p10' },
      { a: 'p7', b: 'p10' }, { a: 'p7', b: 'p11' },
      { a: 'p8', b: 'p9'  },
      { a: 'p9', b: 'p10' },
      { a: 'p10', b: 'p11' },
    ],
  },
};

const MODE_INFO_EN: Record<TopoMode, { color: string; label: string; tagline: string; lesson: string }> = {
  centralized: {
    color: '#ED1C24',
    label: 'Centralized',
    tagline: 'One server holds everything. Fast and simple — but if it goes down, the whole network goes down.',
    lesson: 'Try clicking the centre node. Then try clicking one satellite. Same act, very different blast radius.',
  },
  decentralized: {
    color: '#f59e0b',
    label: 'Decentralized',
    tagline: 'Several hubs share authority. No single hub controls everything, but each hub still rules its cluster.',
    lesson: 'Click a hub — its leaves are orphaned because they only reach the network through it. The other clusters keep working.',
  },
  distributed: {
    color: '#39B54A',
    label: 'Distributed',
    tagline: 'Every node is a peer with the same role. No single failure can take the network down.',
    lesson: 'Try clicking several nodes. The mesh routes around the gaps — this is what blockchain inherits.',
  },
};

const MODE_INFO_PT: Record<TopoMode, { color: string; label: string; tagline: string; lesson: string }> = {
  centralized: {
    color: '#ED1C24',
    label: 'Centralizada',
    tagline: 'Um servidor guarda tudo. Rápido e simples — mas se cair, toda a rede cai.',
    lesson: 'Experimente clicar no nó central. Depois clique num satélite. O mesmo ato, com um raio de impacto muito diferente.',
  },
  decentralized: {
    color: '#f59e0b',
    label: 'Descentralizada',
    tagline: 'Vários hubs partilham autoridade. Nenhum hub controla tudo, mas cada um continua a reger o seu cluster.',
    lesson: 'Clique num hub — as suas folhas ficam órfãs porque só chegam à rede através dele. Os outros clusters continuam a funcionar.',
  },
  distributed: {
    color: '#39B54A',
    label: 'Distribuída',
    tagline: 'Cada nó é um par com o mesmo papel. Nenhuma falha isolada consegue derrubar a rede.',
    lesson: 'Experimente clicar em vários nós. A malha contorna as falhas — é isto que a blockchain herda.',
  },
};

function largestConnected(topo: Topology, failed: Set<string>): Set<string> {
  const adj = new Map<string, string[]>();
  for (const n of topo.nodes) adj.set(n.id, []);
  for (const e of topo.edges) { adj.get(e.a)!.push(e.b); adj.get(e.b)!.push(e.a); }

  const visited = new Set<string>();
  let best = new Set<string>();
  for (const n of topo.nodes) {
    if (failed.has(n.id) || visited.has(n.id)) continue;
    const comp = new Set<string>();
    const stack = [n.id];
    while (stack.length) {
      const cur = stack.pop()!;
      if (comp.has(cur)) continue;
      comp.add(cur);
      visited.add(cur);
      for (const nb of adj.get(cur) || []) if (!failed.has(nb) && !comp.has(nb)) stack.push(nb);
    }
    if (comp.size > best.size) best = comp;
  }
  return best;
}

function NetworkTopologyDemo() {
  const m = useM();
  const { lang } = useLanguage();
  const MODE_INFO = lang === 'pt' ? MODE_INFO_PT : MODE_INFO_EN;

  const [mode, setMode] = useState<TopoMode>('centralized');
  const [failed, setFailed] = useState<Set<string>>(new Set());

  const topo = TOPOLOGIES[mode];
  const info = MODE_INFO[mode];
  const total = topo.nodes.length;
  const aliveCount = total - failed.size;
  const main = largestConnected(topo, failed);
  const connected = main.size;
  const isolated = aliveCount - connected;

  let status: { color: string; label: string };
  if (aliveCount === 0)              status = { color: '#ED1C24', label: m('Network down — all nodes offline', 'Rede em baixo — todos os nós offline') };
  else if (connected === aliveCount) status = { color: '#39B54A', label: lang === 'pt' ? `Operacional · ${connected}/${total} acessíveis` : `Operational · ${connected}/${total} reachable` };
  else if (connected / aliveCount <= 0.5) status = { color: '#ED1C24', label: lang === 'pt' ? `Em baixo · apenas ${connected}/${total} acessíveis, ${isolated} isolados` : `Down · only ${connected}/${total} reachable, ${isolated} isolated` };
  else                               status = { color: '#f59e0b', label: lang === 'pt' ? `Degradada · ${connected}/${total} acessíveis, ${isolated} isolados` : `Degraded · ${connected}/${total} reachable, ${isolated} isolated` };

  const toggleNode = (id: string) => {
    setFailed(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const switchMode = (mm: TopoMode) => {
    setMode(mm);
    setFailed(new Set());
  };

  const nodeFill = (id: string) => {
    if (failed.has(id)) return '#ED1C24';
    if (main.has(id))   return info.color;
    return '#9ca3af';
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Mode tabs */}
      <div className="grid grid-cols-3 gap-1.5">
        {(['centralized','decentralized','distributed'] as TopoMode[]).map(mm => {
          const active = mm === mode;
          const c = MODE_INFO[mm];
          return (
            <button
              key={mm}
              onClick={() => switchMode(mm)}
              className="px-2.5 py-2 rounded-lg border-2 text-xs font-bold transition-colors"
              style={{
                borderColor: active ? c.color : 'var(--border)',
                backgroundColor: active ? c.color + '15' : 'transparent',
                color: active ? c.color : 'var(--foreground)',
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Diagram */}
      <div className="bg-card rounded-xl border border-border p-2">
        <svg viewBox="0 0 320 280" className="w-full h-auto" role="img" aria-label={lang === 'pt' ? `Topologia de rede ${info.label}` : `${info.label} network topology`}>
          {/* Edges */}
          {topo.edges.map((e, i) => {
            const a = topo.nodes.find(n => n.id === e.a)!;
            const b = topo.nodes.find(n => n.id === e.b)!;
            const dead = failed.has(e.a) || failed.has(e.b);
            return (
              <line
                key={i}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={dead ? '#ED1C2440' : info.color + '70'}
                strokeWidth={1.5}
                strokeDasharray={dead ? '3 3' : undefined}
              />
            );
          })}
          {/* Nodes */}
          {topo.nodes.map(n => {
            const r = n.size ?? 9;
            const fill = nodeFill(n.id);
            const isFailed = failed.has(n.id);
            return (
              <g key={n.id} onClick={() => toggleNode(n.id)} style={{ cursor: 'pointer' }}>
                {!isFailed && main.has(n.id) && (
                  <circle cx={n.x} cy={n.y} r={r + 5} fill={fill} opacity={0.12} />
                )}
                <circle cx={n.x} cy={n.y} r={r} fill={fill} stroke="#fff" strokeWidth={2} />
                {isFailed && (
                  <>
                    <line x1={n.x - r * 0.55} y1={n.y - r * 0.55} x2={n.x + r * 0.55} y2={n.y + r * 0.55} stroke="#fff" strokeWidth={2} />
                    <line x1={n.x + r * 0.55} y1={n.y - r * 0.55} x2={n.x - r * 0.55} y2={n.y + r * 0.55} stroke="#fff" strokeWidth={2} />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Status + reset */}
      <div className="flex items-center gap-2">
        <div className="flex-1 px-3 py-2 rounded-lg border-2 text-xs font-bold flex items-center gap-2"
             style={{ borderColor: status.color + '60', backgroundColor: status.color + '12', color: status.color }}>
          <span className="size-2 rounded-full" style={{ backgroundColor: status.color }} />
          {status.label}
        </div>
        <button
          onClick={() => setFailed(new Set())}
          disabled={failed.size === 0}
          className="px-2.5 py-2 rounded-lg bg-muted text-xs font-semibold text-muted-foreground hover:bg-muted/80 disabled:opacity-40 transition-colors"
        >
          {m('↺ Reset', '↺ Repor')}
        </button>
      </div>

      {/* Lesson */}
      <div className="px-3 py-2 rounded-lg text-[11px] text-muted-foreground leading-snug"
           style={{ backgroundColor: info.color + '08', borderLeft: `3px solid ${info.color}` }}>
        <span className="font-semibold text-foreground">{info.label}.</span> {info.tagline}{' '}
        <span className="italic">{info.lesson}</span>
      </div>
    </div>
  );
}

export function Section1() {
  const m = useM();
  const { lang } = useLanguage();
  const section1Chapters = lang === 'pt' ? section1ChaptersPt : section1ChaptersEn;
  const brickDefinitions = lang === 'pt' ? brickDefinitionsPt : brickDefinitionsEn;

  return (
    <div className="size-full flex overflow-hidden">
      <SectionNav chapters={section1Chapters} />
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber={m('SECTION 01', 'SECÇÃO 01')}
            title={m('Introduction to Blockchain Technology', 'Introdução à Tecnologia Blockchain')}
            subtitle={m('The building blocks: DLT, hashing, blocks, wallets, transactions, and consensus', 'Os blocos fundamentais: DLT, hashing, blocos, carteiras, transações e consenso')}
            icon={<Blocks className="size-20 text-[#ED1C24]" />}
          />
        </div>

        {/* ═══════ 1. BLOCKCHAIN BRICK WALL ═══════ */}
        <div id="s1-vocab" className="h-full flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-center">{m('The Blockchain Vocabulary Wall', 'O Muro de Vocabulário da Blockchain')}</h2>
            <p className="text-muted-foreground mb-8 text-center">
              {m('Every brick below represents a core concept you will master in this section.', 'Cada tijolo abaixo representa um conceito central que vai dominar nesta secção.')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {brickWords.map((word, i) => (
                <Tooltip key={word}>
                  <TooltipTrigger asChild>
                    <div
                      className={`px-5 py-3 rounded-lg bg-gradient-to-br ${brickColors[i % brickColors.length]} border font-bold text-foreground text-sm hover:scale-110 hover:border-[#4ade80] hover:shadow-[0_0_12px_rgba(74,222,128,0.3)] transition-all cursor-pointer`}
                    >
                      {word}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-sm bg-white border-[#4ade80]/40 text-black">
                    {brickDefinitions[word]}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              {m("By the end of this section, you'll understand every term on this wall.", 'No final desta secção, vai compreender cada termo deste muro.')}
            </p>
          </div>
        </div>

        {/* ═══════ 2. DLT — CENTRALIZED vs DECENTRALIZED vs DISTRIBUTED ═══════ */}
        <div id="s1-dlt" className="h-full">
          <ComparisonSlide
            title={m('Centralized vs Decentralized vs Distributed', 'Centralizada vs Descentralizada vs Distribuída')}
            option1Label={m('Centralized', 'Centralizada')}
            option2Label={m('Decentralized', 'Descentralizada')}
            option3Label={m('Distributed', 'Distribuída')}
            items={[
              {
                feature: m('Control', 'Controlo'),
                option1: m('Single authority owns the system', 'Uma única autoridade detém o sistema'),
                option2: m('Multiple independent authorities', 'Várias autoridades independentes'),
                option3: m('No central authority — all nodes are equal', 'Sem autoridade central — todos os nós são iguais')
              },
              {
                feature: m('Topology', 'Topologia'),
                option1: m('Star — all nodes connect to one center', 'Estrela — todos os nós ligam-se a um centro'),
                option2: m('Mesh of independent clusters, each with local authority', 'Malha de clusters independentes, cada um com autoridade local'),
                option3: m('Fully connected mesh — every node communicates directly', 'Malha totalmente ligada — cada nó comunica diretamente')
              },
              {
                feature: m('Single Point of Failure', 'Ponto Único de Falha'),
                option1: m('Yes — center fails, everything fails', 'Sim — se o centro falha, tudo falha'),
                option2: m('Reduced — some hubs can fail without total collapse', 'Reduzido — alguns hubs podem falhar sem colapso total'),
                option3: m('No — any node can fail, network continues', 'Não — qualquer nó pode falhar, a rede continua')
              },
              {
                feature: m('Trust Model', 'Modelo de Confiança'),
                option1: m('Trust the central operator', 'Confiar no operador central'),
                option2: m('Trust delegated to regional/local authorities', 'Confiança delegada a autoridades regionais/locais'),
                option3: m('Trust established through consensus protocol', 'Confiança estabelecida através do protocolo de consenso')
              },
              {
                feature: m('Censorship', 'Censura'),
                option1: m('Central authority can censor or override', 'A autoridade central pode censurar ou anular'),
                option2: m('Harder to censor, but local authorities may still restrict', 'Mais difícil de censurar, mas autoridades locais ainda podem restringir'),
                option3: m('No single entity can censor transactions', 'Nenhuma entidade isolada pode censurar transações')
              },
              {
                feature: m('Examples', 'Exemplos'),
                option1: m('Banks, Google, Meta', 'Bancos, Google, Meta'),
                option2: m('Email (SMTP), Mastodon, DNS', 'Email (SMTP), Mastodon, DNS'),
                option3: m('Bitcoin, IPFS, BitTorrent', 'Bitcoin, IPFS, BitTorrent')
              }
            ]}
          />
        </div>

        <div className="h-full">
          <div className="slide-template w-full flex flex-col p-5 lg:p-8">
            <div className="shrink-0 mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{m('Understanding DLT Models', 'Compreender os Modelos DLT')}</h2>
              <p className="text-sm lg:text-base text-muted-foreground max-w-3xl">
                {m('Distributed Ledger Technology removes the need for a central database by replicating data across a network. Switch between the three topologies and click nodes to take them offline — watch what happens.', 'A Tecnologia de Registo Distribuído elimina a necessidade de uma base de dados central ao replicar os dados por uma rede. Alterne entre as três topologias e clique nos nós para os colocar offline — observe o que acontece.')}
              </p>
            </div>

            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-4 lg:gap-6">
              {/* Interactive */}
              <div className="flex items-center justify-center">
                <NetworkTopologyDemo />
              </div>

              {/* Key insights */}
              <div className="flex flex-col justify-center gap-3">
                {[
                  { color: '#ED1C24', title: m('Centralized = single point of control', 'Centralizada = ponto único de controlo'), desc: m('One operator owns the system. If that node fails, the network fails. Trust is total.', 'Um operador detém o sistema. Se esse nó falhar, a rede falha. A confiança é total.') },
                  { color: '#f59e0b', title: m('Decentralized = clusters of authority', 'Descentralizada = clusters de autoridade'),  desc: m('Multiple independent hubs. Killing one breaks its cluster but leaves the rest intact.', 'Vários hubs independentes. Eliminar um quebra o seu cluster mas deixa os outros intactos.') },
                  { color: '#39B54A', title: m('Distributed = every node is a peer', 'Distribuída = cada nó é um par'),     desc: m('All nodes hold the data and participate equally. The mesh routes around failures.', 'Todos os nós guardam os dados e participam igualmente. A malha contorna as falhas.') },
                  { color: '#6366f1', title: m('Blockchain is a distributed ledger', 'A blockchain é um registo distribuído'),     desc: m('It adds cryptographic consensus on top of a distributed network — so all peers agree on one shared history.', 'Acrescenta consenso criptográfico sobre uma rede distribuída — para que todos os pares concordem numa única história partilhada.') },
                ].map((p, i) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-3 p-3 lg:p-4 bg-card rounded-lg border"
                    style={{ borderColor: p.color + '40' }}
                  >
                    <div className="size-7 lg:size-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                         style={{ backgroundColor: p.color }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-foreground leading-snug">{p.title}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground mt-0.5 leading-snug">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ 3. WHY BLOCKCHAIN CHALLENGES TRUSTED THIRD PARTIES ═══════ */}
        <div id="s1-trust" className="h-full">
          <ConceptSlide
            title={m('Why Blockchain Challenges Trusted Third Parties', 'Porque a Blockchain Desafia os Terceiros de Confiança')}
            description={m('Blockchain combines distribution, cryptography, and incentive design to create systems that need no trusted authority.', 'A blockchain combina distribuição, criptografia e desenho de incentivos para criar sistemas que dispensam uma autoridade de confiança.')}
            visual={
              <div className="flex flex-col gap-4">
                {/* IRL examples strip */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">{m('Who are trusted third parties today?', 'Quem são os terceiros de confiança hoje?')}</p>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { emoji: '🏦', label: m('Banks', 'Bancos'), sub: m('Hold & move money', 'Guardam e movem dinheiro') },
                      { emoji: '⚖️', label: m('Notaries', 'Notários'), sub: m('Certify documents', 'Certificam documentos') },
                      { emoji: '🏛️', label: m('Land Registry', 'Registo Predial'), sub: m('Prove ownership', 'Comprovam a propriedade') },
                      { emoji: '💳', label: m('PayPal / Visa', 'PayPal / Visa'), sub: m('Process payments', 'Processam pagamentos') },
                      { emoji: '🔐', label: m('Certificate Auth.', 'Autoridades de Cert.'), sub: m('Verify identities', 'Verificam identidades') },
                    ].map(ex => (
                      <div key={ex.label} className="p-2.5 bg-muted rounded-lg text-center">
                        <div className="text-xl mb-1">{ex.emoji}</div>
                        <div className="text-xs font-bold text-foreground">{ex.label}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{ex.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Properties grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-1.5">{m('🔗 Immutability', '🔗 Imutabilidade')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Once data is committed to the chain, altering it requires rewriting every subsequent block — practically impossible', 'Uma vez registados os dados na cadeia, alterá-los exige reescrever cada bloco seguinte — praticamente impossível')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-1.5">{m('🤝 Trustless Consensus', '🤝 Consenso Sem Confiança')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Participants agree on the state of the ledger through mathematical proofs, not reputation', 'Os participantes concordam sobre o estado do registo através de provas matemáticas, não de reputação')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-1.5">{m('💡 Transparency', '💡 Transparência')}</h4>
                    <p className="text-sm text-muted-foreground">{m('Anyone can verify the full history of transactions — no hidden ledgers or secret changes', 'Qualquer pessoa pode verificar todo o histórico de transações — sem registos ocultos nem alterações secretas')}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-1.5">{m('🛡️ Censorship Resistance', '🛡️ Resistência à Censura')}</h4>
                    <p className="text-sm text-muted-foreground">{m('No central entity can block, reverse, or freeze transactions on a public blockchain', 'Nenhuma entidade central pode bloquear, reverter ou congelar transações numa blockchain pública')}</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m('Traditional databases can be silently altered by their operators', 'As bases de dados tradicionais podem ser silenciosamente alteradas pelos seus operadores'),
              m('Blockchain shifts trust from institutions to verifiable mathematics', 'A blockchain transfere a confiança das instituições para uma matemática verificável'),
              m('Economic incentives align participants toward honest behavior', 'Os incentivos económicos alinham os participantes com um comportamento honesto'),
              m('Open-source code means anyone can audit the rules', 'O código aberto permite que qualquer pessoa audite as regras')
            ]}
          />
        </div>

        {/* ═══════ 4. BLOCKCHAIN TYPES ═══════ */}
        <div id="s1-blockchain-types" className="h-full">
          <ComparisonSlide
            title={m('Blockchain Types — Public, Private & Permission Models', 'Tipos de Blockchain — Modelos Público, Privado e de Permissões')}
            featureLabel={m('Criteria', 'Critérios')}
            option1Label={m('Public · Permissionless', 'Pública · Sem permissão')}
            option2Label={m('Consortium · Semi-private', 'Consórcio · Semi-privada')}
            option3Label={m('Private · Permissioned', 'Privada · Com permissão')}
            items={[
              {
                feature: m('Who can read?', 'Quem pode ler?'),
                option1: m('Anyone — the full ledger is publicly visible to every participant on Earth', 'Qualquer pessoa — o registo completo é publicamente visível para todos os participantes do mundo'),
                option2: m('Members of the consortium, sometimes also the public (read-only)', 'Membros do consórcio, por vezes também o público (apenas leitura)'),
                option3: m('Only invited and approved organisations or users', 'Apenas organizações ou utilizadores convidados e aprovados'),
              },
              {
                feature: m('Who can transact?', 'Quem pode transacionar?'),
                option1: m('Anyone with an address — no registration, no approval', 'Qualquer pessoa com um endereço — sem registo nem aprovação'),
                option2: m('Authorised member organisations only', 'Apenas organizações membro autorizadas'),
                option3: m('Only pre-approved identities inside the network', 'Apenas identidades pré-aprovadas dentro da rede'),
              },
              {
                feature: m('Who validates?', 'Quem valida?'),
                option1: m('Anyone — open mining or staking (Bitcoin PoW, Ethereum PoS)', 'Qualquer pessoa — mineração ou staking abertos (PoW do Bitcoin, PoS do Ethereum)'),
                option2: m('A defined set of known nodes agreed upon by the members (BFT variants)', 'Um conjunto definido de nós conhecidos acordado pelos membros (variantes BFT)'),
                option3: m('One organisation or a fixed set of internal nodes', 'Uma organização ou um conjunto fixo de nós internos'),
              },
              {
                feature: m('Transparency', 'Transparência'),
                option1: m('Fully transparent — every transaction is auditable by everyone', 'Totalmente transparente — qualquer transação é auditável por qualquer pessoa'),
                option2: m('Selective — members see relevant data; outsiders may see a subset', 'Seletiva — os membros veem dados relevantes; quem está fora pode ver um subconjunto'),
                option3: m('Private — data visible only to permissioned participants', 'Privada — dados visíveis apenas a participantes com permissão'),
              },
              {
                feature: m('Examples', 'Exemplos'),
                option1: m('Bitcoin · Ethereum · Solana · Litecoin · Monero · Polygon', 'Bitcoin · Ethereum · Solana · Litecoin · Monero · Polygon'),
                option2: m('R3 Corda · Quorum · Marco Polo · IBM Food Trust · Baseline Protocol', 'R3 Corda · Quorum · Marco Polo · IBM Food Trust · Baseline Protocol'),
                option3: m('Hyperledger Fabric · JP Morgan Quorum · Corda Enterprise · DAML', 'Hyperledger Fabric · JP Morgan Quorum · Corda Enterprise · DAML'),
              },
            ]}
          />
        </div>

        {/* ═══════ 5. HASHING ═══════ */}
        <div id="s1-hashing" className="h-full">
          <ConceptSlide
            title={m('Cryptographic Hashing', 'Hashing Criptográfico')}
            description={m('Hash functions are one-way mathematical algorithms that convert any input into a fixed-size output.', 'As funções de hash são algoritmos matemáticos unidirecionais que convertem qualquer entrada numa saída de tamanho fixo.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="p-4 bg-card rounded-xl border-2 border-[#6366f1]">
                  <div className="text-sm text-muted-foreground mb-1">{m('Input:', 'Entrada:')}</div>
                  <div className="font-mono text-foreground mb-2">"Hello World"</div>
                  <div className="text-sm text-muted-foreground mb-1">{m('SHA-256 Hash:', 'Hash SHA-256:')}</div>
                  <div className="font-mono text-xs text-[#6366f1] break-all">
                    a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                  </div>
                </div>
                <div className="p-4 bg-card rounded-xl border-2 border-[#8b5cf6]">
                  <div className="text-sm text-muted-foreground mb-1">{m('Input:', 'Entrada:')}</div>
                  <div className="font-mono text-foreground mb-2">"Hello World!"</div>
                  <div className="text-sm text-muted-foreground mb-1">{m('SHA-256 Hash:', 'Hash SHA-256:')}</div>
                  <div className="font-mono text-xs text-[#8b5cf6] break-all">
                    7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
                  </div>
                </div>
                <InteractiveHash />
              </div>
            }
            keyPoints={[
              m('Same input always produces the same hash (deterministic)', 'A mesma entrada produz sempre o mesmo hash (determinístico)'),
              m('Tiny change in input creates completely different hash (avalanche effect)', 'Uma pequena alteração na entrada gera um hash completamente diferente (efeito avalanche)'),
              m('Impossible to reverse-engineer the original input (one-way)', 'É impossível reverter o hash até à entrada original (unidirecional)'),
              m('Used to verify data integrity and create cryptographic links between blocks', 'Usado para verificar a integridade dos dados e criar ligações criptográficas entre blocos')
            ]}
          />
        </div>

        <div className="h-full">
          <DiscussionSlide
            prompt={m('Why is it important that hash functions are one-way?', 'Porque é importante que as funções de hash sejam unidirecionais?')}
            guidingQuestions={[
              m('How does this property secure the blockchain against tampering?', 'Como é que esta propriedade protege a blockchain contra adulterações?'),
              m('What would happen if you could reverse a hash and find its input?', 'O que aconteceria se fosse possível reverter um hash e encontrar a sua entrada?'),
              m('How does hashing relate to mining and Proof of Work?', 'Como é que o hashing se relaciona com a mineração e a Prova de Trabalho?')
            ]}
          />
        </div>

        {/* ═══════ 5. MERKLE TREES ═══════ */}
        <div id="s1-merkle" className="h-full">
          <DiagramSlide
            title={m('Merkle Trees', 'Árvores de Merkle')}
            diagram={
              <div className="flex flex-col items-center gap-3 py-4">
                {/* Root */}
                <div className="px-6 py-3 bg-[#ED1C24]/20 border-2 border-[#ED1C24] rounded-lg">
                  <div className="text-xs text-muted-foreground">{m('Merkle Root', 'Raiz de Merkle')}</div>
                  <div className="font-mono text-sm text-[#ED1C24]">Hash(AB + CD)</div>
                </div>
                <div className="flex gap-32">
                  <div className="w-px h-6 bg-border" />
                  <div className="w-px h-6 bg-border" />
                </div>
                {/* Level 1 */}
                <div className="flex gap-16">
                  <div className="px-5 py-2 bg-[#39B54A]/20 border border-[#39B54A] rounded-lg">
                    <div className="text-xs text-muted-foreground">Hash AB</div>
                    <div className="font-mono text-xs text-[#39B54A]">Hash(A + B)</div>
                  </div>
                  <div className="px-5 py-2 bg-[#39B54A]/20 border border-[#39B54A] rounded-lg">
                    <div className="text-xs text-muted-foreground">Hash CD</div>
                    <div className="font-mono text-xs text-[#39B54A]">Hash(C + D)</div>
                  </div>
                </div>
                <div className="flex gap-12">
                  <div className="flex gap-16">
                    <div className="w-px h-6 bg-border" />
                    <div className="w-px h-6 bg-border" />
                  </div>
                  <div className="flex gap-16">
                    <div className="w-px h-6 bg-border" />
                    <div className="w-px h-6 bg-border" />
                  </div>
                </div>
                {/* Leaves */}
                <div className="flex gap-6">
                  <div className="px-4 py-2 bg-[#6366f1]/20 border border-[#6366f1] rounded-lg">
                    <div className="text-xs text-muted-foreground">Tx A</div>
                    <div className="font-mono text-xs text-[#6366f1]">Hash(A)</div>
                  </div>
                  <div className="px-4 py-2 bg-[#6366f1]/20 border border-[#6366f1] rounded-lg">
                    <div className="text-xs text-muted-foreground">Tx B</div>
                    <div className="font-mono text-xs text-[#6366f1]">Hash(B)</div>
                  </div>
                  <div className="px-4 py-2 bg-[#6366f1]/20 border border-[#6366f1] rounded-lg">
                    <div className="text-xs text-muted-foreground">Tx C</div>
                    <div className="font-mono text-xs text-[#6366f1]">Hash(C)</div>
                  </div>
                  <div className="px-4 py-2 bg-[#6366f1]/20 border border-[#6366f1] rounded-lg">
                    <div className="text-xs text-muted-foreground">Tx D</div>
                    <div className="font-mono text-xs text-[#6366f1]">Hash(D)</div>
                  </div>
                </div>
              </div>
            }
            caption={m('A Merkle Tree hashes transactions pairwise up to a single root — changing any leaf changes the root', 'Uma Árvore de Merkle faz hash das transações aos pares até uma única raiz — alterar qualquer folha altera a raiz')}
            annotations={[
              {
                label: m('Efficient Verification', 'Verificação Eficiente'),
                description: m('To verify one transaction, you only need its sibling hashes up to the root — not the entire block', 'Para verificar uma transação, só precisa dos hashes irmãos até à raiz — não do bloco inteiro')
              },
              {
                label: m('Tamper Detection', 'Deteção de Adulteração'),
                description: m('Any change to a single transaction propagates all the way to the Merkle Root, instantly detectable', 'Qualquer alteração a uma única transação propaga-se até à Raiz de Merkle, sendo detetada de imediato')
              },
              {
                label: m('Light Clients', 'Clientes Leves'),
                description: m('SPV (Simplified Payment Verification) nodes use Merkle proofs to verify transactions without downloading the full blockchain', 'Os nós SPV (Verificação Simplificada de Pagamentos) usam provas de Merkle para verificar transações sem descarregar a blockchain inteira')
              }
            ]}
          />
        </div>

        {/* Interactive Merkle Tree */}
        <div className="h-full">
          <DiagramSlide
            title={m('Interactive Merkle Tree', 'Árvore de Merkle Interativa')}
            diagram={<InteractiveMerkleTree />}
            caption={m('Enter transaction data in the fields below and watch the hashes propagate up to the Merkle Root', 'Introduza dados de transação nos campos abaixo e veja os hashes propagarem-se até à Raiz de Merkle')}
            annotations={[
              {
                label: m('Real SHA-256', 'SHA-256 Real'),
                description: m('Every hash displayed is a genuine SHA-256 digest computed in your browser — not a simulation', 'Cada hash exibido é um digest SHA-256 genuíno calculado no seu navegador — não é uma simulação')
              },
              {
                label: m('Avalanche Effect', 'Efeito Avalanche'),
                description: m('Change a single character in any transaction and watch every hash above it change completely', 'Altere um único carácter em qualquer transação e veja todos os hashes acima mudarem completamente')
              },
              {
                label: m('Root = Fingerprint', 'Raiz = Impressão Digital'),
                description: m('The Merkle Root is a single hash that represents all four transactions — if any data changes, the root changes', 'A Raiz de Merkle é um único hash que representa todas as quatro transações — se algum dado mudar, a raiz muda')
              }
            ]}
          />
        </div>

        {/* ═══════ 6. BLOCKS & THEIR COMPOSITION ═══════ */}
        <div id="s1-blocks" className="h-full">
          <DiagramSlide
            title={m('Anatomy of a Blockchain', 'Anatomia de uma Blockchain')}
            diagram={
              <BlockchainChain
                blocks={[
                  {
                    blockNumber: 0,
                    hash: "0x000000...",
                    previousHash: "0x000000...",
                    timestamp: m("Jan 3, 2009", "3 Jan 2009"),
                    data: m("Genesis Block", "Bloco Génese"),
                    highlighted: false
                  },
                  {
                    blockNumber: 1,
                    hash: "0x1a2b3c...",
                    previousHash: "0x000000...",
                    timestamp: m("Jan 3, 2009", "3 Jan 2009"),
                    data: "50 BTC → Alice",
                    highlighted: false
                  },
                  {
                    blockNumber: 2,
                    hash: "0x4d5e6f...",
                    previousHash: "0x1a2b3c...",
                    timestamp: m("Jan 4, 2009", "4 Jan 2009"),
                    data: "25 BTC → Bob",
                    highlighted: true
                  }
                ]}
              />
            }
            caption={m('Each block contains data, a timestamp, and a cryptographic link to the previous block', 'Cada bloco contém dados, um carimbo temporal e uma ligação criptográfica ao bloco anterior')}
            annotations={[
              {
                label: m('Block Header', 'Cabeçalho do Bloco'),
                description: m('Contains metadata including previous hash, timestamp, and nonce', 'Contém metadados incluindo o hash anterior, carimbo temporal e nonce')
              },
              {
                label: m('Transaction Data', 'Dados das Transações'),
                description: m('The actual information being stored (transfers, contracts, etc.)', 'A informação efetivamente guardada (transferências, contratos, etc.)')
              },
              {
                label: 'Hash',
                description: m("Unique identifier created from the block's contents", 'Identificador único criado a partir do conteúdo do bloco')
              }
            ]}
          />
        </div>

        <div className="h-full">
          <DiagramSlide
            title={m('Inside a Block', 'Dentro de um Bloco')}
            diagram={
              <div className="flex justify-center">
                <BlockchainBlock
                  blockNumber={100}
                  version="0x20000000"
                  previousHash="0x9876543210fedcba"
                  merkleRoot="0x3a7f...c92e"
                  data={m("156 transactions", "156 transações")}
                  timestamp={m("Mar 10, 2026 14:32:15", "10 Mar 2026 14:32:15")}
                  difficulty="79.35 T"
                  nonce="2,083,236,893"
                  hash="0xabcdef1234567890"
                  highlighted={true}
                />
              </div>
            }
            annotations={[
              {
                label: m('Version', 'Versão'),
                description: m('Protocol version — tells nodes which rules to apply when validating this block', 'Versão do protocolo — indica aos nós que regras aplicar ao validar este bloco')
              },
              {
                label: m('Previous Hash', 'Hash Anterior'),
                description: m('Links this block to the previous one, forming the chain', 'Liga este bloco ao anterior, formando a cadeia')
              },
              {
                label: m('Merkle Root', 'Raiz de Merkle'),
                description: m('A single hash summarizing all transactions in the block via a Merkle Tree', 'Um único hash que sumariza todas as transações do bloco através de uma Árvore de Merkle')
              },
              {
                label: m('Difficulty & Nonce', 'Dificuldade e Nonce'),
                description: m('Difficulty sets how hard the puzzle is; the nonce is the value miners adjust to find a valid hash', 'A dificuldade define a complexidade do puzzle; o nonce é o valor que os mineradores ajustam para encontrar um hash válido')
              }
            ]}
          />
        </div>

        {/* ── Interactive: Chain the Blocks ── */}
        <div className="h-full flex items-center justify-center p-8">
          <PrevHashExercise />
        </div>

        {/* ═══════ 7. WALLETS & SIGNATURES ═══════ */}
        <div id="s1-wallets" className="h-full">
          <ComparisonSlide
            title={m('Custodial vs Self-Custodial Wallets', 'Carteiras com Custódia vs de Auto-Custódia')}
            option1Label={m('Custodial Wallet', 'Carteira com Custódia')}
            option2Label={m('Self-Custodial Wallet', 'Carteira de Auto-Custódia')}
            items={[
              {
                feature: m('Key Ownership', 'Posse da Chave'),
                option1: m('Third party holds your private keys', 'Um terceiro guarda as suas chaves privadas'),
                option2: m('You hold your own private keys', 'O próprio detém as suas chaves privadas')
              },
              {
                feature: m('Control', 'Controlo'),
                option1: m('Provider can freeze or restrict access', 'O fornecedor pode congelar ou restringir o acesso'),
                option2: m('Only you can authorize transactions', 'Só o próprio pode autorizar transações')
              },
              {
                feature: m('Recovery', 'Recuperação'),
                option1: m('Password reset via customer support', 'Recuperação de palavra-passe via apoio ao cliente'),
                option2: m('Seed phrase is the only recovery method', 'A frase semente é o único método de recuperação')
              },
              {
                feature: m('Security Risk', 'Risco de Segurança'),
                option1: m('Exchange hacks (Mt. Gox, FTX)', 'Ataques a exchanges (Mt. Gox, FTX)'),
                option2: m('Lost seed phrase = lost funds forever', 'Perder a frase semente = fundos perdidos para sempre')
              },
              {
                feature: m('Ease of Use', 'Facilidade de Uso'),
                option1: m('Beginner-friendly, familiar UI', 'Amigável para principiantes, interface familiar'),
                option2: m('Requires understanding of key management', 'Exige compreensão da gestão de chaves')
              },
              {
                feature: m('Examples', 'Exemplos'),
                option1: 'Coinbase, Binance, Kraken',
                option2: 'MetaMask, Ledger, Trezor'
              }
            ]}
          />
        </div>

        <div className="h-full">
          <ConceptSlide
            title={m('Wallet Security', 'Segurança da Carteira')}
            description={m('A crypto wallet stores the cryptographic keys that control your funds on the blockchain.', 'Uma carteira cripto guarda as chaves criptográficas que controlam os seus fundos na blockchain.')}
            visual={
              <div className="space-y-4 w-full">
                <CalloutBox type="warning" title={m('Not Your Keys, Not Your Coins', 'Sem as Suas Chaves, Sem as Suas Moedas')}>
                  {m('If a third party holds your private keys, they ultimately control your funds. History shows custodial services can fail, get hacked, or freeze withdrawals without warning.', 'Se um terceiro guarda as suas chaves privadas, é ele que, em última instância, controla os seus fundos. A história mostra que os serviços de custódia podem falhar, ser atacados ou congelar levantamentos sem aviso.')}
                </CalloutBox>
                <CalloutBox type="tip" title={m('Best Practices', 'Boas Práticas')}>
                  {m('Use a hardware wallet (cold storage) for large holdings. Keep your seed phrase offline, never digitally. Use a custodial wallet only for small amounts you actively trade.', 'Use uma carteira de hardware (armazenamento frio) para montantes elevados. Guarde a frase semente offline, nunca em formato digital. Use uma carteira com custódia apenas para pequenos montantes que negoceie ativamente.')}
                </CalloutBox>
              </div>
            }
            keyPoints={[
              m('A wallet does not store coins — it stores the keys to access them on-chain', 'Uma carteira não guarda moedas — guarda as chaves para lhes aceder on-chain'),
              m('Public key = your address (safe to share); Private key = your signature (never share)', 'Chave pública = o seu endereço (pode partilhar); Chave privada = a sua assinatura (nunca partilhe)'),
              m('Hardware wallets keep keys offline, immune to remote attacks', 'As carteiras de hardware mantêm as chaves offline, imunes a ataques remotos'),
              m('Multi-signature wallets require multiple approvals for added security', 'As carteiras multi-assinatura exigem várias aprovações para reforçar a segurança')
            ]}
          />
        </div>

        <div className="h-full">
          <ConceptSlide
            title={m('Digital Signatures', 'Assinaturas Digitais')}
            description={m('Digital signatures prove that a message (or transaction) was created by the owner of a specific private key — without revealing the key.', 'As assinaturas digitais provam que uma mensagem (ou transação) foi criada pelo dono de uma chave privada específica — sem revelar a chave.')}
            visual={
              <div className="space-y-4 w-full">
                <div className="p-5 bg-card rounded-xl border-2 border-[#6366f1]">
                  <div className="flex items-center gap-2 mb-3">
                    <PenTool className="size-5 text-[#6366f1]" />
                    <h4 className="font-bold text-foreground">{m('How Signing Works', 'Como Funciona a Assinatura')}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="size-6 rounded-full bg-[#ED1C24]/20 text-[#ED1C24] flex items-center justify-center text-xs font-bold">1</span>
                      <span className="text-muted-foreground">{m('Alice creates a transaction: ', 'A Alice cria uma transação: ')}<span className="font-mono text-foreground">{m('Send 1 BTC to Bob', 'Enviar 1 BTC ao Bob')}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-6 rounded-full bg-[#ED1C24]/20 text-[#ED1C24] flex items-center justify-center text-xs font-bold">2</span>
                      <span className="text-muted-foreground">{m('Alice signs the transaction hash with her ', 'A Alice assina o hash da transação com a sua ')}<span className="text-[#ED1C24] font-bold">{m('private key', 'chave privada')}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-6 rounded-full bg-[#39B54A]/20 text-[#39B54A] flex items-center justify-center text-xs font-bold">3</span>
                      <span className="text-muted-foreground">{m('The network verifies the signature using her ', 'A rede verifica a assinatura usando a sua ')}<span className="text-[#39B54A] font-bold">{m('public key', 'chave pública')}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-6 rounded-full bg-[#39B54A]/20 text-[#39B54A] flex items-center justify-center text-xs font-bold">4</span>
                      <span className="text-muted-foreground">{m('If valid, the transaction is accepted — proving Alice authorized it', 'Se for válida, a transação é aceite — provando que a Alice a autorizou')}</span>
                    </div>
                  </div>
                </div>
                <CalloutBox type="info" title={m('Why This Matters', 'Porque é Importante')}>
                  {m("Digital signatures guarantee authenticity (it came from Alice), integrity (the data wasn't altered), and non-repudiation (Alice cannot deny she signed it).", 'As assinaturas digitais garantem autenticidade (veio da Alice), integridade (os dados não foram alterados) e não-repúdio (a Alice não pode negar que assinou).')}
                </CalloutBox>
              </div>
            }
            keyPoints={[
              m('Based on asymmetric cryptography (public/private key pair)', 'Baseadas em criptografia assimétrica (par de chaves pública/privada)'),
              m('The private key signs; the public key verifies — never the reverse', 'A chave privada assina; a chave pública verifica — nunca o inverso'),
              m('Every Bitcoin transaction includes a digital signature', 'Cada transação Bitcoin inclui uma assinatura digital'),
              m('ECDSA (Elliptic Curve Digital Signature Algorithm) is used in Bitcoin', 'O Bitcoin usa o ECDSA (Elliptic Curve Digital Signature Algorithm)')
            ]}
          />
        </div>

        {/* ═══════ 8. TRANSACTIONS — THE FULL LIFECYCLE ═══════ */}
        <div id="s1-tx" className="h-full flex items-center justify-center p-12">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl font-bold text-foreground mb-2 text-center">{m('The Life of a Bitcoin Transaction', 'A Vida de uma Transação Bitcoin')}</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              {m('From wallet to blockchain — every step a transaction goes through before it becomes permanent history.', 'Da carteira à blockchain — cada passo que uma transação atravessa até se tornar história permanente.')}
            </p>

            {/* Fresco: 8-step horizontal timeline */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {/* Step 1 */}
              <div className="p-4 bg-gradient-to-br from-[#ED1C24]/15 to-transparent rounded-xl border border-[#ED1C24]/30 relative">
                <div className="size-8 rounded-full bg-[#ED1C24] text-white flex items-center justify-center text-sm font-bold mb-3">1</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Select UTXOs', 'Selecionar UTXOs')}</h4>
                <p className="text-xs text-muted-foreground">{m("The wallet scans your Unspent Transaction Outputs — previous payments you received that haven't been spent yet — and picks enough to cover the amount + fee.", 'A carteira analisa as suas Unspent Transaction Outputs — pagamentos anteriores que recebeu e ainda não gastou — e escolhe as suficientes para cobrir o montante + taxa.')}</p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-gradient-to-br from-[#ED1C24]/15 to-transparent rounded-xl border border-[#ED1C24]/30">
                <div className="size-8 rounded-full bg-[#ED1C24] text-white flex items-center justify-center text-sm font-bold mb-3">2</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Build Outputs', 'Construir Saídas')}</h4>
                <p className="text-xs text-muted-foreground">{m('Create the outputs: one paying the recipient, and a ', 'Crie as saídas: uma a pagar ao destinatário e uma ')}<span className="text-[#ED1C24] font-semibold">{m('change output', 'saída de troco')}</span>{m(' returning leftover funds back to your own address.', ' que devolve os fundos restantes ao seu próprio endereço.')}</p>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-gradient-to-br from-[#f59e0b]/15 to-transparent rounded-xl border border-[#f59e0b]/30">
                <div className="size-8 rounded-full bg-[#f59e0b] text-white flex items-center justify-center text-sm font-bold mb-3">3</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Set the Fee', 'Definir a Taxa')}</h4>
                <p className="text-xs text-muted-foreground">{m('Fee = Total Inputs − Total Outputs. Measured in ', 'Taxa = Total de Entradas − Total de Saídas. Medida em ')}<span className="font-mono text-[#f59e0b]">sat/vB</span>. {m('Higher fee → faster confirmation. The wallet estimates based on mempool congestion.', 'Taxa mais alta → confirmação mais rápida. A carteira estima com base no congestionamento do mempool.')}</p>
              </div>

              {/* Step 4 */}
              <div className="p-4 bg-gradient-to-br from-[#6366f1]/15 to-transparent rounded-xl border border-[#6366f1]/30">
                <div className="size-8 rounded-full bg-[#6366f1] text-white flex items-center justify-center text-sm font-bold mb-3">4</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Sign with Private Key', 'Assinar com a Chave Privada')}</h4>
                <p className="text-xs text-muted-foreground">{m('The wallet hashes the transaction and signs it using your ', 'A carteira faz o hash da transação e assina-a com a sua ')}<span className="text-[#6366f1] font-semibold">{m('ECDSA private key', 'chave privada ECDSA')}</span>. {m('This proves ownership of the UTXOs without revealing the key itself.', 'Isto comprova a posse das UTXOs sem revelar a própria chave.')}</p>
              </div>

              {/* Step 5 */}
              <div className="p-4 bg-gradient-to-br from-[#39B54A]/15 to-transparent rounded-xl border border-[#39B54A]/30">
                <div className="size-8 rounded-full bg-[#39B54A] text-white flex items-center justify-center text-sm font-bold mb-3">5</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Broadcast to Network', 'Difundir na Rede')}</h4>
                <p className="text-xs text-muted-foreground">{m('The signed transaction is sent to a connected node, which validates basic rules (format, signature, no double-spend) ', 'A transação assinada é enviada a um nó ligado, que valida as regras básicas (formato, assinatura, ausência de gasto duplo) ')}<span className="text-[#39B54A] font-semibold">{m('then relays it to peers', 'e depois retransmite-a aos pares')}</span>.</p>
              </div>

              {/* Step 6 */}
              <div className="p-4 bg-gradient-to-br from-[#39B54A]/15 to-transparent rounded-xl border border-[#39B54A]/30">
                <div className="size-8 rounded-full bg-[#39B54A] text-white flex items-center justify-center text-sm font-bold mb-3">6</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Enter the Mempool', 'Entrar no Mempool')}</h4>
                <p className="text-xs text-muted-foreground">{m('The transaction sits in the ', 'A transação permanece no ')}<span className="text-[#39B54A] font-semibold">{m('memory pool', 'memory pool')}</span>{m(' — a queue of unconfirmed transactions. Miners pick from the mempool, prioritizing higher-fee transactions.', ' — uma fila de transações por confirmar. Os mineradores escolhem do mempool, priorizando as transações de taxa mais alta.')}</p>
              </div>

              {/* Step 7 */}
              <div className="p-4 bg-gradient-to-br from-[#8b5cf6]/15 to-transparent rounded-xl border border-[#8b5cf6]/30">
                <div className="size-8 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-sm font-bold mb-3">7</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Mined into a Block', 'Minada num Bloco')}</h4>
                <p className="text-xs text-muted-foreground">{m('A miner includes it in a candidate block, solves the ', 'Um minerador inclui-a num bloco candidato, resolve o ')}<span className="text-[#8b5cf6] font-semibold">{m('Proof of Work puzzle', 'puzzle de Prova de Trabalho')}</span>{m(' (finding a valid nonce), and broadcasts the new block to the network.', ' (encontrando um nonce válido) e difunde o novo bloco pela rede.')}</p>
              </div>

              {/* Step 8 */}
              <div className="p-4 bg-gradient-to-br from-[#22d3ee]/15 to-transparent rounded-xl border border-[#22d3ee]/30">
                <div className="size-8 rounded-full bg-[#22d3ee] text-white flex items-center justify-center text-sm font-bold mb-3">8</div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m('Confirmed on Chain', 'Confirmada na Cadeia')}</h4>
                <p className="text-xs text-muted-foreground">{m('Other nodes verify and accept the block. Each new block added on top is a ', 'Os outros nós verificam e aceitam o bloco. Cada novo bloco acrescentado por cima é uma ')}<span className="text-[#22d3ee] font-semibold">{m('confirmation', 'confirmação')}</span>{m('. After 6 confirmations (~60 min), the transaction is considered irreversible.', '. Após 6 confirmações (~60 min), a transação é considerada irreversível.')}</p>
              </div>
            </div>

            {/* Summary bar */}
            <div className="flex items-center gap-1 w-full">
              <div className="flex-1 h-2 rounded-l-full bg-[#ED1C24]" />
              <div className="flex-1 h-2 bg-[#f59e0b]" />
              <div className="flex-1 h-2 bg-[#6366f1]" />
              <div className="flex-1 h-2 bg-[#39B54A]" />
              <div className="flex-1 h-2 bg-[#8b5cf6]" />
              <div className="flex-1 h-2 rounded-r-full bg-[#22d3ee]" />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1">
              <span>{m('Wallet (offline)', 'Carteira (offline)')}</span>
              <span>{m('Network (propagation)', 'Rede (propagação)')}</span>
              <span>{m('Blockchain (permanent)', 'Blockchain (permanente)')}</span>
            </div>
          </div>
        </div>

        <div className="h-full">
          <ConceptSlide
            title={m('The UTXO Model Explained', 'O Modelo UTXO Explicado')}
            description={m("Bitcoin doesn't have 'accounts' with balances. Instead, it tracks individual coins as Unspent Transaction Outputs — like physical bills in a wallet.", "O Bitcoin não tem 'contas' com saldos. Em vez disso, rastreia moedas individuais como Unspent Transaction Outputs — como notas físicas numa carteira.")}
            visual={
              <div className="space-y-4 w-full">
                <CalloutBox type="info" title={m('Think of UTXOs like cash', 'Pense nas UTXOs como dinheiro físico')}>
                  {m('If you owe someone 3 BTC but only have a 5 BTC UTXO, you spend the whole 5 BTC: 3 BTC → recipient, 2 BTC → back to yourself as change. The original 5 BTC UTXO is destroyed; two new UTXOs are created.', 'Se deve 3 BTC a alguém mas só tem uma UTXO de 5 BTC, gasta os 5 BTC todos: 3 BTC → destinatário, 2 BTC → volta para si como troco. A UTXO original de 5 BTC é destruída; duas novas UTXOs são criadas.')}
                </CalloutBox>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30 text-center">
                    <h4 className="font-bold text-[#ED1C24] mb-2">{m('Inputs (consumed)', 'Entradas (consumidas)')}</h4>
                    <div className="text-2xl font-mono font-bold text-foreground">5.0 BTC</div>
                    <p className="text-xs text-muted-foreground mt-1">{m('1 UTXO destroyed', '1 UTXO destruída')}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <span className="text-2xl">→</span>
                    <span className="text-[10px] mt-1">{m('Fee: 0.0001 BTC', 'Taxa: 0.0001 BTC')}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30 text-center">
                      <h4 className="font-bold text-[#39B54A] text-sm">{m('Recipient', 'Destinatário')}</h4>
                      <div className="text-lg font-mono font-bold text-foreground">3.0 BTC</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30 text-center">
                      <h4 className="font-bold text-[#6366f1] text-sm">{m('Change', 'Troco')}</h4>
                      <div className="text-lg font-mono font-bold text-foreground">1.9999 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              m("Your 'balance' is just the sum of all UTXOs your keys can spend", "O seu 'saldo' é apenas a soma de todas as UTXOs que as suas chaves podem gastar"),
              m('Each transaction destroys old UTXOs and creates new ones', 'Cada transação destrói UTXOs antigas e cria novas'),
              m('Fee = sum of inputs − sum of outputs (implicit, not a field)', 'Taxa = soma das entradas − soma das saídas (implícita, não é um campo)'),
              m('Wallets handle UTXO selection automatically; users never see this complexity', 'As carteiras gerem a seleção de UTXOs automaticamente; os utilizadores nunca veem esta complexidade')
            ]}
          />
        </div>

        {/* ═══════ 9. CONSENSUS MECHANISMS ═══════ */}

        {/* ── 9a. PROOF OF WORK deep-dive ── */}
        <div id="s1-consensus" className="h-full flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-1">
              <div className="size-10 rounded-full bg-[#ED1C24]/20 flex items-center justify-center text-xl">⛏️</div>
              <h2 className="text-3xl font-bold text-foreground">{m('Proof of Work (PoW)', 'Prova de Trabalho (PoW)')}</h2>
            </div>
            <p className="text-muted-foreground mb-6 ml-[52px]">
              {m('Miners compete in a brute-force race to find a nonce that produces a hash below the difficulty target. The winner earns the right to add the next block and collects the block reward + fees.', 'Os mineradores competem numa corrida por força bruta para encontrar um nonce que produza um hash abaixo do alvo de dificuldade. O vencedor ganha o direito de adicionar o próximo bloco e recebe a recompensa de bloco + taxas.')}
            </p>

            <ConsensusVisualization mechanism="pow" />

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="p-3 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
                <h4 className="text-xs font-bold text-[#39B54A] mb-1">{m('✓ Strengths', '✓ Pontos Fortes')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Battle-tested since 2009 (Bitcoin)', '• Testado em campo desde 2009 (Bitcoin)')}</li>
                  <li>{m('• Extremely costly to attack (51%)', '• Extremamente caro de atacar (51%)')}</li>
                  <li>{m('• Fully permissionless participation', '• Participação totalmente sem permissão')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#ED1C24]/10 rounded-lg border border-[#ED1C24]/30">
                <h4 className="text-xs font-bold text-[#ED1C24] mb-1">{m('✗ Weaknesses', '✗ Pontos Fracos')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Massive energy consumption (~150 TWh/yr)', '• Consumo energético massivo (~150 TWh/ano)')}</li>
                  <li>{m('• Slow block times (~10 min BTC)', '• Tempos de bloco lentos (~10 min BTC)')}</li>
                  <li>{m('• Mining pool centralization risk', '• Risco de centralização em mining pools')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
                <h4 className="text-xs font-bold text-[#6366f1] mb-1">{m('📊 Key Numbers', '📊 Números-Chave')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Block reward: 3.125 BTC (2024+)', '• Recompensa do bloco: 3.125 BTC (2024+)')}</li>
                  <li>{m('• Halving: every 210,000 blocks (~4 yr)', '• Halving: a cada 210.000 blocos (~4 anos)')}</li>
                  <li>{m('• Finality: probabilistic (~6 confirmations)', '• Finalidade: probabilística (~6 confirmações)')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── 9b. PROOF OF STAKE deep-dive ── */}
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-1">
              <div className="size-10 rounded-full bg-[#6366f1]/20 flex items-center justify-center text-xl">🔒</div>
              <h2 className="text-3xl font-bold text-foreground">{m('Proof of Stake (PoS)', 'Prova de Participação (PoS)')}</h2>
            </div>
            <p className="text-muted-foreground mb-6 ml-[52px]">
              {m("Validators lock tokens as collateral. The protocol randomly selects a proposer (weighted by stake), and a committee attests the block. Dishonest behavior is punished by slashing the validator's deposit.", 'Os validadores bloqueiam tokens como colateral. O protocolo seleciona aleatoriamente um proponente (ponderado pelo stake) e um comité atesta o bloco. Comportamento desonesto é punido com slashing do depósito do validador.')}
            </p>

            <ConsensusVisualization mechanism="pos" />

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="p-3 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
                <h4 className="text-xs font-bold text-[#39B54A] mb-1">{m('✓ Strengths', '✓ Pontos Fortes')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• 99.95% less energy than PoW', '• 99,95% menos energia do que PoW')}</li>
                  <li>{m('• Lower barrier (no hardware needed)', '• Barreira mais baixa (sem necessidade de hardware)')}</li>
                  <li>{m('• Built-in punishment (slashing)', '• Punição integrada (slashing)')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#ED1C24]/10 rounded-lg border border-[#ED1C24]/30">
                <h4 className="text-xs font-bold text-[#ED1C24] mb-1">{m('✗ Weaknesses', '✗ Pontos Fracos')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• "Rich get richer" centralization risk', '• Risco de centralização "o rico fica mais rico"')}</li>
                  <li>{m('• Nothing-at-stake problem (mitigated by slashing)', '• Problema do nothing-at-stake (mitigado pelo slashing)')}</li>
                  <li>{m('• Long-range attack vectors', '• Vetores de ataque a longo alcance')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
                <h4 className="text-xs font-bold text-[#6366f1] mb-1">{m('📊 Key Numbers', '📊 Números-Chave')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Ethereum: 32 ETH min. stake', '• Ethereum: stake mín. de 32 ETH')}</li>
                  <li>{m('• Block time: ~12 seconds (Ethereum)', '• Tempo de bloco: ~12 segundos (Ethereum)')}</li>
                  <li>{m('• Finality: 2 epochs (~12.8 minutes)', '• Finalidade: 2 epochs (~12,8 minutos)')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── 9c. DPoS & BFT deep-dive ── */}
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-1">
              <div className="size-10 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-xl">🗳️</div>
              <h2 className="text-3xl font-bold text-foreground">{m('Delegated PoS & BFT Variants', 'PoS Delegada e Variantes BFT')}</h2>
            </div>
            <p className="text-muted-foreground mb-6 ml-[52px]">
              {m('Token holders elect a small set of delegates who take turns producing blocks. Combined with Byzantine Fault Tolerance, this achieves instant finality and high throughput — at the cost of decentralization.', 'Os detentores de tokens elegem um pequeno conjunto de delegados que se alternam na produção de blocos. Combinado com Byzantine Fault Tolerance, isto consegue finalidade instantânea e alto débito — à custa da descentralização.')}
            </p>

            <ConsensusVisualization mechanism="dpos" />

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="p-3 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
                <h4 className="text-xs font-bold text-[#39B54A] mb-1">{m('✓ Strengths', '✓ Pontos Fortes')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Very fast block times (<1–3 sec)', '• Tempos de bloco muito rápidos (<1–3 seg)')}</li>
                  <li>{m('• Instant / absolute finality (no reorgs)', '• Finalidade instantânea / absoluta (sem reorgs)')}</li>
                  <li>{m('• High throughput (1,000+ TPS)', '• Alto débito (1.000+ TPS)')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#ED1C24]/10 rounded-lg border border-[#ED1C24]/30">
                <h4 className="text-xs font-bold text-[#ED1C24] mb-1">{m('✗ Weaknesses', '✗ Pontos Fracos')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• Small validator set → less decentralized', '• Conjunto pequeno de validadores → menos descentralizado')}</li>
                  <li>{m('• Vote-buying / cartel risk', '• Risco de compra de votos / cartel')}</li>
                  <li>{m('• Not sybil-resistant without token weight', '• Não resistente a sybil sem peso de tokens')}</li>
                </ul>
              </div>
              <div className="p-3 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
                <h4 className="text-xs font-bold text-[#6366f1] mb-1">{m('📊 Examples', '📊 Exemplos')}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>{m('• EOS: 21 block producers (DPoS)', '• EOS: 21 produtores de blocos (DPoS)')}</li>
                  <li>{m('• Cosmos/Tendermint: pBFT + PoS', '• Cosmos/Tendermint: pBFT + PoS')}</li>
                  <li>{m('• BNB Chain: 21 validators (PoSA)', '• BNB Chain: 21 validadores (PoSA)')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── 9d. Three-way comparison table ── */}
        <div className="h-screen flex items-center justify-center p-12">
          <div className="max-w-6xl w-full">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{m('Consensus Mechanisms — Side by Side', 'Mecanismos de Consenso — Lado a Lado')}</h2>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-bold text-muted-foreground w-[20%]">{m('Property', 'Propriedade')}</th>
                    <th className="text-center p-3 font-bold text-[#ED1C24] w-[26%]">{m('⛏️ Proof of Work', '⛏️ Prova de Trabalho')}</th>
                    <th className="text-center p-3 font-bold text-[#6366f1] w-[26%]">{m('🔒 Proof of Stake', '🔒 Prova de Participação')}</th>
                    <th className="text-center p-3 font-bold text-[#f59e0b] w-[28%]">{m('🗳️ DPoS / BFT', '🗳️ DPoS / BFT')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    [m("Block Producer", "Produtor de Blocos"), m("Miner with most hash power", "Minerador com maior poder de hash"), m("Randomly selected validator (weighted by stake)", "Validador selecionado aleatoriamente (ponderado pelo stake)"), m("Elected delegate (round-robin)", "Delegado eleito (round-robin)")],
                    [m("Security Budget", "Orçamento de Segurança"), m("Hardware + electricity cost", "Custo de hardware + eletricidade"), m("Locked token collateral (slashable)", "Colateral de tokens bloqueado (sujeito a slashing)"), m("Locked stake + voter trust", "Stake bloqueado + confiança dos eleitores")],
                    [m("Energy Use", "Uso de Energia"), m("Very high (~150 TWh/yr for BTC)", "Muito elevado (~150 TWh/ano para BTC)"), m("Negligible (~0.01 TWh)", "Negligenciável (~0,01 TWh)"), m("Negligible", "Negligenciável")],
                    [m("Block Time", "Tempo de Bloco"), m("~10 min (BTC)", "~10 min (BTC)"), m("~12 sec (ETH)", "~12 seg (ETH)"), m("<1–3 sec", "<1–3 seg")],
                    [m("Finality", "Finalidade"), m("Probabilistic (6 blocks ≈ 60 min)", "Probabilística (6 blocos ≈ 60 min)"), m("2 epochs (~12.8 min on ETH)", "2 epochs (~12,8 min em ETH)"), m("Instant / absolute", "Instantânea / absoluta")],
                    [m("Scalability", "Escalabilidade"), m("~7 TPS (BTC base layer)", "~7 TPS (camada base do BTC)"), m("~30 TPS (ETH base layer)", "~30 TPS (camada base do ETH)"), m("1,000+ TPS", "1.000+ TPS")],
                    [m("Decentralization", "Descentralização"), m("High (anyone can mine)", "Alta (qualquer um pode minerar)"), m("Medium (min stake required)", "Média (stake mínimo obrigatório)"), m("Low (few elected delegates)", "Baixa (poucos delegados eleitos)")],
                    [m("Attack Vector", "Vetor de Ataque"), m("51% of hash power", "51% do poder de hash"), m("33%+ of total stake", "33%+ do stake total"), m("Corrupt 2/3 of delegates", "Corromper 2/3 dos delegados")],
                    [m("Flagship Chain", "Cadeia de Referência"), "Bitcoin", m("Ethereum (post-Merge)", "Ethereum (pós-Merge)"), m("EOS, Cosmos, BNB Chain", "EOS, Cosmos, BNB Chain")],
                  ].map(([feature, pow, pos, dpos], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}>
                      <td className="p-3 font-bold text-foreground text-xs">{feature}</td>
                      <td className="p-3 text-center text-xs text-muted-foreground">{pow}</td>
                      <td className="p-3 text-center text-xs text-muted-foreground">{pos}</td>
                      <td className="p-3 text-center text-xs text-muted-foreground">{dpos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pedagogical note — The Trilemma (interactive exercise) */}
        <div className="h-full flex items-center justify-center p-12">
          <TrilemmaExercise />
        </div>

        {/* ═══════ CAPSTONE: CHAIN BUILDER ═══════ */}
        <div id="s1-chain-builder" className="h-full flex items-center justify-center p-8 lg:p-12">
          <ChainBuilderExercise />
        </div>

        {/* Final quiz */}
        <div id="s1-quiz" className="h-full">
          <QuizSlide
            question={m('What is the main advantage of Proof of Stake over Proof of Work?', 'Qual é a principal vantagem da Prova de Participação sobre a Prova de Trabalho?')}
            options={[
              { text: m('Significantly lower energy consumption', 'Consumo energético significativamente mais baixo'), correct: true },
              { text: m('Faster transaction processing', 'Processamento de transações mais rápido'), correct: false },
              { text: m('Better security against attacks', 'Melhor segurança contra ataques'), correct: false },
              { text: m('Complete anonymity', 'Anonimato completo'), correct: false }
            ]}
            explanation={m('Proof of Stake eliminates the need for energy-intensive mining, reducing electricity consumption by over 99% compared to Proof of Work. This makes it much more environmentally sustainable.', 'A Prova de Participação elimina a necessidade de mineração intensiva em energia, reduzindo o consumo elétrico em mais de 99% face à Prova de Trabalho. Isto torna-a muito mais sustentável a nível ambiental.')}
          />
        </div>

        {/* Quiz: transactions */}
        <div className="h-full">
          <QuizSlide
            question={m("In Bitcoin's UTXO model, what represents the transaction fee?", 'No modelo UTXO do Bitcoin, o que representa a taxa da transação?')}
            options={[
              { text: m('A fixed rate set by the Bitcoin protocol', 'Uma taxa fixa definida pelo protocolo Bitcoin'), correct: false },
              { text: m('The difference between total inputs and total outputs', 'A diferença entre o total de entradas e o total de saídas'), correct: true },
              { text: m('A percentage of the transaction value', 'Uma percentagem do valor da transação'), correct: false },
              { text: m('A mandatory payment to the network foundation', 'Um pagamento obrigatório à fundação da rede'), correct: false }
            ]}
            explanation={m('In the UTXO model, the fee is implicitly defined as the gap between the sum of inputs and the sum of outputs. Miners collect this difference as their reward for including the transaction in a block.', 'No modelo UTXO, a taxa é definida implicitamente como a diferença entre a soma das entradas e a soma das saídas. Os mineradores recolhem esta diferença como recompensa por incluírem a transação num bloco.')}
          />
        </div>

        {/* Quiz: hashing */}
        <div className="h-full">
          <QuizSlide
            question={m('What happens if you change a single character in the input of a SHA-256 hash?', 'O que acontece se alterar um único carácter na entrada de um hash SHA-256?')}
            options={[
              { text: m('Only the last few characters of the hash change', 'Apenas os últimos caracteres do hash mudam'), correct: false },
              { text: m('The hash changes slightly, proportional to the edit', 'O hash muda ligeiramente, proporcional à alteração'), correct: false },
              { text: m('The entire hash output changes unpredictably (avalanche effect)', 'Todo o hash muda de forma imprevisível (efeito avalanche)'), correct: true },
              { text: m('The hash stays the same if the change is small enough', 'O hash mantém-se se a alteração for suficientemente pequena'), correct: false }
            ]}
            explanation={m('Cryptographic hash functions exhibit the avalanche effect: even a 1-bit change in the input produces a completely different output. This makes it impossible to reverse-engineer or predict hash values.', 'As funções de hash criptográficas exibem o efeito avalanche: até uma alteração de 1 bit na entrada produz uma saída completamente diferente. Isto torna impossível reverter ou prever os valores de hash.')}
          />
        </div>

        {/* Quiz: Merkle trees */}
        <div className="h-full">
          <QuizSlide
            question={m('Why are Merkle trees used in blockchains instead of hashing all transactions together?', 'Porque é que as árvores de Merkle são usadas nas blockchains em vez de fazer hash de todas as transações em conjunto?')}
            options={[
              { text: m('They produce shorter hashes', 'Produzem hashes mais curtos'), correct: false },
              { text: m('They allow verifying a single transaction without downloading the whole block', 'Permitem verificar uma única transação sem descarregar o bloco inteiro'), correct: true },
              { text: m('They are faster to compute than a single hash', 'São mais rápidas de calcular do que um único hash'), correct: false },
              { text: m('They encrypt the transaction data', 'Encriptam os dados da transação'), correct: false }
            ]}
            explanation={m('Merkle trees enable Simplified Payment Verification (SPV). A light client only needs the Merkle proof (a few hashes along the path) to confirm a transaction is in a block — no need to download every transaction.', 'As árvores de Merkle permitem a Verificação Simplificada de Pagamentos (SPV). Um cliente leve só precisa da prova de Merkle (alguns hashes ao longo do caminho) para confirmar que uma transação está num bloco — sem precisar de descarregar todas as transações.')}
          />
        </div>

        {/* Quiz: wallets & keys */}
        <div className="h-full">
          <QuizSlide
            question={m('What does a cryptocurrency wallet actually store?', 'O que é que uma carteira de criptomoeda guarda realmente?')}
            options={[
              { text: m('Your coins and token balances', 'As suas moedas e saldos de tokens'), correct: false },
              { text: m('A copy of the entire blockchain', 'Uma cópia da blockchain inteira'), correct: false },
              { text: m('Your private and public cryptographic keys', 'As suas chaves criptográficas privada e pública'), correct: true },
              { text: m('Your transaction history only', 'Apenas o seu histórico de transações'), correct: false }
            ]}
            explanation={m("Wallets store your private key (used to sign transactions) and derive your public key and address from it. Your 'balance' is calculated from UTXOs on the blockchain — the wallet just holds the keys that prove ownership.", "As carteiras guardam a sua chave privada (usada para assinar transações) e dela derivam a chave pública e o endereço. O seu 'saldo' é calculado a partir das UTXOs na blockchain — a carteira apenas guarda as chaves que provam a posse.")}
          />
        </div>

        {/* Quiz: blockchain trilemma */}
        <div className="h-full">
          <QuizSlide
            question={m('According to the blockchain trilemma, which property does DPoS/BFT typically sacrifice?', 'Segundo o trilema da blockchain, qual a propriedade que o DPoS/BFT tipicamente sacrifica?')}
            options={[
              { text: m('Security', 'Segurança'), correct: false },
              { text: m('Scalability', 'Escalabilidade'), correct: false },
              { text: m('Decentralization', 'Descentralização'), correct: true },
              { text: m('All three are equally achieved', 'As três são igualmente alcançadas'), correct: false }
            ]}
            explanation={m('DPoS and BFT variants achieve high speed and instant finality by relying on a small, elected set of validators. This greatly reduces decentralization — fewer nodes means faster consensus but more centralized control.', 'O DPoS e as variantes BFT conseguem alta velocidade e finalidade instantânea ao depender de um pequeno conjunto eleito de validadores. Isto reduz fortemente a descentralização — menos nós significa consenso mais rápido mas controlo mais centralizado.')}
          />
        </div>

        {/* Quiz: blocks */}
        <div className="h-full">
          <QuizSlide
            question={m("What is the purpose of the 'previous hash' field in a block header?", "Qual é a finalidade do campo 'hash anterior' no cabeçalho de um bloco?")}
            options={[
              { text: m("It encrypts the block's transaction data", 'Encripta os dados das transações do bloco'), correct: false },
              { text: m('It links the block to the one before it, forming the chain', 'Liga o bloco ao anterior, formando a cadeia'), correct: true },
              { text: m("It stores the miner's identity", 'Guarda a identidade do minerador'), correct: false },
              { text: m('It determines the block reward amount', 'Determina o valor da recompensa do bloco'), correct: false }
            ]}
            explanation={m('Each block header contains the hash of the previous block, creating a cryptographic chain. If anyone tampers with an earlier block, its hash changes, breaking the link and invalidating every subsequent block.', 'Cada cabeçalho de bloco contém o hash do bloco anterior, criando uma cadeia criptográfica. Se alguém adulterar um bloco anterior, o seu hash muda, quebrando a ligação e invalidando todos os blocos seguintes.')}
          />
        </div>

        {/* Quiz: block alteration */}
        <div className="h-full">
          <QuizSlide
            question={m('What happens if someone tries to alter a transaction in a previous block?', 'O que acontece se alguém tentar alterar uma transação num bloco anterior?')}
            options={[
              { text: m("The block's hash would change, breaking the chain", 'O hash do bloco mudaria, quebrando a cadeia'), correct: true },
              { text: m('Nothing, previous blocks can be freely edited', 'Nada, os blocos anteriores podem ser editados livremente'), correct: false },
              { text: m('Only the miner who created the block would notice', 'Apenas o minerador que criou o bloco daria conta'), correct: false },
              { text: m('The network would automatically repair the chain', 'A rede repararia automaticamente a cadeia'), correct: false }
            ]}
            explanation={m("Because each block's hash is included in the next block, changing any data would change the hash and break the cryptographic link. The network would reject the altered chain.", 'Como o hash de cada bloco está incluído no bloco seguinte, alterar qualquer dado mudaria o hash e quebraria a ligação criptográfica. A rede rejeitaria a cadeia adulterada.')}
          />
        </div>

        {/* Quiz: seed phrase */}
        <div className="h-full">
          <QuizSlide
            question={m('In a self-custodial wallet, what happens if you lose your seed phrase?', 'Numa carteira de auto-custódia, o que acontece se perder a sua frase semente?')}
            options={[
              { text: m('You can contact customer support to recover your funds', 'Pode contactar o apoio ao cliente para recuperar os fundos'), correct: false },
              { text: m('Your funds are permanently lost — no one can recover them', 'Os seus fundos ficam permanentemente perdidos — ninguém os pode recuperar'), correct: true },
              { text: m('The blockchain automatically generates a new seed phrase', 'A blockchain gera automaticamente uma nova frase semente'), correct: false },
              { text: m('Your funds are returned to the sender', 'Os seus fundos são devolvidos ao remetente'), correct: false }
            ]}
            explanation={m('In self-custodial wallets, the seed phrase is the only way to derive your private keys. There is no company or authority that can recover them. This is the trade-off for full control: total responsibility.', 'Nas carteiras de auto-custódia, a frase semente é a única forma de derivar as suas chaves privadas. Não existe nenhuma empresa ou autoridade que as possa recuperar. Esta é a contrapartida do controlo total: responsabilidade total.')}
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s1-takeaways" className="h-full">
          <TakeawaySlide
            title={m('Section 1 — Key Takeaways', 'Secção 1 — Conclusões-Chave')}
            takeaways={[
              m('DLT replaces centralized databases with shared, replicated ledgers — blockchain is the most prominent type', 'A DLT substitui as bases de dados centralizadas por registos partilhados e replicados — a blockchain é o tipo mais conhecido'),
              m('Cryptographic hashing creates one-way fingerprints that link blocks and detect tampering', 'O hashing criptográfico cria impressões digitais unidirecionais que ligam blocos e detetam adulterações'),
              m('Merkle Trees enable efficient verification of transactions without downloading the full chain', 'As Árvores de Merkle permitem verificar transações de forma eficiente sem descarregar a cadeia completa'),
              m('Blocks contain a header (prev hash, timestamp, nonce) and a body (transaction data)', 'Os blocos contêm um cabeçalho (hash anterior, carimbo temporal, nonce) e um corpo (dados de transações)'),
              m('Wallets store keys, not coins — understanding custodial vs self-custodial trade-offs is essential', 'As carteiras guardam chaves, não moedas — perceber os trade-offs entre custódia e auto-custódia é essencial'),
              m('Digital signatures prove transaction authenticity without revealing private keys', 'As assinaturas digitais provam a autenticidade da transação sem revelar as chaves privadas'),
              m('Transactions use UTXOs, digital signatures, and fees to move value securely', 'As transações usam UTXOs, assinaturas digitais e taxas para mover valor com segurança'),
              m('No consensus mechanism is perfect — each optimizes for different trade-offs', 'Nenhum mecanismo de consenso é perfeito — cada um otimiza diferentes compromissos')
            ]}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
