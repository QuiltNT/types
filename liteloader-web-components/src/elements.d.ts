// https://liteloaderqqnt.github.io/docs/web-components.html

declare global {
	interface HTMLElementTagNameMap {
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

/** 选项分节 */
export interface settingSection extends HTMLDivElement {
	/** 标题 */
	dataTitle?: string;

	setTitle(title: string): void;
	getTitle(): string;
}

/** 选项容器 */
export interface settingPanel extends HTMLDivElement {
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;

	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
}

/** 选项列表 */
export interface settingList extends HTMLDivElement {
	/** 标题 */
	dataTitle?: string;
	/**
	 * 排列方向
	 * - `column` - 纵向
	 * - `row` - 横向
	 * @default 'column'
	 */
	dataDirection?: 'column' | 'row';
	/**
	 * 是否为可折叠列表
	 * @default false
	 */
	isCollapsible?: boolean;

	setTitle(title: string): void;
	getTitle(): string;
	setDirection(direction: 'column' | 'row'): void;
	getDirection(): 'column' | 'row';
	setCollapsible(collapsible: boolean): void;
	getCollapsible(): boolean;
}

/**
 * 选项条目  
 * 一般无需给此组件添加属性  
 * 因为 `setting-list` 会根据自身属性来自动设置此组件的属性
 */
export interface settingItem extends HTMLDivElement {
	/**
	 * 排列方向  
	 * `setting-list` 会根据自身属性来自动设置此组件的属性
	 * - `column` - 纵向
	 * - `row` - 横向
	 */
	dataDirection?: 'column' | 'row';

	setDirection(direction: 'column' | 'row'): void;
	getDirection(): 'column' | 'row';
}

/** 下拉选择框 */
export interface settingSelect extends HTMLSelectElement {
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;

	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
}

/** 选项 */
export interface settingOption extends HTMLOptionElement {
	/** 数据值 */
	dataValue?: string;
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * 是否选中
	 * @default false
	 */
	isSelected?: boolean;
	/**
	 * 选中事件
	 */
	onSelect?: (e: Event) => void;

	setValue(value: string): void;
	getValue(): string;
	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
	setSelected(selected: boolean): void;
	getSelected(): boolean;
}

/** 开关 */
export interface settingSwitch extends HTMLInputElement {
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * 是否激活
	 * @default false
	 */
	isActive?: boolean;

	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
	setActive(active: boolean): void;
	getActive(): boolean;
}

/** 按钮 */
export interface settingButton extends HTMLButtonElement {
	/**
	 * 类型
	 * - `primary` - 主要
	 * - `secondary` - 次要
	 * @default 'secondary'
	 */
	dataType?: 'primary' | 'secondary';
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;

	setType(type: 'primary' | 'secondary'): void;
	getType(): 'primary' | 'secondary';
	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
}

/** 文本 */
export interface settingText extends HTMLSpanElement {
	/**
	 * 类型
	 * - `secondary` - 次要
	 * @default undefined
	 */
	dataType?: 'secondary';

	setType(type: 'secondary'): void;
	getType(): 'secondary' | undefined;
}

/** 链接 */
export interface settingLink extends HTMLAnchorElement {
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;
	/** 链接 */
	dataValue?: string;

	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
	setValue(value: string): void;
	getValue(): string;
}

/**
 * 分割线  
 * **提示**  
 *   一般无需使用此组件，因为 `setting-list` 会给每个 `setting-item` 之间添加此组件
 */
export interface settingDivider extends HTMLSpanElement {
	/**
	 * 排列方向
	 * - `column` - 纵向
	 * - `row` - 横向
	 * @default 'row'
	 */
	dataDirection?: 'column' | 'row';

	setDirection(direction: 'column' | 'row'): void;
	getDirection(): 'column' | 'row';
}

/** 模态窗口 */
export interface settingModal extends HTMLDivElement {
	/**
	 * 是否禁用
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * 是否显示
	 * @default false
	 */
	isActive?: boolean;
	/** 标题 */
	dataTitle?: string;

	setDisabled(disabled: boolean): void;
	getDisabled(): boolean;
	setActive(active: boolean): void;
	getActive(): boolean;
	setTitle(title: string): void;
	getTitle(): string;
}
