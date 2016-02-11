##What does it do?##

###Interactive Elements:###
_ALL text fields_
When the field is clicked (or 'selected' with a tab), the border of the field changes colors (to blue from white) and the blinking cursor appears in the field.
When anywhere outside of the section (probably <div>) containing the 'activated' field and its label is clicked, the border of the field changes back to white
The placeholder text remains in the field, unchanged, until a character is typed in the field. The 'typed' text is a different color (white) than the placeholder text (dark blue)

_single-line text fields_
if you hit -return- in these fields, you will submit the form (maybe browser auto-functionality)

_text area fields_
You can hit -return- in these fields to start writing on a new line (maybe browser auto-functionality)

_drop-down fields_
These default to a non-selectable, descriptive value
clicking on the field makes the other (selectable) values appear in a list
One selection can be made at a time

_send your data button_
This will 'submit' the form (in our case, print the form entries to the console)
When the button is _mouseovered_, the background color changes (from dark blue to light blue), and again (in the opposite direction) when it is _mouseouted_

##How does it do it?##
The borders of the text fields will be changed via JavaScript
the background color of the _send your data_ button will be changed via JavaScript
(maybe) submitting the form will require creation of a JS array or html list
The only output of our page will be a console.log statement

In order to make these changes, we will need to use the following javascript things:

element.style.backgroundColor (for the button mouseover/out)
element.style.borderColor (for the 'activated' text fields)
something to 'transmit' the submitted data
