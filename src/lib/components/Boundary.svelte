<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		error: Error | null;
		children?: Snippet;
	}

	const { error, children }: Props = $props();

</script>

{#if error}
	<p class="error">{error.message}</p>
{:else}
	{@render children?.()}
{/if}

<style>
	.error {
		font-size: 2rem;
		font-weight: 500;
		margin: 0;
		color: var(--text-error);
	}
</style>