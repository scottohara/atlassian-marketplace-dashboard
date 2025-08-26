<script lang="ts">
	const { loading }: { loading: boolean } = $props();

</script>

{#if loading}
	<div class="loading">
		<div class="bar"></div>
	</div>
{/if}

<style>
	.loading {
		--surface-loading: oklab(0% 0 0 / 0.08);

		width: 100%;
		height: 5px;
		background: var(--surface-loading);
		overflow: hidden;
		border-radius: 999px;

		.bar {
			--loading-bar: color-mix(in oklch, var(--green) 45%, transparent);

			height: 5px;
			width: 40%;
			background: linear-gradient(90deg, transparent, var(--loading-bar), transparent);
			transform: translateX(-100%);
			animation: pingpong 1.4s infinite ease-in-out alternate;
		}
	}

	@keyframes pingpong {
		0% { transform: translateX(-50%); }
		100% { transform: translateX(160%); }
	}
</style>