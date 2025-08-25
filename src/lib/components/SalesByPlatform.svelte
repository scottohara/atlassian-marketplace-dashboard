<script lang="ts">
	import Pill from "./Pill.svelte";
	import Totals from "./Totals.svelte";
	import type { TotalsByPlatform } from "$lib/api/client";

	const { sales }: { sales: TotalsByPlatform } = $props();

</script>

Sales By Platform
<section>
	<Pill color={0 === sales.Cloud.revenue ? "grey" : "blue"}>
		<span>Cloud</span>
		<Totals {...sales.Cloud}/>
	</Pill>
	<Pill color={0 === sales["Data Center"].revenue ? "grey" : "purple"}>
		<span>Data Center</span>
		<Totals {...sales["Data Center"]}/>
	</Pill>
	<Pill color={0 === sales.Server.revenue ? "grey" : "red"}>
		<span>Server</span>
		<Totals {...sales.Server}/>
	</Pill>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		span {
			margin-right: auto;
		}
	}
</style>