# heavy-navbar

heavy-navbar is a responsive menu component built with customization in mind.

## Installation

Work in Progress

## Usage

To put a blank navar into your page ad the following HTML tag

```html
<heavy-navbar></heavy-navbar> 
```

Adding menu bar items can be done in one of two ways. Slot based or Property based

Slot based is done by setting the `item-count` attribute with the amount of items you are passing in, 
then adding the anchor tags inside the root tag.

```html
<heavy-navbar item-count="4">
    <a href="/" slot="item-1">Home</a>
    <a href="/about" slot="item-2">About</a>
    <a href="/blog" slot="item-3">Blog</a>
    <a href="/contact" slot="item-4">Contact</a>
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

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)