<template>
	<dev>
		<dev>childComp -> {{ childComp }}</dev
		><br /><br />
		<dev><button @click="onClick">[Click!!]</button></dev>
	</dev>
</template>

<script>
export default {
	name: "HelloWorld",
	props: { childComp: String }, // propsで親コンポから値を取得
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		onClick() {
			this.count = ++this.count;
			this.$emit("add", this.count);
		},
	},
};
</script>
