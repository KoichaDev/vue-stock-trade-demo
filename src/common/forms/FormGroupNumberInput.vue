<template>
	<div :class="className">
		<label :for="id">
			BMW
			<span>(Price): {{ label }}</span>
		</label>
		<input
			type="number"
			:id="id"
			placeholder="quantity"
			@input="$emit('input', parseFloat($event.target.value))"
		/>
		<button class="btn btn-primary">Buy</button>
	</div>
</template>

<script>
export default {
	props: {
		id: String,
		className: {
			type: String,
			default: '[ form-group ]',
		},
		label: String,
		value: {
			type: Number,
		},
	},
};
</script>
