import {
	settingSection,
	settingPanel,
	settingList,
	settingItem,
	settingSelect,
	settingOption,
	settingSwitch,
	settingButton,
	settingText,
	settingLink,
	settingDivider,
	settingModal
} from './index';

declare module '@vue/runtime-dom' {
	export interface GlobalComponents {
		'setting-section': settingSection;
		'setting-panel': settingPanel;
		'setting-list': settingList;
		'setting-item': settingItem;
		'setting-select': settingSelect;
		'setting-option': settingOption;
		'setting-switch': settingSwitch;
		'setting-button': settingButton;
		'setting-text': settingText;
		'setting-link': settingLink;
		'setting-divider': settingDivider;
		'setting-modal': settingModal;
	}
}
