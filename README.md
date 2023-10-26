Dear Diary
By Robert Lee
Live Link: https://dispicablelee.github.io/dear_diary_v2/
GitHub Repo: https://github.com/DispicableLee/dear_diary_v2



Project Resources

API: https://rapidapi.com/twinword/api/emotion-analysis/details
This api takes in a selection of text and returns a score of how much of the following emotions the api could read out of it:
Disgust
Sadness
Anger
Joy
Surprise
Fear
	While I am sure that more sophisticated emotion-reader api’s exist that are more nuanced in their analysis, the api i used for the project was the only freemium one i could find.

PageFlip (though no longer in use): https://github.com/Nodlik/react-pageflip
I swear, if I could have gotten this to integrate with the rest of my project, Dear Diary would have been great.
This is a library that provides an object class of ‘PageFlip’, instances of which are the ‘books’ that appear on the browser, loaded in with pre-existing html elements. 

<img width="273" alt="Screenshot 2023-10-26 at 11 09 30 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/7d61a5da-0ab4-41eb-8219-d1a9585ff6b3">

It was a relatively simple task of being able to load in the pre-generated html  elements from the ‘page’ classes
<img width="624" alt="Screenshot 2023-10-26 at 11 10 04 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/89dfdca1-4326-46fb-90e1-30f508cf26c3">

However, the real problem lay in what html elements were ‘allowed’ (i.e, able to be used properly in a PageFlip instance), which at this moment is only text and images. Any sort of inputs were unable to be used with the library, which meant that this entire library could not be used in the way that I wanted to use it, and so I did not use it at all in the final  product.

CSS Styling:  https://gitlab.com/edent/paper-prototype-css/-/tree/main
Because I could no longer use the PageFlip library, I resorted to making the webpage much better looking with this css library, something that makes the styling look like stacked sheets of paper. 
I already had this library in  mind when I started the project, in the hopes that it would take the project to new heights; not only would the ‘book’ be fully interactive with a text form, but it would also look like stacked sheets of paper.
Alas, this has not come to pass, and so when used with the new direction of the project, the result was: 

<img width="338" alt="Screenshot 2023-10-26 at 11 10 28 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/0672ee2f-6cd7-4df6-a7fc-86f6c4a5adfd">




Project Design

Creating pages from class.
The design of this project necessitated that although all html elements (aside from the main ‘book’ div) are going to be loaded as pages, not all pages will have the same elements and content. Thus, I have a master ‘Page’ class,
<img width="376" alt="Screenshot 2023-10-26 at 11 10 51 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/0058e2d6-5432-4e58-81bd-59a12066a6d3">

 as well as a ‘PageForm’ class - the input form that the Emotion Analysis will take in:
 
 <img width="348" alt="Screenshot 2023-10-26 at 11 12 32 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/9972be4d-8d2e-4ad2-a0a8-17be4e0d8832">

and a ‘PageEmotion’ class, the page that will render the response from the api:

<img width="367" alt="Screenshot 2023-10-26 at 11 12 05 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/f1d9f864-c765-46c6-8102-b324d82d5c4e">

Given that the api only returns the scores of six emotions, it was relatively easy to generate the fields in which the api responses will go.

Pages + API
When the input form is filled with any given text and the form is submitted, the text is then sent in the request as a URLSearchParams object, and the response of which is directed to the respective labels in a ‘PageEmotion’ instance:
<img width="407" alt="Screenshot 2023-10-26 at 11 15 52 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/c75b5502-2369-47a8-aa00-990d61e03f95">

NOTE that the response logic does not tell the data to go into a ‘PageEmotion’ instance, but it does look for the element id to which those emotions apply, something already handled upon the creation of a new instance of the class.

Changing Styling based on API response
In the response object, there is a field named ‘emotions_detected’, which gives out all the emotions that the inputted text gives off (at least, to the api). Depending on what the value of that is, the styling of the pages would change
Anger:

<img width="479" alt="Screenshot 2023-10-26 at 11 16 16 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/c6904efa-99c1-43a9-ae80-5754fcae74b4">

Joy:

<img width="477" alt="Screenshot 2023-10-26 at 11 16 39 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/90d5c22c-acd9-4f56-87bb-247222b7e158">
And more :)



One more thing, kinda-sorta-not-really related to the project but still relevant.
In the time between the api request and the subsequent response, i added a little animation to make the wait easier.

<img width="331" alt="Screenshot 2023-10-26 at 11 17 25 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/0c1de715-de1f-446e-8ea5-4bcb255aae42">

In the code, these gifs are stored as an array of urls to be loaded when the page is loaded in.

<img width="595" alt="Screenshot 2023-10-26 at 11 18 24 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/c7e63a53-528d-4ac5-b74b-c9c663e2b678">

A funny tidbit is that while in ruby, you could get a random element from an array by doing this:

<img width="257" alt="Screenshot 2023-10-26 at 11 18 54 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/9283f050-97b0-43c6-8fb9-0c204fabf4e6">

In Javascript, the process is longer, albeit legible if you understand how it works

<img width="430" alt="Screenshot 2023-10-26 at 11 19 14 AM" src="https://github.com/DispicableLee/dear_diary_v2/assets/67909854/4178713c-f438-42fe-b482-93c641f69050">

