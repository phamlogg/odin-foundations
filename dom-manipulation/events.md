## Section 7
- ### [Load Events] (#load-events)
- ### [Mouse Events] (#mouse-events)

#### [Load Events] (#load-events) (https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)

When you open a page, the following events occur:

- `DOMContentLoaded` - then the browser fully loaded HTML and completed building the DOM tree, but not external resources like images, stylesheets. In this event, you can start selecting DOM nodes and initialize the interface.
- `load` - the browser fully loaded the HTML and external resources.

When you leave a page, the following events occur:

- `beforeunload` - occurs before the page and resources are unloaded. This events show confirmation dialog to confirm if you want to close the page. Useful for preventing data loss.
- `unload` - occurs when the page has completely unloaded. Can be used to send analytic data or clean up resources.

To handle page events, call `addEventListener()` method on the `document` object:

```
document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
});

document.addEventListener('load',() => {
    // handle load event
});

document.addEventListener('beforeunload',() => {
    // handle beforeunload event
});

document.addEventListener('unload',() => {
    // handle unload event
});
```

Example:

```
<!DOCTYPE html>
<html>
<head>
    <title>JS Page Load Events</title>
</head>

<body>
    <script>
        addEventListener('DOMContentLoaded', (event) => {
            console.log('The DOM is fully loaded.');
        });

        addEventListener('load', (event) => {
            console.log('The page is fully loaded.');
        });

        addEventListener('beforeunload', (event) => {
            // show the confirmation dialog
            event.preventDefault();
            // Google Chrome requires returnValue to be set.
            event.returnValue = '';
        });

        addEventListener('unload', (event) => {
            // send analytic data
        });
    </script>
</body>
</html>
```

---

#### [Mouse Events] (#mouse-events) (https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)

##### click

When you `click` an element, there are no less than 3 mouse events fire in the following sequence:
1. The `mousedown` event fires when you depress the mouse button on the element.
2. The `mouseup` event fires when you release the mouse button on the element.
3. The `click` event fires when one `mousedown` and one `mouseup` are detected on the element.

If you depress the mouse button on an element and move your mouse off the element, and then release the mouse button. The only `mousedown` event fires on the element.

Likewise, if you depress the mouse button, move the mouse over the element, and release the mouse button, the only `mouseup` event fires on the element.

In both cases, the `click` event never fires.

##### dbclick

The `dbclick` event takes 2 `click` events fire. Which has 4 events fired in the following order:
1. `mousedown`
2. `mouseup`
3. `click`
4. `mousedown`
5. `mouseup`
6. `click`
7. `dblclick`

##### mousemove

The `mousemove` event fires repeatedly when you move the mouse cursor around an element. It will cause the page to be slow, therefore, only register `mousemove` event handler when needed and remove it immediately as soon as it is no longer needed. Ex:

```
element.onmousemove = mouseMoveEventHandler;
// ...
//  later, no longer use
element.onmousemove = null;
```
##### mouseover / mouseout

The `mouseover` event fires when the mouse is outside of the element and then move inside the boundaries of the element.

The `mouseout` event is the opposite.

##### mouseenter / mouseleave

Same as `mouseover` and `mouseout` but do not bubble and do not fire when the mouse moves over descendant elements.


