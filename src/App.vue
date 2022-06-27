<template>
	<div>
		<add-count @add="addCount" />
		{{ count }}
		<check-box :selected="itemValue" :items="items" @changed="onChanged" />
		{{ showValue }}
	</div>
</template>

<script>
// 自作コンポーネントを読み込み
import AddCount from "./components/Count.vue";
import CheckBox from "./components/CheckBox.vue";

export default {
	components: { AddCount, CheckBox },
	data() {
		return {
			count: 0,
			itemValue: "",
			items: ["ばなな", "りんご", "ぶどう"],
		};
	},
	computed: {
		showValue() {
			return "選択中: " + this.itemValue;
		},
	},
	mounted: function () {
		// デフォルトの選択肢を設定
		this.itemValue = "ばなな";
	},
	methods: {
		addCount(count) {
			// SubComponentの結果を受け取り、自身のdataにセットする
			this.count = count;
		},
		onChanged(value) {
			// SubComponentのCheckBoxの選択中を親コンポーネントに反映
			this.itemValue = value;
		},
	},
};
</script>
