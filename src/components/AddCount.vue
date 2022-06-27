<template>
	<dev>
		<p><v-btn @click="onClick">Click!!</v-btn></p>
	</dev>
</template>

<script>
export default {
	name: "AddCount",
	props: ["itemValue"], // propsで親コンポから値を取得
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		onClick() {
			// SubComponent の結果を送る
			this.count = ++this.count;
			this.$emit("add", this.count);
		},
	},
};
</script>
