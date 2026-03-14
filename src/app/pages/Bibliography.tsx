import { ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  url: string;
  description: string;
  tag: string;
  tagColor: string;
}

const resources: Resource[] = [
  // Foundational
  {
    title: "Bitcoin Whitepaper — Satoshi Nakamoto",
    url: "https://bitcoin.org/bitcoin.pdf",
    description: "The original 9-page paper that started it all. Surprisingly readable and essential for any blockchain student.",
    tag: "Must-Read",
    tagColor: "#ED1C24",
  },
  {
    title: "But how does Bitcoin actually work? — 3Blue1Brown",
    url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4",
    description: "The best visual explanation of Bitcoin's cryptography, mining, and consensus in 26 minutes.",
    tag: "Video",
    tagColor: "#6366f1",
  },
  {
    title: "Blockchain Demo — Anders Brownworth",
    url: "https://andersbrownworth.com/blockchain/",
    description: "Interactive visual demo of blocks, hashing, and mining. Great for building intuition on how a blockchain works.",
    tag: "Interactive",
    tagColor: "#39B54A",
  },
  {
    title: "Learn Me a Bitcoin",
    url: "https://learnmeabitcoin.com/",
    description: "Incredibly detailed, well-illustrated guide to every technical aspect of Bitcoin — from transactions to script opcodes.",
    tag: "Deep Dive",
    tagColor: "#f59e0b",
  },
  // Courses & Learning
  {
    title: "Mastering Bitcoin — Andreas Antonopoulos (free online)",
    url: "https://github.com/bitcoinbook/bitcoinbook",
    description: "The definitive technical book on Bitcoin. Open source. Covers keys, transactions, mining, and the network protocol.",
    tag: "Book",
    tagColor: "#8b5cf6",
  },
  {
    title: "Mastering Ethereum — Andreas Antonopoulos & Gavin Wood",
    url: "https://github.com/ethereumbook/ethereumbook",
    description: "The Ethereum equivalent. Covers smart contracts, EVM, Solidity, DeFi building blocks, and more.",
    tag: "Book",
    tagColor: "#8b5cf6",
  },
  {
    title: "MIT 15.S12 — Blockchain and Money (Gary Gensler)",
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn",
    description: "Full MIT course on blockchain technology and its applications in finance. 24 lectures, completely free.",
    tag: "Course",
    tagColor: "#ED1C24",
  },
  {
    title: "CryptoZombies",
    url: "https://cryptozombies.io/",
    description: "Learn Solidity by building a zombie game. Fun, gamified introduction to smart contract development.",
    tag: "Interactive",
    tagColor: "#39B54A",
  },
  // Visualization & Tools
  {
    title: "Blockchain Explorer — Mempool.space",
    url: "https://mempool.space/",
    description: "Beautiful real-time visualization of Bitcoin's mempool, blocks, and transactions. See the blockchain live.",
    tag: "Tool",
    tagColor: "#22d3ee",
  },
  {
    title: "Etherscan — Ethereum Explorer",
    url: "https://etherscan.io/",
    description: "Explore Ethereum transactions, smart contracts, tokens, and DeFi protocols in real time.",
    tag: "Tool",
    tagColor: "#22d3ee",
  },
  {
    title: "SHA-256 Hash — Online Tool",
    url: "https://emn178.github.io/online-tools/sha256.html",
    description: "Quick online SHA-256 calculator. Useful for experimenting with hash functions.",
    tag: "Tool",
    tagColor: "#22d3ee",
  },
  // Fun & Culture
  {
    title: "The Bitcoin Standard — Saifedean Ammous",
    url: "https://saifedean.com/thebitcoinstandard/",
    description: "A deep economic and historical argument for Bitcoin as sound money. Thought-provoking regardless of your stance.",
    tag: "Book",
    tagColor: "#8b5cf6",
  },
  {
    title: "Whiteboard Crypto — YouTube",
    url: "https://www.youtube.com/@WhiteboardCrypto",
    description: "Short animated explainers on DeFi, NFTs, DAOs, Layer 2s and more. Great for visual learners.",
    tag: "Video",
    tagColor: "#6366f1",
  },
  {
    title: "Finematics — YouTube",
    url: "https://www.youtube.com/@Finematics",
    description: "High-quality animated explanations of DeFi protocols, liquidity pools, yield farming, and Ethereum concepts.",
    tag: "Video",
    tagColor: "#6366f1",
  },
  {
    title: "Bitcoin Magazine",
    url: "https://bitcoinmagazine.com/",
    description: "Stay up to date with Bitcoin news, technical developments, and industry analysis.",
    tag: "News",
    tagColor: "#f59e0b",
  },
  // Visual & Interactive
  {
    title: "TxCity — Watch Bitcoin & Ethereum Transactions Live",
    url: "https://txcity.io/v/eth-btc",
    description: "Mesmerizing real-time visualization of BTC and ETH transactions as passengers boarding buses (blocks). A beautiful way to see the blockchain in action.",
    tag: "Visual",
    tagColor: "#39B54A",
  },
  {
    title: "Quo Vadis Web3 — Blockchain Research Report",
    url: "https://quovadis.webthree.rs/",
    description: "Comprehensive research report exploring where Web3 is heading — covering DeFi, NFTs, DAOs, regulation, and emerging trends. Great for understanding the bigger picture.",
    tag: "Research",
    tagColor: "#f59e0b",
  },
  {
    title: "Blockchain.com Explorer — Visual Block Explorer",
    url: "https://www.blockchain.com/explorer",
    description: "Clean, visual Bitcoin and Ethereum block explorer. Explore blocks, transactions, and addresses with clear graphs and stats.",
    tag: "Tool",
    tagColor: "#22d3ee",
  },
  {
    title: "Bitfeed — Real-Time Bitcoin Block Visualizer",
    url: "https://bitfeed.live/",
    description: "Watch Bitcoin transactions appear in real time as colorful floating bubbles sized by value. Hypnotic and educational.",
    tag: "Visual",
    tagColor: "#39B54A",
  },
  {
    title: "Txstreet — Blockchain Transaction Visualizer",
    url: "https://txstreet.com/",
    description: "Animated visualization of pending transactions as people waiting to board a bus (the next block). Compare BTC, ETH, and other chains side by side.",
    tag: "Visual",
    tagColor: "#39B54A",
  },
  {
    title: "DeFi Llama — DeFi Analytics Dashboard",
    url: "https://defillama.com/",
    description: "The most comprehensive DeFi analytics platform. Track Total Value Locked (TVL) across all chains and protocols with beautiful charts.",
    tag: "Tool",
    tagColor: "#22d3ee",
  },
  {
    title: "Ultrasound.money — Ethereum Supply Dashboard",
    url: "https://ultrasound.money/",
    description: "Real-time visualization of ETH issuance, burn rate, and supply dynamics since The Merge. Beautiful animated charts.",
    tag: "Visual",
    tagColor: "#39B54A",
  },
];

export function Bibliography() {
  return (
    <div className="size-full overflow-y-auto">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/30 mb-4">
            <span className="text-[#ED1C24] font-bold">📖 Bibliography</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Resources to Keep Learning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of the best books, videos, tools, and interactive resources
            to deepen your understanding of Bitcoin and blockchain technology.
          </p>
        </div>

        <div className="space-y-4">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-[#ED1C24]/50 hover:shadow-lg transition-all group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-foreground group-hover:text-[#ED1C24] transition-colors">
                    {r.title}
                  </h3>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: r.tagColor + '20', color: r.tagColor }}
                  >
                    {r.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </div>
              <ExternalLink className="size-5 text-muted-foreground group-hover:text-[#ED1C24] flex-shrink-0 mt-1 transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            "An investment in knowledge pays the best interest." — Benjamin Franklin
          </p>
        </div>
      </div>
    </div>
  );
}
