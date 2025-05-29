# text_to_speechConvertor

The HTML file is a simple webpage titled "Speech to Text" but the heading inside the page says "Text to speech". It contains a textarea for input and two buttons: "Speak" and "Pause". The buttons call JavaScript functions Speak() and Pause() respectively, which are presumably defined in the linked JS file "1Speech_to text_convertor.js". The CSS file "1Speech_to text_convertor.css" is linked for styling.

The project appears to be a Text to Speech converter rather than Speech to Text, based on the UI elements and heading.


The JavaScript file defines two functions: Speak() and pause() (note the lowercase 'p' in pause).

Speak(): Gets the text from the textarea with id "input", creates a SpeechSynthesisUtterance object with that text, and uses the speechSynthesis API to speak the text aloud.
pause(): Calls speechSynthesis.pause() to pause the speech.
The HTML calls Speak() and Pause() (uppercase P) on button clicks, but the function defined is pause() with lowercase p. This might be a bug, but for the description, the intent is clear: the page converts text input to speech and allows pausing.

The project is a simple Text to Speech converter web app that takes user input text and reads it aloud using the Web Speech API.

you can use it to submit your college as a mini project;
