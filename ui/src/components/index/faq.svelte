<script>
  let toggle1 = false;
  let toggle2 = false;
  let toggle3 = false;
  let toggle4 = false;


</script>

<div class="faq-wrapper">
<h3>Frequently Asked Questions (FAQ)</h3>
<div class="faq-items-wrapper">
  <div class="faq" on:click={() => (toggle1 = !toggle1)}>
    <p> What is Syvita Mining?</p>
    <img class={toggle1 ? 'chevron-up' : 'chevron'}  src='/icons/chevron-up.svg'/>
  </div>

  <div class={toggle1 ? "faq-description" : "faq-description-hidden"}>Syvita Mining is a <a href="/pool/mia">decentralized mining pool</a> for CityCoins. We utilize a smart contract to handle all aspects of mining, claiming, and distributing won CityCoins. Funds contributed to our pools go directly into the smart contract. These funds can only be utilized for mining. After mining is completed and blocks are claimed, the newly minted CityCoins are held by the smart contract until you claim them. Your share of the rewards is directly proportional to your contribution relative to the total size of the pool. Benefits of this service include a high level of decentralization, smart contract custody so you can rest assured your funds are secure, and regular liquidity. On average pool participants are able to claim won CityCoins daily.</div>


<div class="faq" on:click={() => (toggle2 = !toggle2)}>
  <p>How does CityCoins mining work</p>
  <img class={toggle2 ? 'chevron-up' : 'chevron'}  src='/icons/chevron-up.svg'/>
</div>
<div class={toggle2 ? "faq-description" : "faq-description-hidden"}>CityCoins mining happens through a process known as <a href="https://github.com/jcnelson/poxl">Proof of Transfer Lite (PoXL)</a>. PoXL does not require any specialized hardware like Bitcoin mining. Instead, miners bid STX in a competition to mint a new block of CityCoins. Winners are chosen by a verifiable random function (VRF), with a miner’s probability of winning being directly proportional to the size of their bid relative to total bids. The more STX you bid on a block, the higher your chances of winning a block, but also the higher the cost of the block. When mining, all STX bids are irrevocably redistributed, with 70% going to CityCoins stackers and 30% going to a designated wallet for the benefit of the nominal city. Mining individually can be time-consuming and potentially risky, especially for miners deploying small amounts of STX. At Syvita Mining, we are continuously monitoring block bids and market data (flex Matts expertise here) to make sure we are mining as efficiently as we can, to join one of our pools the minimum contribution is just 40 STX.</div>

<div class="faq" on:click={() => (toggle3 = !toggle3)}>
  <p>What is stacking?</p>
  <img class={toggle3 ? 'chevron-up' : 'chevron'}  src='/icons/chevron-up.svg'/>
</div>
<div class={toggle3 ? "faq-description" : "faq-description-hidden"}><a href="/stack">CityCoins stacking</a> is the process in which you can lock your CityCoins in a smart contract to receive a portion of the STX spent by miners; 70% of all miner bids are redistributed to stackers. With stacking, you are being paid a yield in exchange for giving up liquidity. Stacking occurs in cycles. You can stack between 1 and 32 cycles. One cycle lasts 2100 Stacks blocks: approximately 2 weeks. When you stack your CityCoins, they will be locked up for the number of cycles you specify. STX rewards can be claimed at the end of each cycle in which your CityCoins are stacked. Stacked CityCoins can be claimed after the number of cycles you have stacked for have completed.</div>

<div class={toggle4 ? "faq" : "faq-last"} on:click={() => (toggle4 = !toggle4)}>
  <p>How to get STX?</p>
  <img class={toggle4 ? 'chevron-up' : 'chevron'}  src='/icons/chevron-up.svg'/>
</div>
<div class={toggle4 ? "faq-description" : "faq-description-hidden"}>In order to buy Stacks it is first important you first have a wallet. The most popular wallet is the <a href="https://www.hiro.so/wallet/install-web">Hiro browser wallet</a> which is a chrome extension. Once you have completed the setup of your wallet you can purchase Stacks directly in the wallet.  
</div>
</div>
</div>


<style>

  h3 {
    font-size: 1.5rem;
    padding-bottom: 20px;
  }
  .faq-wrapper {
    max-width: 1170px;
		margin: auto;
    padding-top: 50px;
  }

  .faq-items-wrapper {
    border: 1px solid gray;
    max-width: 800px;
    border-radius: 10px;

    padding: 0 20px;
  }

  .faq {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid white;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .faq-last {
    width: 100%;
    height: 60px;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

 
  

  .faq-description {
    padding: 10px 0;
    line-height: 1.4rem;
  }

  .faq-description-hidden {
    display: none;
  }


 .chevron  {
    width: 25px;
    height: 25px;
    filter: invert(100%) sepia(99%) saturate(1%) hue-rotate(199deg) brightness(108%) contrast(100%);
    transform: rotate(180deg);
  }

  .chevron-up {
    width: 25px;
    height: 25px;
    filter: invert(100%) sepia(99%) saturate(1%) hue-rotate(199deg) brightness(108%) contrast(100%);
  }

  a {
    text-decoration: underline;
  }
</style>