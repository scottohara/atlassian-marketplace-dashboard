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
		width: 100%;
		height: 5px;
		background: var(--loading-bg-color);
		overflow: hidden;
		border-radius: 999px;

		.bar {
			height: 5px;
			width: 40%;
			background: linear-gradient(90deg, transparent, var(--loading-bar-color), transparent);
			transform: translateX(-100%);
			animation: pingpong 1.4s infinite ease-in-out alternate;
		}
	}

	@keyframes pingpong {
		0% { transform: translateX(-50%); }
		100% { transform: translateX(160%); }
	}
</style>