<div>
  <div class="stats-wrapper">
  <div><p>MIA Pool 9</p><p>Current Pool</p></div>
  <div><p class="stx-logo"><img src="/icons/stx.svg"/>5942</p><p>Total Raised STX</p></div>
  <div><p>#43353</p><p>Current Block</p></div>
  <div><p>#43597</p><p>Contributions Open Until Block</p></div>
  <div><p>0</p><p>You have not contributed</p></div>
  <div><p>0</p><p class="coin-logo"><img src="/citycoins/MIA.svg"/>MIA Won</p></div>
</div>
</div>


<style>
.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;

}

.stats-wrapper div {
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 141px;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 10px;
  margin: auto;
}

.stats-wrapper div:first-child {
  background: linear-gradient(149.52deg, #384CFF 8.64%, #FF38D3 86.61%);
background-blend-mode: lighten;
border-radius: 10px;
}



.stats-wrapper div p:first-child {
  padding-bottom: 15px;
  font-size: 2.5rem;
}

.stats-wrapper div p:nth-child(2) {
  font-size: 1.25rem;
}

.stx-logo {
  display: flex;
  gap: 4px;
}

.stx-logo img {
  width: 25px;
  
}

.coin-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coin-logo img {
  width: 30px;
}
</style>