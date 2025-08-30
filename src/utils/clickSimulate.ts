export function simulateClickForceFocus() {
    const elementAtPoint = document.elementFromPoint(1, 1);
    const event = new MouseEvent('click', {
        bubbles: true, // Allow event to bubble up the DOM
        cancelable: true, // Allow event to be canceled
        detail: 1, // Number of times the button was clicked
        screenX: 0, // X coordinate of the mouse pointer in global (screen) coordinates
        screenY: 0, // Y coordinate of the mouse pointer in global (screen) coordinates
        clientX: 0, // X coordinate of the mouse pointer in local (DOM content) coordinates
        clientY: 0, // Y coordinate of the mouse pointer in local (DOM content) coordinates
        ctrlKey: false, // Whether the control key was pressed
        altKey: false, // Whether the alt key was pressed
        shiftKey: false, // Whether the shift key was pressed
        metaKey: false, // Whether the meta key (e.g., Command on Mac, Windows key on Windows) was pressed
        button: 0, // The button number (0 for main button, 1 for middle, 2 for right)
        buttons: 1 // The button(s) that are pressed (bitmask)
    });
    if (elementAtPoint) elementAtPoint.dispatchEvent(event);
}
