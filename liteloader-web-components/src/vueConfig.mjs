const elements = [
	'setting-section',
	'setting-panel',
	'setting-list',
	'setting-item',
	'setting-select',
	'setting-option',
	'setting-switch',
	'setting-button',
	'setting-text',
	'setting-link',
	'setting-divider',
	'setting-modal'
];

export default { isCustomElement: (tag) => elements.includes(tag) }
