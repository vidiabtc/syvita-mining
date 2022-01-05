<script>
  import { getStackingCycleStats, getBlockHeight, getUserId, getStackingReward } from '$lib/apiCalls';
	import { user, city } from '$lib/stores.js';
  import { getStxAddress } from '$lib/auth';

  $: stxAddress = getStxAddress($user);
  $: userId = stxAddress ? getUserId($city, stxAddress) : null;
  // $: userId = 50;



  $: stackingCycleStats = getStackingCycleStats($city);
  $: blockHeight = getBlockHeight($city);
  
  // $: stackingReward = userId ? getStackingReward($city, userId, cycle) : null;
</script>

<div class="stack-cycle-tool">
  <div class="table-wrapper">
    <table>
      <tr>
        <th>Stack Cycle</th>
        <th>MIA Stacked</th>
        <th>STX Claimed</th>
        <th>Claim Date</th>
      </tr>
      {#await userId}
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        {:then userId}
          {#await stackingCycleStats}
          <h1>loading ...</h1>
          {:then cycles}
            {#each Object.keys(cycles).reverse() as cycle}
              {#await getStackingReward($city, userId, cycle)}
              <tr>
                <td />
                <td />
                <td />
                <td />
              </tr>
              {:then reward}
                <tr>
                  <td>Cycle {cycle}</td>
                  <td >0</td>
                  <td>0</td>
                  <td>{(Math.floor(cycles.claimableStx / 10000) / 100).toLocaleString()} STX to claim</td>
                </tr>
              {/await}

              <!-- content here -->
            {/each}
          {/await}
       {/await}
      </table>
  </div>
</div>



<style>

  .stack-cycle-tool {
    margin-top: 20px;
  }

.table-wrapper {
  margin-top: 100px;
	width: 1170px;
	height: 400px;
	margin: auto;
  overflow: hidden;
	margin-bottom: 30px;



}
	table, th, td {
		border: 1px solid #444D66;
		border-collapse: collapse;

	}

	table {
		width: 1170px;
		height: 259px;
		margin: auto;

	}


	table tr {
		width: 302px;
		height: 58px;
		text-align: center;
	}

	table tr td {
		text-align: center;
		width: 302px;
	}

</style>