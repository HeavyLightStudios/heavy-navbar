import { Component, Listen, Prop, State, h } from '@stencil/core';
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

	@Prop({reflect: true}) menuItems: string = null;
	@Prop({reflect: true}) itemCount: number;
	@Prop({reflect: true}) logo: string = null;
	@Prop({reflect: true}) position: string = 'scroll';

	private lastScrollState: number = 0;
	private fixedScroll: boolean = false;

	componentWillLoad() {
		this.innerMenuItems = JSON.parse(this.menuItems);
	}

	componentDidLoad() {
		this.moveMenu();
		this.setActiveMenuItem();

		// Set Navbar Set
		switch (this.position) {
			case 'fixed':
				this.navElement.style.position = 'fixed';
				break;
			case 'fixed-scroll':
				this.navElement.style.position = 'fixed';
				this.navElement.style.webkitTransition = "transform 0.2s ease-out";
				this.navElement.style.transition = "transform 0.2s ease-out";
				this.navElement.style.transform = 'translateY(0%)';
				this.fixedScroll = true;
				break;
			case 'scroll':

				break;
			default:
				throw new Error("Position information is invalid. Can be set to: 'fixed', 'fixed-scroll', 'scroll'");
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
						<span class={"bar1"} />
						<span class={"bar2"} />
						<span class={"bar3"} />
					</div>
				</div>
			</nav>,
			<div class={"overlay-menu"} ref={(element: HTMLElement) => this.overlayMenu = element}>
				<ul id={"mobile-menu"} ref={(element: HTMLElement) => this.mobileMenu = element}>

				</ul>
			</div>
		]);
	}


	createMenuItems(): Array<Element> {
		var htmlItems: Array<Element> = [];

		if (this.menuItems != null) {
			this.innerMenuItems.map(menuItem => {
				htmlItems.push(<li><a href={menuItem.url} onClick={ (event: UIEvent) => this.menuClick(event)}>{menuItem.name}</a></li>)
			});
		} else {
			for (var i = 0; i < this.itemCount; i++) {
				htmlItems.push(<li onClick={ (event: UIEvent) => this.menuClick(event)}>
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
				<a href="/"><img class={"logo-image"} src={this.logo}/></a>
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

	menuClick(ev) {
		var activeElements = document.getElementsByClassName('active');
		for(var i = 0; i < activeElements.length; i++) {
			activeElements[i].classList.remove('active');
		}
		ev.srcElement.classList.add('active');
		if(this.mobileMenu.children.length > 0) {
			this.toggleMobileMenu();
		}
	}

	setActiveMenuItem() {
		var url = document.location.href;
		var menuItems = document.getElementsByTagName('a');
		for (var i = 0; i < menuItems.length; i++) {
			var anchorMenuItem = menuItems[i] as HTMLAnchorElement;
			if(anchorMenuItem.href == url) {
				menuItems[i].classList.add('active');
			}
		}
	}

	@Listen('resize', { target: 'window' })
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

	@Listen('scroll', { target: 'window' })
	bodyScroll() {
		if(this.fixedScroll && !this.menuIcon.classList.contains('opened'))
		{
			var scrollState = document.documentElement.scrollTop || document.body.scrollTop;

			if(scrollState == 0)
			{

			} else if(scrollState > this.lastScrollState) {
				this.navElement.style.transform = 'translateY(-100%)';
			} else {
				this.navElement.style.transform = 'translateY(0%)';
			}

			this.lastScrollState = scrollState <= 0 ? 0 : scrollState;
		}
	}
}
