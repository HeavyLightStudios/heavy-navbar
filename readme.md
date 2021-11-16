<!--
```
<custom-element-demo>
  <template>
    <script src='https://unpkg.com/heavy-navbar@0.0.19/dist/heavynavbar.js'></script>
    <heavy-navbar item-count="4">
        <a href="#" slot="item-1">Home</a>
        <a href="#about" slot="item-2">About</a>
        <a href="#blog" slot="item-3">Blog</a>
        <a href="#contact" slot="item-4">Contact</a>
    </heavy-navbar>
  </template>
</custom-element-demo>
```
-->

# heavy-navbar

heavy-navbar is a responsive menu component built with customization in mind.

## Installation

`heavy-navbar` can be used wherever custom elements can be used. 

### Script Tag

`heavy-navbar` can be added to the head of your html document with the following script tag

```html
<script src='https://unpkg.com/heavy-navbar@0.0.18/dist/heavynavbar.js'></script>
```

The latest version can always be used using the following tag (Please note that using the latest tag could contain breaking changes)

```html
<script src='https://unpkg.com/heavy-navbar@latest/dist/heavynavbar.js'></script>
```

the latest pre-release version can be also added

```html
<script src='https://unpkg.com/heavy-navbar@next/dist/heavynavbar.js'></script>
```

### Node Modules

Install your node module

```npm
 npm install heavy-navbar --save
````

pre-release

```npm
 npm install heavy-navbar@next --save
````

once installed you can add a script tag to the head of your html document

```html
<script src='node_modules/heavy-navbar/dist/heavynavbar.js'></script>
```


## Usage

To put a blank navbar into your page ad the following HTML tag

```html
<heavy-navbar></heavy-navbar> 
```

Adding menu bar items can be done in one of two ways. Slot based or Property based

Slot based is done by setting the `item-count` attribute with the amount of items you are passing in, 
then adding the anchor tags inside the root tag. Each anchor tag needs a `slot` attribute to appear in the navbar.

```html
<heavy-navbar item-count="4">
    <a href="#" slot="item-1">Home</a>
    <a href="#about" slot="item-2">About</a>
    <a href="#blog" slot="item-3">Blog</a>
    <a href="#contact" slot="item-4">Contact</a>
</heavy-navbar>
```
Property based insertion takes a json array with both a name and a url property. This is done by setting the `menuItems` property on heavy-navbar.

```javascript
const heavyNavBar = document.querySelector(heavy-navbar);

heavyNavBar.menuItems = [
                        {"name":"Home","url":"/"},
                        {"name":"About","url":"/about"},
                        {"name":"Blog","url":"/url"},
                        {"name":"Contact","url":"/contact"}
                      ]

```

A JSON array can also be passed in via the `menu-items` attribute

```html
<heavy-navbar menu-items='[
                            {"name":"Home","url":"/"},
                            {"name":"About","url":"/about"},
                            {"name":"Blog","url":"/url"},
                            {"name":"Contact","url":"/contact"}
                        ]'>
</heavy-navbar>
```

## Appearance

`heavy-navbar` uses css variables to expose options to change. To make changes to `heavy-navbar` you can add styling to your page's css file.
 
```css
heavy-navbar {
	--heavy-navbar-background: #ffffff;
	--heavy-navbar-color: #000000;
	--heavy-navbar-hover-color: #333333;
}
```

## Position
`heavy-navbar` can be positioned in multiple ways.

- **Fixed:** will be fixed to the top of the screen.

```html
<heavy-navbar item-count="4" position="fixed">
    <a href="#" slot="item-1">Home</a>
    <a href="#about" slot="item-2">About</a>
    <a href="#blog" slot="item-3">Blog</a>
    <a href="#contact" slot="item-4">Contact</a>
</heavy-navbar>
```
- **Fixed with scroll:** like fixed will be fixed to the top of the page, but will auto hide on scroll.

```html
<heavy-navbar item-count="4" position="fixed-scroll">
    <a href="#" slot="item-1">Home</a>
    <a href="#about" slot="item-2">About</a>
    <a href="#blog" slot="item-3">Blog</a>
    <a href="#contact" slot="item-4">Contact</a>
</heavy-navbar>
```
- **Scroll:** Will scroll with the page. 

```html
<heavy-navbar item-count="4" position="scroll">
    <a href="#" slot="item-1">Home</a>
    <a href="#about" slot="item-2">About</a>
    <a href="#blog" slot="item-3">Blog</a>
    <a href="#contact" slot="item-4">Contact</a>
</heavy-navbar>
```

## Logo
Adding a logo in as easy as passing a path in via the `logo` attribute.
```html
<heavy-navbar item-count="4" position="scroll" logo="/images/logo.png">
    <a href="#" slot="item-1">Home</a>
    <a href="#about" slot="item-2">About</a>
    <a href="#blog" slot="item-3">Blog</a>
    <a href="#contact" slot="item-4">Contact</a>
</heavy-navbar>
```


![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)