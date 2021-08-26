(function() {
Vue.component('iam-btn', {
	props: ['mods', 'titleIfDisabled', 'disabled'],
	template: '<button :iam-btn="iamMods" :disabled="disabled" :iam-btn-title="mixTitle" :title="ttl"><slot></slot></button>',
	computed: {
		// iam-btn attribute should exist anyway
		iamMods: function () {
			return this.mods || '';
		},
		mixTitle: function () {
			if (!this.hasTitleInSlot) {
				return '';
			}
		},
		ttl: function () {
			if (typeof this.disabled != 'undefined') {
				return this.titleIfDisabled;
			}
		}
	},
	data: function () {
		return {
			hasTitleInSlot: false,
		};
	},
	mounted: function() {
		var slotContent = this.$slots.default[0].elm;
		if(slotContent && slotContent.outerHTML) {
			this.hasTitleInSlot = slotContent.outerHTML.match(/iam-btn-title[^-]/g).length > 0;
		}
	}
});
})();
