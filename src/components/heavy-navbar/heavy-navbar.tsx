import { Component, Listen, Prop, State } from '@stencil/core';
import { MenuItem } from './interfaces/menuItem';


@Component({
	tag: 'heavy-navbar',
	styleUrl: 'heavy-navbar.css',
	shadow: true
})

export class HeavyNavbar {
	@State() innerMenuItems: Array<MenuItem>;
	@State() menuIcon: HTMLElement;
	@State() overlayMenu: HTMLElement;
	@State() desktopMenu: HTMLElement;
	@State() mobileMenu: HTMLElement;
	@State() navElement: HTMLElement;

	@Prop({reflectToAttr: true}) menuItems: string = null;
	@Prop({reflectToAttr: true}) itemCount: number;
	@Prop({reflectToAttr: true}) logo: string = null;
	@Prop({reflectToAttr: true}) position: string = 'fixed';

	componentWillLoad() {
		this.innerMenuItems = JSON.parse(this.menuItems);
	}

	componentDidLoad() {
		this.moveMenu();

		// Set Navbar Set
		switch (this.position) {
			case 'fixed':
				this.navElement.style.position = 'fixed';
				break;
			case 'fixedScroll':
				this.navElement.style.position = 'fixed';
				break;
			case 'scroll':
				this.navElement.style.position = 'absolute';
				break;
			default:
				throw new Error("Position information is invalid. Can be set to: 'fixed', 'fixedScroll', 'scroll'");
		}
	}

	render() {
		return ([
			<nav ref={(element: HTMLElement) => this.navElement = element}>
				<div class={"navbar-wrapper"}>
					{this.createLogo()}
					<ul id={"desktop-menu"} ref={(element: HTMLElement) => this.desktopMenu = element}>
						{this.createMenuItems()}
					</ul>
					<div ref={(element: HTMLElement) => this.menuIcon = element} class={"menuIcon"}
						 onClick={() => this.toggleMobileMenu()}>
						<span class={"bar1"}></span>
						<span class={"bar2"}></span>
						<span class={"bar3"}></span>
					</div>
				</div>
			</nav>,
			<div class={"overlay-menu"} ref={(element: HTMLElement) => this.overlayMenu = element}>
				<ul id={"mobile-menu"} ref={(element: HTMLElement) => this.mobileMenu = element}>

				</ul>
			</div>
		]);
	}


	createMenuItems(): Array<JSX.Element> {
		var htmlItems: Array<JSX.Element> = [];

		if (this.menuItems != null) {
			this.innerMenuItems.map(menuItem => {
				htmlItems.push(<li><a href={menuItem.url}>{menuItem.name}</a></li>)
			});
		} else {
			for (var i = 0; i < this.itemCount; i++) {
				htmlItems.push(<li>
					<slot name={'item-' + (i + 1)}/>
				</li>)
			}
		}

		return htmlItems
	}

	createLogo(): any {
		if (this.logo == null) {
			return;
		} else {
			return <div class={"logo"}>
				<a href="/">Logo</a>
			</div>;
		}
	}

	toggleMobileMenu() {
		this.menuIcon.classList.toggle('opened');
		if (this.menuIcon.classList.contains('opened')) {
			this.overlayMenu.style.transform = 'translateX(0%)';
			this.overlayMenu.style.transition = 'transform 0.4s ease-out';
		} else {
			this.overlayMenu.style.transform = 'translateX(-100%)';
			this.overlayMenu.style.transition = 'transform 0.4s ease-out';
		}
	}

	@Listen('window:resize')
	moveMenu() {
		if (window.innerWidth <= 638 && this.desktopMenu.children.length != 0) {
			while (this.desktopMenu.children.length > 0) {
				this.mobileMenu.appendChild(this.desktopMenu.childNodes[0]);
			}
		} else if (window.innerWidth > 638 && this.mobileMenu.children.length != 0) {
			if (this.menuIcon.classList.contains('opened')) {
				this.toggleMobileMenu();
			}
			while (this.mobileMenu.children.length > 0) {
				this.desktopMenu.appendChild(this.mobileMenu.childNodes[0]);
			}
		}
	}
}
