<script>
  import { canClaimMiningRewardTest } from "$lib/apiCalls";


  const checkAll = async () => {
    let startingBlock = 46747;
    for (let i = startingBlock; i <= startingBlock + 200; i++) {
      await canClaimMiningRewardTest(i)
    }
    console.log('DONE')
  }
  
</script>

<h1>Test Claim</h1>

<button on:click={checkAll}>Can Claim</button>


