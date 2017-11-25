# highlightScroll
1. To use the hightlight scroll functionality, add the css class ```.highlight``` to the ```a``` element in your menu.

Like this:
```html
<nav>
    <ul>
        <li>
            <a href="#section-one" class="highlight">One</a>
        </li>
        <li>
            <a href="#section-two" class="highlight">Two</a>
        </li>
        <li>
            <a href="#section-tree" class="highlight">Tree</a>
        </li>
        <li>
            <a href="#section-four" class="highlight">Four</a>
        </li>
        <li>
            <a href="#section-five" class="highlight">Five</a>
        </li>
    </ul>
</nav>
```

2. Add the two css classes ```.highlight``` and ```.section``` to the section that you want to correspond with the hightlightning on the nav items.

Like this:
```javascript
<div class="section highlight" id="section-one">
    <div class="inner-section">
        <h1>Section One</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu augue sed ipsum vulputate malesuada et vitae
            lorem. Mauris non lectus nibh. Fusce faucibus suscipit sollicitudin. Donec eget nisi vel tellus cursus
            convallis. Donec interdum pretium neque. Praesent vel mattis neque, nec volutpat diam. Suspendisse non
            consequat nunc, ac blandit ipsum. Sed at justo eget purus interdum varius eget aliquet nisl. Nulla sed
            accumsan enim, at laoreet dolor.</p>
    </div>
</div>
```

